const items = [
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Certificaciones", href: "#certs" },
  { label: "Contacto", href: "#contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand-mark" aria-label="Ir al inicio">
          ADRIAN PAOLO SALVADOR MENDIETA
        </a>

        <nav className="main-nav" aria-label="Principal">
          {items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="/cv-adrian-paolo.pdf" download className="header-cta">
            Descargar CV
          </a>
          <a
            href="/carta_recomendacion_Adrian_Paolo_Salvador_Mendieta.pdf"
            download
            className="header-cta header-cta-featured"
          >
            Descargar carta de recomendación
          </a>
        </div>
      </div>
    </header>
  );
}
