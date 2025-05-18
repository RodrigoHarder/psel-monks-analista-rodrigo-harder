import { useTextCards } from "../../hooks/useTextCards";
import styles from "./TextCards.module.scss"
import { TextCard } from "./text-card";

export function TextCards() {

    const {textCards} = useTextCards();
    
    return (
        <div className={styles.container}>
            {textCards.map((textCard) => (
                <TextCard
                    key={textCard.id}
                    title={textCard.title}
                    description={textCard.description}
                />
            ))}
        </div>
    );
}
