import { useEffect, useState } from "react";
import { getTextCards } from "../services/textCards";

export function useTextCards() {
  const [textCards, setTextCards] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getTextCards();
        setTextCards(data);
      } catch (error) {
        console.error("Erro ao carregar os cartões de texto.");
      } 
    })();
  }, []);

  return {  textCards };
}
