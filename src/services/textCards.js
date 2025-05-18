export async function getTextCards() {
  try {
    const response = await fetch("http://localhost:3000/text-cards");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar as informações:", error);
  }
}