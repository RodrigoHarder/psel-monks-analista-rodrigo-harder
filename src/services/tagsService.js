export async function getTags() {
  try {
    const response = await fetch("http://localhost:3000/tags");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar as informações:", error);
  }
}