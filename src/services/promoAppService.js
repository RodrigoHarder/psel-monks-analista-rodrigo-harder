import { API_URL } from "../api/api";

export async function getPromoApp() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data["promo-app"];
  } catch (error) {
    console.error("Erro ao buscar as informações:", error);
  }
}