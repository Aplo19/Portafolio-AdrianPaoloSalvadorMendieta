import { useEffect, useMemo, useState } from "react";
import PillNav from "./PillNav";

const items = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Header({ theme, onToggleTheme }) {
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const updateActive = () => setActiveHref(window.location.hash || "#home");
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  const navColors = useMemo(() => {
    if (theme === "dark") {
      return {
        baseColor: "rgba(15, 23, 42, 0.78)",
        pillColor: "#2dd4bf",
        pillTextColor: "#0f172a",
        hoveredPillTextColor: "#f8fafc",
      };
    }

    return {
      baseColor: "rgba(15, 23, 42, 0.86)",
      pillColor: "#ffffff",
      pillTextColor: "#0f172a",
      hoveredPillTextColor: "#f1f5f9",
    };
  }, [theme]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-400/20 backdrop-blur-xl">
      <div className="relative mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <PillNav
          logo={null}
          logoText="Adrian Portafolio"
          logoAlt="Adrian Logo"
          items={items}
          activeHref={activeHref}
          className="custom-nav"
          ease="power3.easeOut"
          baseColor={navColors.baseColor}
          pillColor={navColors.pillColor}
          hoveredPillTextColor={navColors.hoveredPillTextColor}
          pillTextColor={navColors.pillTextColor}
          initialLoadAnimation
        />

        <button
          onClick={onToggleTheme}
          className="btn-soft fixed bottom-4 left-[58%] z-40 w-auto -translate-x-1/2 px-2.5 py-1.5 text-xs md:hidden"
          aria-label="Cambiar modo de color"
          type="button"
        >
          {theme === "dark" ? "Modo claro" : "Modo oscuro"}
        </button>

        <button
          onClick={onToggleTheme}
          className="btn-soft absolute right-4 top-3 hidden px-3 py-2 text-xs md:inline-flex"
          aria-label="Cambiar modo de color"
          type="button"
        >
          {theme === "dark" ? "Modo claro" : "Modo oscuro"}
        </button>
      </div>
    </header>
  );
}
