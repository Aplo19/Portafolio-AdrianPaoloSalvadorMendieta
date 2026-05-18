import { certifications, projects, skills } from "./data/portfolioData";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ProjectCard from "./components/ProjectCard";
import CertCard from "./components/CertCard";

const recognitions = [
  {
    title: "Talento revelación",
    desc: "Reconocimiento oficial por desempeño sobresaliente, compromiso y trabajo colaborativo.",
    file: "/TECHNOLOGY - Adrian Paolo Salvador Mendieta (1).pdf",
  },
  {
    title: "Certificado de reconocimiento",
    desc: "Reconocimiento por responsabilidad, constancia y aporte técnico en proyectos de desarrollo web.",
    file: "/CERTIFICADO DE RECONOCIMIENTO.pdf",
  },
  {
    title: "Carta de recomendación",
    desc: "Documento empresarial que respalda mi capacidad técnica y profesional.",
    file: "/carta_recomendacion_Adrian_Paolo_Salvador_Mendieta.pdf",
  },
];

const experiences = [
  {
    company: "Saco Oliveros, Lima",
    role: "Analista Programador",
    period: "Mar 2026 - Actualidad",
    details: [
      "Desarrollo y mantenimiento de consultas SQL avanzadas en PostgreSQL para módulos académicos, matrícula, caja y gestión administrativa.",
      "Debugging y análisis de código backend para identificar funciones, procedimientos almacenados y lógica de negocio conectada a base de datos.",
      "Implementación y optimización de scripts SQL para automatización de procesos, validaciones y corrección de incidencias en producción.",
      "Participación en mantenimiento y mejora de funcionalidades de sistemas internos utilizando Java y bases de datos relacionales.",
      "Optimización de consultas y análisis de rendimiento para mejorar tiempos de respuesta y estabilidad del sistema.",
      "Integración y validación de información entre módulos administrativos, académicos y financieros.",
      "Capacitación a usuarios y áreas internas sobre funcionalidades y uso de módulos del sistema.",
    ],
  },
  {
    company: "NEON HOUSE LED SAC, Lima",
    role: "Desarrollador Web Full Stack / Líder de Área",
    period: "Oct 2025 - Ene 2026",
    details: [
      "Desarrollo de interfaces responsivas con HTML, JSX/TSX, Tailwind CSS, Blade y Next.js.",
      "Implementación de lógica frontend con JavaScript/TypeScript y animaciones con Framer Motion.",
      "Desarrollo de endpoints y APIs con Laravel/PHP, integración con MySQL y optimización SQL.",
      "Mejora de rendimiento en React, SEO técnico y despliegues.",
      "Coordinación de equipo, seguimiento técnico y documentación.",
    ],
  },
  {
    company: "J&M Fotocopiadoras, Lima",
    role: "Asistente Técnico",
    period: "2022 - 2025",
    summary: "Mantenimiento del sitio corporativo y soporte técnico operativo.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "adriansalvadormendieta@gmail.com",
    href: "mailto:adriansalvadormendieta@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/adrian-paolo-salvador-mendieta-0b7843281",
    href: "https://www.linkedin.com/in/adrian-paolo-salvador-mendieta-0b7843281",
  },
  {
    label: "GitHub",
    value: "github.com/Aplo19",
    href: "https://github.com/Aplo19",
  },
];

