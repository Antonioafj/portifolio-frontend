import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// O caminho abaixo sobe 3 níveis: navbar -> components -> app -> src/environments
import { environment } from '../../../environments/environment'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Controla a visibilidade do menu "sandwich" no mobile
  isMenuOpen = false;

  constructor(private http: HttpClient) {}

  // Alterna o estado do menu para resolver o problema de navegação no celular
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  trackDownload(): void {
    // Busca a URL base do environment para evitar erros de domínio e arquivos corrompidos
    const url = `${environment.apiUrl}/metrics/cv-download`;
    
    this.http.post(url, {}).subscribe({
      next: () => console.log('Métrica de download sincronizada com sucesso.'),
      error: (err) => console.error('Erro ao registrar métrica no banco:', err)
    });
  }
}