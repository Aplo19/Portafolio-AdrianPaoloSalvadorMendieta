import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { projects, skills, certifications } from "./data/portfolioData";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ProjectCard from "./components/ProjectCard";
import CertCard from "./components/CertCard";
import FaultyTerminal from "./components/FaultyTerminal";
import SplitText from "./components/SplitText";
import SpotlightCard from "./components/SpotlightCard";
import Carousel from "./components/Carousel";

const Section = ({ id, title, children, aos = "fade-up" }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20" data-aos={aos}>
    {title ? (
      <SplitText
        text={title}
        tag="h2"
        className="section-title"
        splitType="words, chars"
        delay={18}
        duration={0.95}
        ease="power2.out"
        textAlign="left"
      />
    ) : null}
    {children}
  </section>
);

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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(320);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic", offset: 40 });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateViewport = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setCarouselWidth(Math.max(280, Math.min(window.innerWidth - 20, 420)));
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader-wrap" aria-label="Cargando contenido del portafolio">
        <div className="preloader">
          <div className="crack crack1" />
          <div className="crack crack2" />
          <div className="crack crack3" />
          <div className="crack crack4" />
          <div className="crack crack5" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="theme-orb -left-20 top-16 h-64 w-64 bg-[var(--brand)]" />
      <div className="theme-orb -right-20 top-[26rem] h-72 w-72 bg-cyan-400 dark:bg-teal-300" />

      <Header
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      />

      <main className="pt-20">
        <section
          id="home"
          className="hero-grid relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-4 pb-8 pt-10 text-center sm:min-h-screen sm:px-6 sm:pt-0"
        >
          <div className="absolute inset-0 z-0">
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
              <FaultyTerminal
                scale={1}
                gridMul={[2, 1]}
                digitSize={isMobile ? 1.2 : 1.4}
                timeScale={isMobile ? 0.22 : 0.26}
                scanlineIntensity={isMobile ? 0.28 : 0.35}
                glitchAmount={1}
                flickerAmount={1}
                noiseAmp={1}
                chromaticAberration={0}
                dither={0}
                curvature={0.2}
                tint={theme === "dark" ? "#9FF5E8" : "#c8fff6"}
                mouseReact
                mouseStrength={isMobile ? 0.12 : 0.18}
                pageLoadAnimation
                brightness={theme === "dark" ? (isMobile ? 0.75 : 0.9) : isMobile ? 0.45 : 0.55}
              />
            </div>
          </div>
          <div className="panel relative z-10 mx-auto w-full max-w-4xl rounded-2xl px-5 py-7 sm:p-12" data-aos="zoom-in">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] sm:mb-4 sm:text-sm">
              Full Stack Developer
            </p>
            <SplitText
              text="Adrian Paolo Salvador Mendieta"
              tag="h1"
              className="text-3xl font-black leading-tight tracking-tight sm:text-6xl"
              splitType="words, chars"
              delay={22}
              duration={1}
              ease="power3.out"
            />
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-lg">
              Estudiante de Ingeniería de Software en UTP. Construyo productos web modernos, seguros y escalables con foco en rendimiento y experiencia de usuario.
            </p>

            <div className="mx-auto mt-6 grid w-full max-w-sm grid-cols-1 gap-3 sm:mt-7 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center">
              <a href="#projects" className="btn-main w-full sm:w-auto">
                Ver proyectos
              </a>
              <a href="/cv-adrian-paolo.pdf" download className="btn-soft w-full sm:w-auto">
                Descargar CV
              </a>
              <a href="/carta_recomendacion_Adrian_Paolo_Salvador_Mendieta.pdf" download className="btn-soft w-full sm:w-auto">
                Carta de recomendación
              </a>
            </div>
          </div>
        </section>

        <Section id="about" title="Sobre mí" aos="fade-right">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="panel p-6 lg:col-span-2">
              <p className="leading-relaxed text-muted">
                Soy estudiante de Ingeniería de Software en la Universidad Tecnológica del Perú. Desarrollo soluciones Full Stack con Java, Spring Boot, JavaScript, React, PHP y Laravel. Trabajo en diseño de APIs, autenticación segura, validaciones y arquitectura escalable.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                También he implementado arquitectura BFF con microservicios, OAuth2/JWT, trazabilidad con X-Trace-Id, documentación con Swagger/OpenAPI y despliegue con Docker. Mi enfoque es construir software funcional, seguro y mantenible.
              </p>
            </article>

            <article className="panel p-6">
              <h3 className="text-lg font-bold">Formación</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Ingeniería de Software - Universidad Tecnológica del Perú (UTP). Noveno ciclo, con enfoque en desarrollo web, bases de datos, redes y ciberseguridad.
              </p>
            </article>
          </div>

          <article className="panel mt-6 p-6">
            <h3 className="text-lg font-bold">Experiencia laboral</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <strong>Desarrollador Web Full Stack / Líder de Área - NEON HOUSE LED SAC, Lima</strong>
              <br />
              <span className="text-xs uppercase tracking-wide">Oct 2025 - Ene 2026</span>
              <br />
            
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              <li>Desarrollo de interfaces responsivas con HTML, JSX/TSX, Tailwind CSS, Blade y Next.js.</li>
              <li>Implementación de lógica frontend con JavaScript/TypeScript y animaciones con Framer Motion.</li>
              <li>Desarrollo de endpoints y APIs con Laravel/PHP, integración con MySQL y optimización SQL.</li>
              <li>Mejora de rendimiento en React (`useMemo`, `useCallback`), SEO técnico y despliegues.</li>
              <li>Coordinación de equipo, seguimiento técnico y documentación.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <strong>Asistente Técnico - J&M Fotocopiadoras</strong> (2022 - 2025). Mantenimiento del sitio corporativo y soporte técnico operativo.
            </p>
          </article>
        </Section>

        <Section id="skills" title="Habilidades" aos="zoom-in">
          {isMobile ? (
            <Carousel
              items={skills}
              baseWidth={carouselWidth}
              loop
              renderItem={(group) => (
                <SpotlightCard
                  className="min-h-[20rem] p-7 sm:min-h-0 sm:p-6"
                  spotlightColor="color-mix(in srgb, var(--brand) 22%, transparent)"
                >
                  <h3 className="mb-4 text-2xl font-bold sm:text-xl">{group.category}</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {group.items.map((skill) => (
                      <div
                        key={skill}
                        className="rounded-lg border border-slate-400/20 bg-[var(--surface-soft)] px-3 py-2 text-sm text-muted"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              )}
            />
          ) : (
            <div className="space-y-7">
              {skills.map((group) => (
                <article key={group.category} className="panel p-6">
                  <h3 className="mb-4 text-xl font-bold">{group.category}</h3>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                    {group.items.map((skill) => (
                      <div
                        key={skill}
                        className="rounded-lg border border-slate-400/20 bg-[var(--surface-soft)] px-3 py-2 text-sm text-muted"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </Section>

        <Section id="projects" title="Proyectos destacados">
          {isMobile ? (
            <Carousel
              items={projects}
              baseWidth={carouselWidth}
              loop
              renderItem={(project) => <ProjectCard project={project} />}
            />
          ) : (
            <div className="grid gap-7 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </Section>

        <Section id="certs" title="Certificaciones" aos="fade-left">
          {isMobile ? (
            <Carousel
              items={certifications}
              baseWidth={carouselWidth}
              loop
              renderItem={(cert) => <CertCard cert={cert} />}
            />
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <CertCard key={cert.id} cert={cert} />
              ))}
            </div>
          )}
        </Section>

        <Section id="recognitions" title="Reconocimientos" aos="fade-up">
          {isMobile ? (
            <Carousel
              items={recognitions}
              baseWidth={carouselWidth}
              loop
              renderItem={(item) => (
                <SpotlightCard
                  className="min-h-[16rem] p-7 sm:min-h-0 sm:p-6"
                  spotlightColor="color-mix(in srgb, var(--brand) 24%, transparent)"
                >
                  <h3 className="text-2xl font-bold sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted sm:text-sm">{item.desc}</p>
                  <a href={item.file} target="_blank" rel="noreferrer" className="btn-main mt-5 w-full sm:w-auto">
                    Ver PDF
                  </a>
                </SpotlightCard>
              )}
            />
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {recognitions.map((item) => (
                <SpotlightCard
                  key={item.title}
                  className="min-h-[16rem] p-7 sm:min-h-0 sm:p-6"
                  spotlightColor="color-mix(in srgb, var(--brand) 24%, transparent)"
                >
                  <h3 className="text-2xl font-bold sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted sm:text-sm">{item.desc}</p>
                  <a href={item.file} target="_blank" rel="noreferrer" className="btn-main mt-5 w-full sm:w-auto">
                    Ver PDF
                  </a>
                </SpotlightCard>
              ))}
            </div>
          )}
        </Section>

        <Section id="contact" title="Contacto" aos="zoom-in">
          <article className="panel p-8 text-center">
            <p className="mx-auto max-w-2xl text-muted">
              Estoy disponible para oportunidades laborales.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:adriansalvadormendieta@gmail.com" className="btn-main">
                Enviar email
              </a>
              <a href="https://github.com/Aplo19" target="_blank" rel="noreferrer" className="btn-soft">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/adrian-paolo-salvador-mendieta-0b7843281"
                target="_blank"
                rel="noreferrer"
                className="btn-soft"
              >
                LinkedIn
              </a>
            </div>

            <p className="mt-6 text-sm text-muted">Tel: +51 954 977 594 · Lima, Perú</p>
          </article>
        </Section>

        <Footer />
      </main>
    </div>
  );
}

