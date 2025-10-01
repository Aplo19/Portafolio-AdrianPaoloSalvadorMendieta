// src/components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project }) {
  const { title, desc, link, tags } = project;
  
  return (
    <article 
      className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition duration-300" 
      data-aos="fade-up"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
        
        <div className="text-xs font-mono text-gray-500 mt-2 sm:mt-0 px-2 py-1 bg-gray-800 rounded">
            {tags.join(" • ")}
        </div>
      </div>
      
      <p className="text-gray-400 mt-3 mb-5">{desc}</p>
      
      <div className="mt-4 pt-3 border-t border-gray-800">
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition font-medium"
        >
          💻 Ver Repositorio (GitHub)
        </a>
      </div>
    </article>
  );
}