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
  role = 'Fullstack Developer | Java + Spring Boot | Angular';
  description = [
    "Soy desarrollador Fullstack enfocado en la creación de aplicaciones web escalables y mantenibles.",
    "Trabajo principalmente con Java y Spring Boot en el backend y TypeScript con Angular en el frontend, desarrollando APIs REST, microservicios y aplicaciones web modernas.",
    "Tengo experiencia implementando sistemas de autenticación y autorización mediante JWT y Spring Security. Además, trabajo con bases de datos relacionales como PostgreSQL y MySQL, y desarrollo interfaces frontend modulares, reutilizables y mantenibles con Angular.",
    "De forma complementaria, también tengo experiencia en el desarrollo de aplicaciones móviles para Android utilizando Kotlin.",
    "Actualmente estoy aprendiendo React para ampliar mis habilidades en desarrollo frontend y seguir creciendo como desarrollador."];

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
