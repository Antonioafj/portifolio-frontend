import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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

  isMenuOpen = false;

  constructor(private http: HttpClient) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /** 👇 SOLUÇÃO DO SCROLL MOBILE */
  navigateTo(id: string): void {
    this.isMenuOpen = false;

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // espera o menu fechar
  }

  trackDownload(): void {
    const url = `${environment.apiUrl}/metrics/cv-download`;
    this.http.post(url, {}).subscribe();
  }
}
