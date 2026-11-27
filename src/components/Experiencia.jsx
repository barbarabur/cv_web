import { experiencia } from "../data";

function Experiencia() {
  return (
    <section id="experiencia">
      <h2 className="seccion">_EXPERIENCIA_LABORAL</h2>
      {experiencia.map((e) => (
        <article key={e.empresa} className="entrada">
          <div className="entrada__cabecera">
            <div>
              <h3 className="empresa">{e.empresa}</h3>
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

export default Experiencia;
