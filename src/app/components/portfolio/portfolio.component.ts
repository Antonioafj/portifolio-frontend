import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicione esta linha aqui
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
