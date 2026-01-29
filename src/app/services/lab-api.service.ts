import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabApiService {
  // Agora as URLs são montadas dinamicamente com base no ambiente (Local ou Produção)
  private readonly AUTH_URL = `${environment.apiUrl}/auth`;
  private readonly METRICS_URL = `${environment.apiUrl}/metrics`;

  constructor(private http: HttpClient) { }

  // Passo 1: Solicitar código OTP
  requestLoginCode(contact: string): Observable<void> {
    const body = { destination: contact }; 
    return this.http.post<void>(`${this.AUTH_URL}/send-code`, body);
  }

  // Passo 2: Validar código e receber Token
  validateCode(destination: string, code: string): Observable<any> {
    return this.http.post(`${this.AUTH_URL}/verify-code`, { 
      destination: destination, 
      code: code 
    });
  }

  // Passo 3: Testar o template de e-mail (dentro do Lab)
  sendTestEmail(targetEmail: string, token: string): Observable<any> {
    const body = { destination: targetEmail }; 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(`${this.AUTH_URL}/test-template`, body, { headers });
  }

  /**
   * NOVO: Busca as métricas (downloads, acessos, testes)
   */
  getStats(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.METRICS_URL}/stats`, { headers });
  }
}