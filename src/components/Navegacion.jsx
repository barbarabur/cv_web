function Navegacion() {
  return (
    <nav className="navegacion" aria-label="Navegación principal">
      <a href="#perfil">Sobre mi</a>
      <a href="#aptitudes">Aptitudes</a>
      <a href="#educacion">Educación</a>
      <a href="#experiencia">Experiencia</a>
      <button
        type="button"
        onClick={() => setIdioma(idioma === "es" ? "en" : "es")}
        >
        {idioma === "es" ? "English" : "Español"}
        </button>
    </nav>
    
  );
}

export default Navegacion;