function SectionLabel({ index, title }) {
  return (
    <div className="section-kicker">
      <span>{index}</span>
      <span>{title}</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />

      <main className="page-frame">
        <section id="home" className="hero-block">
          <div className="hero-copy">
            <p className="eyebrow">Full Stack Developer</p>
            <h1 className="hero-title">
              ADRIAN PAOLO
              <br />
              SALVADOR MENDIETA
            </h1>
            <p className="hero-summary">
              Desarrollo soluciones web modernas, escalables y mantenibles con foco en backend,
              bases de datos, rendimiento y experiencia de usuario.
            </p>

            <div className="hero-actions">
              <a href="/cv-adrian-paolo.pdf" download className="highlight-link">
                <span>Acceso directo</span>
                <strong>Descargar CV</strong>
              </a>
              <a
                href="/carta_recomendacion_Adrian_Paolo_Salvador_Mendieta.pdf"
                download
                className="highlight-link highlight-link-featured"
              >
                <span>Acceso directo</span>
                <strong>Carta de recomendación</strong>
              </a>
              <a href="#certs" className="highlight-link">
                <span>Ir a sección</span>
                <strong>Certificaciones</strong>
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-meta">
              <span>Lima, Perú</span>
              
            </div>

            <div className="intro-card">
              <div className="intro-card-label">01 / Perfil</div>
              <p>
                Profesional orientado al desarrollo de software con experiencia en Java, Spring
                Boot, JavaScript, React, PHP, Laravel, PostgreSQL y MySQL para construir
                productos web seguros y orientados a resultados.
              </p>
            </div>

            <div className="hero-stats">
              <div>
                <span>Perfil</span>
                <strong>Desarrollo de software y soluciones web</strong>
              </div>
              <div>
                <span>Valor</span>
                <strong>Compromiso, análisis y mejora continua</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-block">
          <SectionLabel index="01" title="Sobre mí" />
          <div className="about-grid">
            <div className="section-heading">
              <h2>Desarrollo de software y soluciones web con enfoque en backend, SQL y rendimiento.</h2>
            </div>

            <div className="section-copy">
              <p>
                Desarrollo soluciones Full Stack con experiencia en APIs, autenticación segura,
                validaciones, arquitectura escalable y mejora continua de sistemas internos.
              </p>
              <p>
                También he trabajado con arquitectura BFF, microservicios, OAuth2/JWT,
                trazabilidad con X-Trace-Id, documentación con Swagger/OpenAPI y despliegues
                con Docker.
              </p>
            </div>
          </div>

          <div className="detail-grid">
            <article className="info-card">
              <span className="info-index">A1</span>
              <h3>Formación</h3>
              <p>
                Formación en Ingeniería de Software en la Universidad Tecnológica del Perú
                (UTP), con enfoque en desarrollo web, bases de datos, redes y ciberseguridad.
              </p>
            </article>

            <article className="info-card">
              <span className="info-index">A2</span>
              <h3>Perfil técnico</h3>
              <p>
                Experiencia en desarrollo backend, consultas SQL avanzadas, integración entre
                módulos, mantenimiento de sistemas internos y mejora continua de procesos.
              </p>
            </article>
          </div>
        </section>

        <section id="experience" className="section-block">
          <SectionLabel index="02" title="Experiencia" />
          <div className="section-heading split-heading">
            <h2>Trayectoria profesional</h2>
          </div>

          <div className="timeline-list">
            {experiences.map((job, index) => (
              <article key={`${job.company}-${job.period}`} className="timeline-item">
                <div className="timeline-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{job.period}</span>
                </div>

                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>

                  {job.summary ? <p className="timeline-summary">{job.summary}</p> : null}

                  {job.details ? (
                    <ul className="timeline-points">
                      {job.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-block">
          <SectionLabel index="03" title="Habilidades" />
          <div className="section-heading split-heading">
            <h2>Tecnologías, herramientas y áreas donde ya trabajo con soltura.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.category} className="skill-card">
                <div className="skill-card-head">
                  <span>{group.category}</span>
                </div>
                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block">
          <SectionLabel index="04" title="Proyectos" />
          <div className="section-heading split-heading">
            <h2>Proyectos destacados construidos con enfoque práctico, técnico y escalable.</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 1} />
            ))}
          </div>
        </section>

        <section id="certs" className="section-block">
          <SectionLabel index="05" title="Certificaciones" />
          <div className="cert-grid">
            {certifications.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>

        <section id="recognitions" className="section-block">
          <SectionLabel index="06" title="Reconocimientos" />
          <div className="recognition-grid">
            {recognitions.map((item) => (
              <article key={item.title} className="recognition-card">
                <span className="info-index">PDF</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.file} target="_blank" rel="noreferrer" className="inline-link">
                  Ver documento
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block">
          <SectionLabel index="07" title="Contacto" />
          <div className="contact-grid">
            <div className="contact-main">
              <h2>Contacto</h2>
              <p>
                Estoy disponible para oportunidades laborales, proyectos de desarrollo y roles
                donde pueda aportar en backend, bases de datos, arquitectura y mejora de
                sistemas internos.
              </p>

              <div className="contact-actions">
                <a href="mailto:adriansalvadormendieta@gmail.com" className="button button-dark">
                  Escribirme
                </a>
                <a href="/cv-adrian-paolo.pdf" download className="button button-light">
                  Descargar CV
                </a>
              </div>
            </div>

            <div className="contact-side">
              {contactLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-link">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}

              <div className="contact-link contact-link-static">
                <span>Ubicación</span>
                <strong>Lima, Perú</strong>
              </div>

              <div className="contact-link contact-link-static">
                <span>Teléfono</span>
                <strong>+51 954 977 594</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
