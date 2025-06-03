import { API_URL } from "../api/api";

export async function getLinks() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.footer;
  } catch (error) {
    console.error("Erro ao buscar as informações:", error);
  }
}