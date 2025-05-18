import { useEffect, useState } from "react";
import styles from "./PromoApp.module.scss"
import { usePromoApp } from "../../hooks/usePromoApp";

export function PromoApp() {

    const { promoApp } = usePromoApp();

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>{promoApp.title}</h2>
                <h3>{promoApp.description}</h3>
            </div>
            <div className={styles.apps}>
                <img src="/promo-app-images/app-store.png" alt="logotipo da app store" />
                <img src="/promo-app-images/google-play.png" alt="logotipo da google play" />
            </div>
        </div>
    )
}