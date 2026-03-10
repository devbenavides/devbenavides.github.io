import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Academictech',
    description: 'Aplicación web fullstack para la gestión académica que permite administrar usuarios, docentes, estudiantes, cursos, matrículas y calificaciones. Backend desarrollado con Spring Boot y Spring Security, exponiendo una API REST con autenticación stateless basada en JWT y un sistema de control de acceso basado en roles y permisos. Frontend construido con React bajo una arquitectura modular basada en features, con componentes reutilizables que facilitan la escalabilidad y el mantenimiento del sistema.',
    keyFeatures: [
      'Autenticación segura mediante JWT',
      'Control de acceso basado en roles y permisos',
      'API REST desarrollada con Spring Boot',
      'Arquitectura modular basada en features en React',
      'Gestión completa de usuarios, cursos, matrículas y calificaciones',
      'Validación de datos en backend y frontend',
      'Manejo centralizado de excepciones en la API',
      'Uso de DTOs para desacoplar la capa de persistencia',
      'Persistencia de datos con PostgreSQL',
      'Interfaz responsiva optimizada para diferentes dispositivos'
    ],
    images: [
      { url: 'assets/images/academic-tech/atb_1.png', type: 'pc' },
      { url: 'assets/images/academic-tech/atb_2.png', type: 'pc' },
      { url: 'assets/images/academic-tech/atb_3.png', type: 'pc' },
      { url: 'assets/images/academic-tech/atb_4.png', type: 'pc' },
      { url: 'assets/images/academic-tech/atf_1.png', type: 'pc' },
      { url: 'assets/images/academic-tech/atf_2.png', type: 'pc' },
      { url: 'assets/images/academic-tech/atf_3.png', type: 'pc' },
      { url: 'assets/images/academic-tech/atf_4.png', type: 'pc' },
      { url: 'assets/images/academic-tech/atf_5.png', type: 'pc' },
      { url: 'assets/images/academic-tech/atf_6.png', type: 'pc' },
    ],
    technologies: [
      'Spring Boot',
      'Spring Security',
      'JWT',
      'React',
      'PostgreSQL'
    ],
    githubBackend: 'https://github.com/devbenavides/academic-tech-api',
    githubFrontend: 'https://github.com/devbenavides/academic-tech-ui',
    demo: ''
  },
  {
    id: 2,
    title: 'Dron Universitario – Control desde Celular',
    description: 'Desarrollé la aplicación en Kotlin para Android que permite controlar el dron mediante conexión Bluetooth con una ESP32. Implementé la interfaz de usuario y la comunicación en tiempo real, asegurando un control preciso y funcional desde el dispositivo móvil.',
    keyFeatures: [
      'Desarrollo de la aplicación en Kotlin para Android, que permite al usuario controlar el dron de manera intuitiva desde un celular.',
      'Implementación de la conexión Bluetooth con la placa ESP32, garantizando la comunicación en tiempo real entre la aplicación y el dron.',
      'Diseño de la interfaz de usuario enfocada en la experiencia de control, incluyendo botones de dirección, velocidad y funciones de vuelo.',
      'Pruebas y ajuste de la latencia y confiabilidad de la comunicación entre la app y el dron, asegurando un control preciso durante las maniobras.'
    ],
    images: [
      { url: 'assets/images/control-dron/cd_1.jpg', type: 'mobile-landscape' },
      { url: 'assets/images/control-dron/cd_2.jpg', type: 'mobile-landscape' },
      { url: 'assets/images/control-dron/cd_3.jpg', type: 'mobile' },
      { url: 'assets/images/control-dron/cd_4.jpg', type: 'mobile' },
      { url: 'assets/images/control-dron/cd_5.jpg', type: 'mobile' },
      { url: 'assets/images/control-dron/cd_6.png', type: 'pc' },
      { url: 'assets/images/control-dron/cd_7.png', type: 'pc' },
    ],
    technologies: ['Angular', 'Express', 'PostgreSQL'],
    githubBackend: 'https://github.com/tuusuario/ecommerce',
    githubFrontend: 'https://github.com/tuusuario/ecommerce',
    demo: 'https://demo.com'
  }
];