import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabApiService {
  // Separamos as URLs base para organizar melhor
  private readonly AUTH_URL = 'http://localhost:8080/api/v1/auth';
  private readonly METRICS_URL = 'http://localhost:8080/api/v1/metrics';

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
   * Esse método resolve o erro que estava dando no seu componente!
   */
  getStats(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.METRICS_URL}/stats`, { headers });
  }
}