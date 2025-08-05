import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../api/ProjectsApi";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects).catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Projetos</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <Link to={`/project/${p.id}`}>
              <strong>{p.TitleProject}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
