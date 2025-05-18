export async function getMenu() {
  try {
    const response = await fetch("http://localhost:3000/menu");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar as informações:", error);
  }
}