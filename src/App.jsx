// src/App.jsx

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { projects, skills, certifications } from "./data/portfolioData";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ProjectCard from "./components/ProjectCard";
import CertCard from "./components/CertCard";

const Section = ({ id, title, children, aos, bgColor = "bg-gray-900", titleColor = "text-blue-400" }) => (
  <section id={id} className={`py-20 px-6 max-w-6xl mx-auto ${bgColor}`} data-aos={aos}>
    {title && (
        <h2 className={`text-3xl font-bold ${titleColor} mb-8 ${id === 'skills' || id === 'projects' ? 'text-center' : ''}`}>
            {title}
        </h2>
    )}
    {children}
  </section>
);

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans leading-relaxed">
      <Header />

      <main className="pt-20">
        <section
          className="h-screen flex flex-col items-center justify-center text-center px-6"
          data-aos="fade-up"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">Adrian Paolo Salvador Mendieta</h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-6">
               Estudiante de Ingeniería de Software en la{" "}
               <span className="text-blue-400 font-semibold">UTP</span>.<br />
                Desarrollador <strong>Full Stack</strong> enfocado en la creación de
                 aplicaciones web modernas, seguras y escalables 
                </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Ver Proyectos
            </a>
            <a
              href="/cv-adrian-paolo.pdf"
              download
              className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
            >
              Descargar CV
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-6 max-w-xl">
            Disponible para prácticas profesionales y puestos junior. CV y certificaciones disponibles para descarga.
          </p>
        </section>

        <Section id="about" title="Sobre mí" aos="fade-right">
          <p className="text-gray-300 mb-4">
               Soy estudiante de Ingeniería de Software en la{" "}
                <strong>Universidad Tecnológica del Perú (UTP)</strong>,
                 con enfoque en desarrollo web <strong>Full Stack</strong>.
                 Desarrollo aplicaciones web utilizando
                <strong> HTML, CSS, JavaScript, React, PHP y Laravel</strong>,
                 implementando funcionalidades como
                 <strong> autenticación de usuarios, CRUD, validaciones</strong> y
                 gestión de bases de datos <strong>MySQL</strong>.
                Me caracterizo por un enfoque práctico para resolver problemas
                y por entregar soluciones funcionales y de calidad.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Experiencia laboral</h3>
              <p className="text-gray-400">
             <strong>Asistente Técnico – J&M Fotocopiadoras</strong> (2022 – 2025).<br />
             Atención al cliente, gestión y mantenimiento del sitio web,
             soporte técnico básico, resolución de incidencias y manejo de caja.
             <span className="text-gray-500"> (Ver CV para más detalles)</span> </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Formación</h3>
              <p className="text-gray-400">
                 <strong>Ingeniería de Software</strong> — Universidad Tecnológica del Perú (UTP).<br />
                  9.º ciclo. Formación en desarrollo web, bases de datos,
                  redes y ciberseguridad con certificaciones Cisco.
              </p>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Habilidades" aos="zoom-in" bgColor="bg-gray-800">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {skills.map((s, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <div className="font-semibold">{s}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Proyectos destacados" aos="fade-up">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>

        <Section id="certs" title="Certificaciones" aos="fade-right" bgColor="bg-gray-900" titleColor="text-blue-400">
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {certifications.map((cert) => (
                    <CertCard key={cert.id} cert={cert} />
                ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center max-w-4xl mx-auto">
                Ver detalles completos en mi CV.
            </p>
        </Section>


        <Section id="contact" title="Contacto" aos="zoom-in" bgColor="bg-gray-800">
          <p className="text-gray-300 mb-6 text-center">¿Te interesa mi perfil? Estoy disponible para prácticas y posiciones junior.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:adriansalvadormendieta@gmail.com" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">📧 Enviar email</a>
            <a href="https://github.com/Aplo19" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-700 transition">💻 GitHub</a>
            <a href="https://www.linkedin.com/in/adrian-paolo-salvador-mendieta-0b7843281" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-700 transition">🔗 LinkedIn</a>
          </div>

          <p className="text-gray-500 mt-6 text-sm text-center">Tel: +51 954 977 594 • Lima, Perú</p>
        </Section>

      <Footer />
      </main>
    </div>
  );
}