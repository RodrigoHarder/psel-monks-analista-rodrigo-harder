import Form from "../form";
import { Links } from "../Links";
import { SocialMedias } from "../social-media";
import styles from "./Footer.module.scss";

export function Footer(){
    return(
        <footer className={styles.container}>
            <Form/>
            <div className={styles.bottomLine}></div>
            <SocialMedias/>
            <Links/>
        </footer>
    )
}