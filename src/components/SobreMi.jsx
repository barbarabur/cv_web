import { perfil } from "../data";

const Icono = ({ children }) => (
  <svg className="icono" viewBox="0 0 24 24" aria-hidden="true">
    {children}
  </svg>
);

function SobreMi() {
  const { telefono, email, linkedin } = perfil.contacto;

  return (
    <section id="perfil" className="sobre-mi">
      <div>
        <h2 className="seccion">_SOBRE_MI</h2>
        <p>{perfil.sobreMi}</p>
      </div>

      <ul className="contacto">
        <li>
          <Icono>
            <rect x="7" y="2" width="10" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          </Icono>
          <a href={`tel:${telefono.replace(/\s/g, "")}`}>{telefono}</a>
        </li>
        <li>
          <Icono>
            <path d="M2 6h20v12H2z M2 6l10 8 10-8" fill="currentColor" />
          </Icono>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <Icono>
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </Icono>
          <a href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a>
        </li>
      </ul>
    </section>
  );
}

export default SobreMi;
