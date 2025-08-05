import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import DetailsProject from "./pages/DetailsProject";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/projects">Projetos</Link> |{" "}

      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<DetailsProject />} />

      </Routes>
    </Router>
  );
}

export default App;