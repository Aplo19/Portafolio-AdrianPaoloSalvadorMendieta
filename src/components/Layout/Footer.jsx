// src/components/Layout/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 bg-gray-900">
      © {new Date().getFullYear()} Adrian Paolo Salvador Mendieta.
    </footer>
  );
}