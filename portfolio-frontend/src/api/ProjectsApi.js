const API_URL = "http://localhost:5151/api/projects";

export async function getProject() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar projetos");
  return await res.json();
}

export async function getProjectById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Projeto não encontrado");
  return await res.json();
}
