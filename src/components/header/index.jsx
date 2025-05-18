import { useHeader } from "../../hooks/useHeader";
import { Button } from "../Button";
import { Menu } from "../menu";
import styles from "./Header.module.scss"

export function Header() {
    const {header} = useHeader()

    return (
        <header>
            <div className={styles.container}>
                <Menu />
                <div className={styles.text}>
                    <h1>{header.title}</h1>
                    <h3>{header.subtitle}</h3>
                    <Button className={styles.scroll}>
                        <img src={header.buttonScroll} />
                    </Button>
                </div>
            </div>
            <img src={header.pattern} className={styles.pattern} />
        </header>
    )
}