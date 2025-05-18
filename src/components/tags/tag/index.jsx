import { Button } from "../../Button"
import styles from "./Tag.module.scss"

export function Tag({ tagName }) {
    return (
        <Button
            onClick={() => console.log('O botão foi clicado')}
            className={styles.container}>
            <span>{tagName}</span>
        </Button>
    )
}