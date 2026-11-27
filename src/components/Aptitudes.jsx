import { aptitudes } from "../data";

function Aptitudes() {
  return (
    <aside id="aptitudes" className="aptitudes">
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

export default Aptitudes;
