const Icono = ({ children }) => (
  <svg className="icono" viewBox="0 0 24 24" aria-hidden="true">
    {children}
  </svg>
);

function SobreMi({ perfil, titulo }) {
  const { telefono, email, linkedin, github } = perfil.contacto;

  return (
    <section id="perfil" className="sobre-mi">
      <div>
        <h2 className="seccion">{titulo}</h2>
        <p>{perfil.sobreMi}</p>
      </div>

      <ul className="contacto">
        <li>
          <Icono>
            <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M10 6h4M11 18h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </Icono>
          <a href={`tel:${telefono.replace(/\s/g, "")}`}>{telefono}</a>
        </li>
        <li>
          <Icono>
            <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </Icono>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <Icono>
            <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="8" cy="9" r="1.3" fill="currentColor" />
            <path d="M7.2 12h1.6v5H7.2zm3.8 0h1.5v.7c.7-1 1.5-1.2 2.3-1.2 1.8 0 2.8 1.2 2.8 3.3V17h-1.6v-2.1c0-1.2-.4-1.9-1.4-1.9-.9 0-1.7.6-1.7 2V17H11z" fill="currentColor" />
          </Icono>
          <a href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a>
        </li>
        <li>
          <Icono>
            <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.6.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7.1 8c-.1-.3-.5-1.7.1-3.4 0 0 .9-.3 3 1.1a10.5 10.5 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.7.2 3.1.1 3.4a3.9 3.9 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.9c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" fill="currentColor" />
          </Icono>
          <a href={github} target="_blank" rel="noreferrer">{github}</a>
        </li>
      </ul>
    </section>
  );
}

export default SobreMi;
