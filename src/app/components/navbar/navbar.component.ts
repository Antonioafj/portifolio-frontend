import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true, // Garante que o componente é standalone
  imports: [], // Se você usa CommonModule ou outros, adicione aqui
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private readonly API_URL = 'http://localhost:8080/api/v1/metrics/cv-download';

  constructor(private http: HttpClient) {}

  trackDownload(): void {
    // Faz a chamada ao backend em "segundo plano"
    this.http.post(this.API_URL, {}).subscribe({
      next: () => console.log('Métrica de download sincronizada.'),
      error: (err) => console.error('Erro ao registrar métrica:', err)
    });
  }
}