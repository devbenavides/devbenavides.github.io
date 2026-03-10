import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
// Modelo del formulario
  form = signal<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  // Método de envío
  submitForm() {
    const data = this.form();

    // Validación simple
    if (!data.name || !data.email || !data.message) {
      console.warn('Todos los campos son obligatorios');
      return;
    }

    // Aquí podrías enviar a un backend real
    console.log('Mensaje enviado:', data);

    // Limpiar formulario
    this.form.set({
      name: '',
      email: '',
      message: ''
    });

    alert('¡Mensaje enviado correctamente!');
  }
}
