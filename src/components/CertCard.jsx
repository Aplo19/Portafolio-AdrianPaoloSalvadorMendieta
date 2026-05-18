export default function CertCard({ cert }) {
  const { title, issuer, date, pdf } = cert;

  return (
    <article className="cert-card">
      <span className="info-index">CERT</span>
      <h3>{title}</h3>
      <p>{issuer}</p>
      <div className="cert-card-footer">
        <span>{date}</span>
        <a href={pdf} download className="inline-link">
          Descargar
        </a>
      </div>
    </article>
  );
}
