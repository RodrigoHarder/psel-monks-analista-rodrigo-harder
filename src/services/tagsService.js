import { API_URL } from "../api/api";

export async function getTags() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.tags;
  } catch (error) {
    console.error("Erro ao buscar as informações:", error);
  }
}