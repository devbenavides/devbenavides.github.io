import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  name = 'David Benavides';
  role = 'Fullstack Developer';
  description = `Soy un desarrollador Fullstack apasionado por construir aplicaciones modernas, 
escalables y con interfaces atractivas. Tengo experiencia trabajando con Angular, Node.js, 
bases de datos SQL y NoSQL, y me encanta optimizar la experiencia de usuario.`;

  skills = [
    { name: 'Angular', level: 'Avanzado' },
    { name: 'Node.js', level: 'Avanzado' },
    { name: 'TypeScript', level: 'Avanzado' },
    { name: 'HTML & CSS', level: 'Avanzado' },
    { name: 'MongoDB', level: 'Intermedio' },
    { name: 'SQL', level: 'Intermedio' },
  ];

  achievements = [
    'Desarrollé 10+ proyectos fullstack exitosos',
    'Optimización de rendimiento en aplicaciones web',
    'Integración de APIs REST y GraphQL'
  ];
}
