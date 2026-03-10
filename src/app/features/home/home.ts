import { Component, signal } from '@angular/core';
import { Button } from '../../shared/ui/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  name = 'Tu Nombre';
  role = 'Fullstack Developer';
  tagline = 'Construyo aplicaciones web modernas y escalables con Angular, Node.js y más.';
}
