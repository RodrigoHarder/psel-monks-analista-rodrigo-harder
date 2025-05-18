import { Button } from "../../Button"
import styles from "./TextCard.module.scss"

export function TextCard({ title, description }) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button
                onClick={() => console.log("Fui clicado")}
                className={styles.button}
            >
                Ver mais
            </Button>
        </div>
    )
}