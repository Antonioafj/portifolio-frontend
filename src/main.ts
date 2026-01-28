import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Importa o que editamos

bootstrapApplication(AppComponent, appConfig) // Passa o appConfig aqui
  .catch((err) => console.error(err));