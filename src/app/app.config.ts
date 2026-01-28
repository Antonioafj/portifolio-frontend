import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // 1. Importação necessária

import { routes } from './app.routes';
import { register } from 'swiper/element/bundle';

register();

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient() // 2. Adicionado para habilitar o serviço de API
  ]
};