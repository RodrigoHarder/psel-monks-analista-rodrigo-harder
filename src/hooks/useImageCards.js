import { useEffect, useState } from "react";
import { getImageCards } from "../services/imageCardsService";

export function useImageCards() {
    const [imageCards, setImageCards] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getImageCards();
                setImageCards(data);
            } catch (error) {
                console.error("Erro ao carregar os cartões com imagem.");
            }
        })();
    }, []);

    return { imageCards };
}
