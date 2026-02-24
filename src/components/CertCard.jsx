import React from "react";
import SpotlightCard from "./SpotlightCard";

export default function CertCard({ cert }) {
  const { title, issuer, date, pdf } = cert;

  return (
    <SpotlightCard
      className="min-h-[16rem] p-7 sm:min-h-0 sm:p-6"
      spotlightColor="color-mix(in srgb, var(--brand) 24%, transparent)"
    >
      <h4 className="text-xl font-bold tracking-tight text-[var(--text)] sm:text-lg">{title}</h4>
      <p className="mt-2 text-base text-muted sm:text-sm">{issuer}</p>
      <p className="mt-1 text-sm uppercase tracking-wide text-muted sm:text-xs">Completado: {date}</p>

      <a href={pdf} download className="btn-soft mt-5 w-full sm:w-auto">
        Descargar certificado
      </a>
    </SpotlightCard>
  );
}
