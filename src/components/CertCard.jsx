// src/components/CertCard.jsx
import React from 'react';

export default function CertCard({ cert }) {
  const { title, issuer, date, pdf } = cert;

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow border border-gray-800 hover:border-blue-500 transition duration-300">
      <h4 className="font-semibold text-white text-lg">{title}</h4>
      
      <p className="text-gray-400 text-sm mt-2">{issuer}</p>
      
      <p className="text-xs text-gray-500 mt-1">Completado: {date}</p>
      
      <a 
        href={pdf} 
        download 
        className="mt-4 inline-block text-blue-400 hover:underline hover:text-blue-300 font-medium"
      >
        Descargar certificado
      </a>
    </div>
  );
}