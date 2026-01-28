import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Adicione o Schema aqui

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicione esta linha aqui
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Se quiser usar a lógica de e-mail dinâmica que conversamos,
  // você pode adicionar a variável aqui futuramente.
}