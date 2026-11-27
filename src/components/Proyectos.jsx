function Proyectos({ proyectos, titulo }) {
  return (
    <section id="proyectos">
      <h2 className="seccion">{titulo}</h2>
      <p className="proyectos__intro">{proyectos.descripcion}</p>

      <div className="proyectos__grid">
        {proyectos.items.map((proyecto) => (
          <article className="proyecto" key={proyecto.url}>
            <a
              className="proyecto__imagen"
              href={proyecto.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver ${proyecto.nombre}`}
            >
              {proyecto.imagen ? (
                <img src={proyecto.imagen} alt={`Vista previa de ${proyecto.nombre}`} />
              ) : (
                <span>Fotografía pendiente</span>
              )}
            </a>
            <h3>{proyecto.nombre}</h3>
            <a className="proyecto__enlace" href={proyecto.url} target="_blank" rel="noreferrer">
              Ver proyecto en GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
