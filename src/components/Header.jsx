import { perfil } from "../data";

function Header() {
  return (
    <header className="cabecera">
      <span className="cabecera__linea" aria-hidden="true" />
      <h1 className="nombre">{perfil.nombre.toUpperCase()}</h1>
      <p className="titulo">{perfil.titulo.toUpperCase()}</p>
    </header>
  );
}

export default Header;