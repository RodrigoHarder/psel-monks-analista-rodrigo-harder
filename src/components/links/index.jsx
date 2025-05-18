import { useLinks } from "../../hooks/useLinks";
import styles from "./Links.module.scss"

export function Links() {

    const { links } = useLinks()

    if (!links) return <p>Erro ao carregar os links do rodapé.</p>;

    return (
        <div className={styles.container}>
            <h3>{links.title}</h3>
            <div className={styles.linksContainer}>
                {links.links.map((link) => (
                    <a className={styles.link} key={link.id} href="#">{link.name}</a>
                ))}
            </div>
        </div>
    )

}