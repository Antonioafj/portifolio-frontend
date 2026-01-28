import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // 1. Adicionado aqui
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ModoLabComponent } from './components/modo-lab/modo-lab.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartnersComponent } from './components/partners/partners.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    PartnersComponent,
    ServicesComponent,
    ModoLabComponent,
    TechStackComponent,
    ContactComponent,
    FooterComponent
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // 2. Adicionado aqui para resolver o NG8001
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'antonioafj';
}