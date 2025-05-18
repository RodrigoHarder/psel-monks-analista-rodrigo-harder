import { FaSquareXTwitter, FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import styles from "./SocialMedias.module.scss";

export function SocialMedias() {
    return (
        <div className={styles.socialMedias}>
            <a href="#"><FaInstagram size={32}/></a>
            <a href="#"><FaWhatsapp size={32}/></a>
            <a href="#"><FaSquareXTwitter size={32} /></a>
            <a href="#"><FaFacebookF size={32}/></a>
        </div>
    )
}