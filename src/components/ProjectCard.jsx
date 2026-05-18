export default function ProjectCard({ project, index }) {
  const { title, desc, link, tags } = project;

  return (
    <article className="project-row">
      <div className="project-row-index">{String(index).padStart(2, "0")}</div>

      <div className="project-row-main">
        <div className="project-row-head">
          <h3>{title}</h3>
          <a href={link} target="_blank" rel="noreferrer" className="inline-link">
            Ver repositorio
          </a>
        </div>

        <p>{desc}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
