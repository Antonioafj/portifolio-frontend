import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // 2. Adicione esta linha aqui
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
