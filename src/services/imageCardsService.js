import { API_URL } from "../api/api";

export async function getImageCards() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data["image-cards"];
  } catch (error) {
    console.error("Erro ao buscar as informações:", error);
  }
}