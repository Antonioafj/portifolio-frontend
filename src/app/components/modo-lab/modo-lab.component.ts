import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabApiService } from '../../services/lab-api.service';

@Component({
  selector: 'app-modo-lab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './modo-lab.component.html',
  styleUrl: './modo-lab.component.css'
})
export class ModoLabComponent {
  isModalOpen = false;
  isLoggedIn = false;
  currentStep: 'email' | 'code' = 'email';
  
  isLoading = false;
  errorMessage = ''; 
  
  contactInput: string = '';
  otpCode: string = '';
  authToken: string = '';
  customEmail: string = '';
  
  stats: any = {
    cvDownloads: 0,
    labAccesses: 0,
    apiTests: 0
  };
  
  today: Date = new Date();

  constructor(private labService: LabApiService) {}

  openModal() {
    this.isModalOpen = true;
    this.isLoggedIn = false;
    this.currentStep = 'email';
    this.contactInput = '';
    this.otpCode = '';
    this.errorMessage = '';
    document.body.style.overflow = 'hidden';
  }

  // Limpa o erro assim que o usuário começa a digitar novamente
  onInputChange() {
    this.errorMessage = '';
  }

  goToCodeStep() {
    if (!this.contactInput.trim()) {
      this.errorMessage = 'Por favor, insira um e-mail.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.labService.requestLoginCode(this.contactInput).subscribe({
      next: () => {
        this.isLoading = false;
        if (this.contactInput.includes('@')) {
          this.customEmail = this.contactInput;
        }
        this.currentStep = 'code';
      },
      error: (err) => {
        this.isLoading = false;
        this.handleBackendError(err, 'destination');
      }
    });
  }

  handleLogin() {
    // Validação de interface antes da chamada API
    if (this.otpCode.length !== 6) {
      this.errorMessage = 'O código deve ter exatamente 6 dígitos.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.labService.validateCode(this.contactInput, this.otpCode).subscribe({
      next: (response) => {
        this.authToken = response.token;
        this.isLoggedIn = true;
        this.today = new Date();
        this.loadSystemMetrics();
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.handleBackendError(err, 'code');
      }
    });
  }

  /**
   * Tratador de erros robusto para interceptar respostas do Spring Boot
   */
  private handleBackendError(err: any, field: string) {
    // 1. Erro 401: Código não bate com o banco (Mesmo tendo 6 dígitos)
    if (err.status === 401) {
      this.errorMessage = 'Código inválido ou expirado.';
      return;
    }

    // 2. Erro 429: Rate Limit (Muitas solicitações seguidas)
    if (err.status === 429) {
      this.errorMessage = err.error?.error || 'Aguarde um momento antes de tentar novamente.';
      return;
    }

    // 3. Erro 400: Validação de DTO (Formato de e-mail ou tamanho do código)
    if (err.status === 400) {
      if (err.error && typeof err.error === 'object') {
        // Tenta pegar a mensagem do campo específico (destination ou code)
        this.errorMessage = err.error[field] || 'Dados inválidos.';
      } else {
        this.errorMessage = err.error || 'Erro de validação.';
      }
      return;
    }

    // 4. Fallback para erros genéricos (500, conexão, etc)
    this.errorMessage = 'Serviço indisponível no momento.';
  }

  loadSystemMetrics() {
    this.labService.getStats(this.authToken).subscribe({
      next: (data) => {
        this.stats = data;
      },
      error: (err) => console.error('Erro ao carregar métricas', err)
    });
  }

  executeTestEmail() {
    if (!this.customEmail) return;

    this.isLoading = true;
    this.errorMessage = '';

    this.labService.sendTestEmail(this.customEmail, this.authToken).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadSystemMetrics();
        alert('E-mail de teste enviado com sucesso!');
      },
      error: (err) => {
        this.isLoading = false;
        this.handleBackendError(err, 'destination');
      }
    });
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }
}