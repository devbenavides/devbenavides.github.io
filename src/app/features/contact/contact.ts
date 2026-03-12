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
  copyEmail() {
    const email = document.getElementById('email-text')?.textContent;
    const tooltip = document.getElementById('tooltip');

    if (email && tooltip) {
      // Copiar al portapapeles
      navigator.clipboard.writeText(email).then(() => {
        // Mostrar tooltip
        tooltip.classList.add('show');

        // Ocultar tooltip después de 1.5 segundos
        setTimeout(() => {
          tooltip.classList.remove('show');
        }, 1500);
      });
    }
  }
}
