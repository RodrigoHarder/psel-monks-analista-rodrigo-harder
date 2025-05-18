import { useState } from "react"
import { FiMenu } from "react-icons/fi";
import styles from "./Menu.module.scss"
import { Button } from "../Button";
import { useMenu } from "../../hooks/useMenu";

export function Menu() {
    const { menu } = useMenu()
    const [open, setOpen] = useState(false)

    function toggleMenu() {
        setOpen(!open)
    }

    if (!menu) return <p>Erro ao carregar menu.</p>;

    return (
        <div className={styles.menu}>
            <img src={menu.logo} />
            <Button onClick={toggleMenu} className={styles.buttonMenu}>
                <FiMenu size={32} className={styles.iconButton} />
            </Button>
            <nav className={`${styles.lista} ${open ? styles.open : ""}`}>
                {menu.category.map((category) => (
                    <a href="#" key={category.id}>{category.name}</a>
                ))}
                <Button onClick={() => setOpen(false)} className={styles.buttonBack}>
                    <img src={menu.buttonBack} />
                </Button>
            </nav>
        </div>
    )
}