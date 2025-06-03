import { useTextCards } from "../../hooks/useTextCards";
import styles from "./TextCards.module.scss"
import { TextCard } from "./text-card";

export function TextCards() {

    const { textCards } = useTextCards();

    return (
        <div className={styles.container}>
            {textCards.items?.map((item) => (
                <TextCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}
