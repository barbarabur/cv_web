function Navegacion({ idioma, setIdioma, titulos, textoIdioma }) {
  return (
    <nav className="navegacion" aria-label="Navegación principal">
      <a href="#perfil">{titulos.perfil}</a>
      <a href="#aptitudes">{titulos.aptitudes}</a>
      <a href="#educacion">{titulos.educacion}</a>
      <a href="#experiencia">{titulos.experiencia}</a>
      <button
        type="button"
        className="boton-idioma"
        onClick={() => setIdioma(idioma === "es" ? "en" : "es")}
      >
        {textoIdioma}
      </button>
    </nav>
  );
}

export default Navegacion;
