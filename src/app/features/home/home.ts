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
  name = 'David Benavides';
  role = 'Desarrollador Fullstack';
  tagline = 'Fullstack developer especializado en Java + Spring Boot y Angular. Construyo APIs REST seguras, microservicios y aplicaciones web escalables.';
}
