import { Component } from '@angular/core';
import { Job } from '../../core/models/job.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: Job[] = [
    {
      company: 'Horisoft SAS',
      role: 'Desarrollador junior de aplicaciones móviles Android',
      period: 'Feb 2023 - Jun 2023',
      description: [
        'Implemente un subconjunto del modelo de datos principal del sistema para la persistencia local de la aplicación móvil Android.',
        'Integré la aplicación móvil con microservicios REST, incluyendo servicios de autenticación/autorización y gestión de formularios, cada uno con su propia base de datos.',
        'Desarrollé un sistema de generación dinámica de formularios en la aplicación móvil, configurables desde la plataforma web.',
        'Implementé un enfoque offline-first con mecanismos de sincronización de datos, permitiendo el diligenciamiento de formularios sin conexión y su posterior actualización con el backend.'
      ]
    },
    {
      company: 'Desarrollador Web - Pasantia',
      role: 'Dobleclick Software e Ingeniería S.A.S',
      period: 'Mar 2016 - Sep 2016',
      description: [
        'Participé en la modernización del módulo de inventario del sistema de administración, migrándolo a una arquitectura basada en el framework Zend (PHP).'
      ]
    }
  ];
}
