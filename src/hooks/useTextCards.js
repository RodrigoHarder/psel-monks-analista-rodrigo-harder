import { useEffect, useState } from "react";
import { getTextCards } from "../services/textCards";

export function useTextCards() {
  const [textCards, setTextCards] = useState({ items: [] });

  useEffect(() => {
    (async () => {
      try {
        const data = await getTextCards();
        setTextCards(data || { items: [] });
      } catch (error) {
        console.error("Erro ao carregar os cartões de texto.");
        setTextCards({ items: [] });
      }
    })();
  }, []);

  return { textCards };
}