import { useEffect, useState } from "react";

function App() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5151/api/projetos")
      .then((res) => res.json())
      .then((data) => setProjetos(data))
      .catch((err) => console.error("Erro API:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Meus Projetos</h1>
      <ul>
        {projetos.map((p) => (
          <li key={p.id}>
            <strong>{p.nome}</strong> — {p.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
