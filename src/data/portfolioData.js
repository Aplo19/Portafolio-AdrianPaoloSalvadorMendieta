// src/data/portfolioData.js

export const projects = [
  {
    id: 1, 
    title: "Este Portafolio (React & Tailwind)",
    desc:
      "Diseño y desarrollo de un portafolio profesional responsivo utilizando React y TailwindCSS para una experiencia moderna y rápida.",
    link: "https://github.com/Aplo19/Portafolio-AdrianPaoloSalvadorMendieta", 
    tags: ["React", "TailwindCSS", "AOS", "UX/UI"],
  },
  {
    id: 2,
    title: "Gestión de Reservas - SPA (Trabajo Final)",
    desc:
      "Sistema de gestión de reservas para un SPA desarrollado en NetBeans, implementando principios de Programación Orientada a Objetos (POO) en Java.",
    link: "https://github.com/Aplo19/gestion-reservas-spa-java",
    tags: ["Java", "NetBeans", "POO", "GUI"],
  },
  {
    id: 3,
    title: "Preguntas Educativas: Historia del Perú",
    desc:
      "Aplicación educativa interactiva construida en Python, diseñada para evaluar y reforzar el conocimiento de los usuarios sobre la Historia del Perú.",
    link: "https://github.com/Aplo19/Preguntas-Educativas",
    tags: ["Python", "Educativo", "Scripting"],
  },
  {
    id: 4,
    title: "Inspiraciencia (Red Social de Lectura)",
    desc:
      "Plataforma web donde los usuarios pueden interactuar, comentar publicaciones, dar 'me gusta' y publicar/descargar libros en formato PDF. Enfocado en la comunidad.",
    link: "https://github.com/Aplo19/Inspiraciencia",
    tags: ["Web", "Comunidad", "PDF Management", "Database"],
  },
];

export const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "TailwindCSS",
  "MySQL",
  "Git/GitHub",
  "Java",
  "C++",
];

export const certifications = [
    {
        id: 101,
        title: "Introducción a la Ciberseguridad",
        issuer: "Universidad Tecnológica del Perú — Cisco Networking Academy.",
        date: "30 Aug 2025",
        pdf: "/certificado-ciberseguridad.pdf"
    },
    {
        id: 102,
        title: "Certificado Cisco",
        issuer: "Curso Cisco Networking Academy.",
        date: "Aug 20, 2025",
        pdf: "/certificado-cisco.pdf"
    }
]