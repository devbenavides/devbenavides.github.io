import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  frontEnd = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 95 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Bootstrap', level: 85 },
    { name: 'React', level: 25 },
  ];

  backEnd = [
    { name: 'Spring Boot (Java)', level: 90 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 80 },
    { name: 'SQLite', level: 70 },
  ];

  devOps = [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Bitbucket', level: 40 },
  ];

}
