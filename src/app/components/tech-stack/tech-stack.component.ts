import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
  // ADICIONE A LINHA ABAIXO:
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class TechStackComponent { }