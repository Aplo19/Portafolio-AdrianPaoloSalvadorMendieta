import React from 'react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="text-blue-400 font-bold text-lg">Adrian.dev</div>
          <div className="text-xs text-gray-400 hidden sm:block">Ingeniero de Software (UTP)</div>
        </div>

        <ul className="flex items-center gap-6 text-gray-300 text-sm">
          <li><a href="#about" className="hover:text-white transition">Sobre mí</a></li>
          <li><a href="#skills" className="hover:text-white transition">Habilidades</a></li>
          <li><a href="#projects" className="hover:text-white transition">Proyectos</a></li>
          <li><a href="#certs" className="hover:text-white transition">Certificaciones</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
          <li>
            <a
              href="/cv-adrian-paolo.pdf"
              download
              className="px-3 py-1 bg-blue-500 text-sm rounded-md hover:bg-blue-600 transition"
            >
              Descargar CV
            </a>
          </li>
          <li>
                                    <a
              href="/carta_recomendacion_Adrian_Paolo_Salvador_Mendieta.pdf"
              download
              className="px-3 py-1 bg-blue-500 text-sm rounded-md hover:bg-blue-600 transition"
            >
              Descargar carta de recomendacion
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}