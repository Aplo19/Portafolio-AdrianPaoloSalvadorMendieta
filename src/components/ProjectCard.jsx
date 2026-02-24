import React from "react";
import SpotlightCard from "./SpotlightCard";

export default function ProjectCard({ project }) {
  const { title, desc, link, tags } = project;

  return (
    <SpotlightCard
      className="group min-h-[24rem] p-7 sm:min-h-0 sm:p-6"
      spotlightColor="color-mix(in srgb, var(--brand) 28%, transparent)"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] sm:text-xl">{title}</h3>
        <span className="rounded-full border border-slate-400/20 bg-[var(--surface-soft)] px-3 py-1 text-sm font-medium text-muted sm:text-xs">
          {tags.slice(0, 3).join(" · ")}
        </span>
      </div>

      <p className="text-base leading-relaxed text-muted sm:text-sm">{desc}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-slate-400/20 bg-[var(--surface-soft)] px-2.5 py-1.5 text-sm text-muted sm:px-2 sm:py-1 sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <a href={link} target="_blank" rel="noreferrer" className="btn-main mt-6 w-full sm:w-auto">
        Ver repositorio
      </a>
    </SpotlightCard>
  );
}
