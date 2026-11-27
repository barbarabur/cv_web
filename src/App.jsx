import "./App.css";
import Header from "./components/Header";
import Navegacion from "./components/Navegacion";
import SobreMi from "./components/SobreMi";
import Aptitudes from "./components/Aptitudes";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

export default function App() {
  return (
    <div className="hoja">
      <div className="encabezado-fijo">
        <Header />
        <Navegacion />
      </div>
      <SobreMi />
      <main className="principal principal--vertical">
        <Aptitudes />
        <Educacion />
        <Experiencia />
      </main>
    </div>
  );
}
