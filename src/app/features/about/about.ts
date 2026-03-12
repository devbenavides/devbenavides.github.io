import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  name = 'David Benavides';
  role = 'Desarrollador Fullstack | Java + Spring Boot | Angular';
  description = `Soy desarrollador Fullstack con experiencia en el desarrollo de aplicaciones web utilizando Java con Spring Boot en el backend y TypeScript con Angular en el frontend. 
Me enfoco en construir aplicaciones escalables y mantenibles, aplicando buenas prácticas de desarrollo y arquitectura. Tengo experiencia diseñando e implementando APIs REST y microservicios, integrando autenticación y autorización con JWT y Spring Security.
También trabajo con bases de datos relacionales como PostgreSQL y MySQL, y desarrollo interfaces modulares y reutilizables con Angular. Actualmente estoy aprendiendo React para ampliar mis habilidades en desarrollo frontend.`;

  skills = [
    { name: "Java", level: "Avanzado" },
    { name: "Spring Boot", level: "Avanzado" },
    { name: "Angular", level: "Intermedio" },
    { name: "TypeScript", level: "Intermedio" },
    { name: "REST APIs", level: "Avanzado" },
    { name: "Spring Security", level: "Intermedio" },
    { name: "PostgreSQL", level: "Intermedio" },
    { name: "MySQL", level: "Intermedio" },
    { name: "React", level: "Aprendiendo" }
  ];

  achievements = [
    "Diseño e implementación de APIs REST seguras con JWT y Spring Security",
    "Desarrollo de arquitectura basada en microservicios con Spring Boot",
    "Construcción de interfaces frontend modulares con Angular",
    "Aplicación de buenas prácticas de código limpio y arquitectura escalable",
    "Trabajo bajo metodologías ágiles como Scrum y XP"
  ];
}
