function Educacion({ educacion, titulo }) {
  return (
    <section id="educacion">
      <h2 className="seccion">{titulo}</h2>
      {educacion.map((e) => (
        <article key={e.titulo} className="entrada entrada--corta">
          <div className="entrada__cabecera">
            <h3>{e.titulo}</h3>
            <p className="fechas">{e.fechas}</p>
          </div>
          <ul className="pequena">
            <li className="centro">{e.centro}</li>
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Educacion;
