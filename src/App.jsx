import "./App.css";
import { perfil, aptitudes, experiencia, educacion } from "./data";

const Icono = ({ children }) => (
  <svg className="icono" viewBox="0 0 24 24" aria-hidden="true">
    {children}
  </svg>
);

function Cabecera() {
  return (
    <header className="cabecera">
      <span className="cabecera__linea" aria-hidden="true" />
      <h1 className="nombre">_{perfil.nombre.replace(" ", "_").toUpperCase()}</h1>
      <p className="titulo">_{perfil.titulo.replace(" ", "_").toUpperCase()}</p>
    </header>
  );
}

function SobreMi() {
  const { telefono, email, linkedin } = perfil.contacto;
  return (
    <section className="sobre-mi">
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
          <a href={linkedin} target="_blank" rel="noreferrer">
            {linkedin}
          </a>
        </li>
      </ul>
    </section>
  );
}

function Aptitudes() {
  return (
    <aside className="aptitudes">
      <h2 className="seccion">_APTITUDES</h2>
      {aptitudes.map((grupo) => (
        <div key={grupo.titulo} className="grupo">
          <h3>{grupo.titulo}</h3>
          <ul>
            {grupo.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

function Experiencia() {
  return (
    <section>
      <h2 className="seccion">_EXPERIENCIA_LABORAL</h2>
      {experiencia.map((e) => (
        <article key={e.empresa} className="entrada">
          <div className="entrada__cabecera">
            <div>
              <h3>{e.empresa}</h3>
              <p className="puesto">{e.puesto}</p>
            </div>
            <p className="fechas">
              {e.lugar}
              <br />
              {e.fechas}
            </p>
          </div>
          <ul>
            {e.tareas.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

function Educacion() {
  return (
    <section>
      <h2 className="seccion">_EDUCACIÓN</h2>
      {educacion.map((e) => (
        <article key={e.titulo} className="entrada entrada--corta">
          <div className="entrada__cabecera">
            <h3>{e.titulo}</h3>
            <p className="fechas">{e.fechas}</p>
          </div>
          <ul className="pequena">
            <li>{e.centro}</li>
          </ul>
        </article>
      ))}
    </section>
  );
}

export default function App() {
  return (
    <div className="hoja">
      <Cabecera />
      <SobreMi />
      <div className="cuerpo">
        <Aptitudes />
        <main className="principal">
          <Experiencia />
          <Educacion />
        </main>
      </div>
    </div>
  );
}
