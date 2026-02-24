// src/data/portfolioData.js

export const projects = [
  {
    id: 1,
    title: "Este portafolio (React + Tailwind)",
    desc:
      "Diseño y desarrollo de un portafolio profesional responsive con React y TailwindCSS, enfocado en rendimiento y claridad visual.",
    link: "https://github.com/Aplo19/Portafolio-AdrianPaoloSalvadorMendieta",
    tags: ["React", "TailwindCSS", "AOS", "UI"],
  },
  {
    id: 2,
    title: "Gestión de reservas - SPA",
    desc:
      "Sistema de gestión de reservas para un SPA desarrollado en Java, aplicando principios de Programación Orientada a Objetos.",
    link: "https://github.com/Aplo19/gestion-reservas-spa-java",
    tags: ["Java", "NetBeans", "POO", "Desktop"],
  },
  {
    id: 3,
    title: "Preguntas educativas: Historia del Perú",
    desc:
      "Aplicación educativa interactiva construida en Python para evaluar y reforzar conocimientos sobre historia.",
    link: "https://github.com/Aplo19/Preguntas-Educativas",
    tags: ["Python", "Educación", "Scripting"],
  },
  {
    id: 4,
    title: "Inspiraciencia (red social de lectura)",
    desc:
      "Plataforma web para compartir publicaciones y libros en PDF con funciones sociales y manejo de base de datos.",
    link: "https://github.com/Aplo19/Inspiraciencia",
    tags: ["Web", "Comunidad", "PDF", "Base de datos"],
  },
  {
    id: 5,
    title: "Banco Platform (BFF + Microservicios)",
    desc:
      "Arquitectura backend con BFF, comunicación entre microservicios, OAuth2/JWT, trazabilidad con X-Trace-Id y despliegue con Docker.",
    link: "https://github.com/Aplo19/banking-bff-microservices-oauth2.git",
    tags: ["Microservicios", "BFF", "OAuth2/JWT", "Spring Boot", "Docker"],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Diseño responsive / Mobile-first",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "PHP",
      "Laravel",
      "Java",
      "Python",
      "C++",
      "Spring Boot",
      "Spring Security",
      "OAuth2 / JWT",
      "Arquitectura de microservicios",
      "BFF (Backend for Frontend)",
      "Desarrollo de APIs",
    ],
  },
  {
    category: "Base de datos",
    items: ["MySQL", "SQL", "Diseño y modelado relacional", "JPA / Hibernate"],
  },
  {
    category: "DevOps / Herramientas",
    items: [
      "Docker",
      "Docker Compose",
      "Maven",
      "Git / GitHub",
      "Swagger / OpenAPI",
      "Postman",
      "Logging y trazabilidad (X-Trace-Id)",
    ],
  },
  {
    category: "Desarrollo web",
    items: [
      "APIs REST",
      "Arquitectura MVC",
      "Programación Orientada a Objetos (POO)",
      "Consumo e integración de APIs",
      "Autenticación y control de acceso",
      "Validación de formularios",
      "Manejo de errores",
      "Optimización de rendimiento web",
      "Buenas prácticas de SEO técnico y accesibilidad",
    ],
  },
];

export const certifications = [
  {
    id: 101,
    title: "Introducción a la ciberseguridad",
    issuer: "Universidad Tecnológica del Perú - Cisco Networking Academy",
    date: "30 Aug 2025",
    pdf: "/certificado-ciberseguridad.pdf",
  },
  {
    id: 102,
    title: "Certificado Cisco",
    issuer: "Cisco Networking Academy",
    date: "20 Aug 2025",
    pdf: "/certificado-cisco.pdf",
  },
  {
    id: 103,
    title: "Gestión de amenazas cibernéticas",
    issuer: "Cisco Networking Academy",
    date: "Noviembre 2025",
    pdf: "/gestion-amenazas-ciberneticas.pdf",
  },
];
