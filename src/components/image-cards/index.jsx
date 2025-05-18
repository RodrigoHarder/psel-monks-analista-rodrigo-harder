import styles from "./ImageCards.module.scss"
import { ImageCard } from "./image-card";
import { useImageCards } from "../../hooks/useImageCards";

export function ImageCards() {

    const { imageCards } = useImageCards();
    if (!imageCards) return <p>Erro ao carregar cartões.</p>;

    return (
        <div className={styles.container}>
            <h2>{imageCards.title}</h2>
            <h3>{imageCards.description}</h3>
            <div className={styles.cards}>
                {imageCards.cards.map(card => (
                    <ImageCard
                        key={card.id}
                        imagemUrl={card.imagemUrl}
                        title={card.title}
                        description={card.description}
                        alt={card.alt}
                    />
                ))}
            </div>
        </div>
    );
}
