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
  showTooltip = false;

  copyEmail(email: string | null) {
    if (!email) return;

    navigator.clipboard.writeText(email).then(() => {
      this.showTooltip = true;

      setTimeout(() => {
        this.showTooltip = false;
      }, 1500);
    });
  }
}
