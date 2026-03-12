import { Component, signal } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, RouterOutlet],
  template:`
  <app-navbar (toggleTheme)="switchTheme()"></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class App {
  protected readonly title = signal('Portafolio');
  // Signal para saber si es dark theme
  isDark = signal(true);

  switchTheme() {
    this.isDark.update(dark => {
      document.body.classList.toggle('dark', !dark);
      return !dark;
    });
  }
}
