import { useState } from "react";
import "./App.css";
import { contenido } from "./data";
import Header from "./components/Header";
import Navegacion from "./components/Navegacion";
import SobreMi from "./components/SobreMi";
import Aptitudes from "./components/Aptitudes";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

export default function App() {
  const [idioma, setIdioma] = useState("es");
  const datos = contenido[idioma];

  return (
    <div className="hoja">
      <div className="encabezado-fijo">
        <Header perfil={datos.perfil} />
        <Navegacion
          idioma={idioma}
          setIdioma={setIdioma}
          titulos={datos.titulos.menu}
          textoIdioma={datos.titulos.idioma}
        />
      </div>
      <SobreMi perfil={datos.perfil} titulo={datos.titulos.sobreMi} />
      <main className="principal principal--vertical">
        <Aptitudes aptitudes={datos.aptitudes} titulo={datos.titulos.aptitudes} />
        <Educacion educacion={datos.educacion} titulo={datos.titulos.educacion} />
        <Experiencia experiencia={datos.experiencia} titulo={datos.titulos.experiencia} />
      </main>
    </div>
  );
}
