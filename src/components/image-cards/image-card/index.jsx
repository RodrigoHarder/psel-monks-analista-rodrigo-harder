import styles from "./ImageCard.module.scss"

export function ImageCard({imagemUrl, title, description, alt}){
    return(
        <div className={styles.container}>
            <img src={imagemUrl} alt={alt}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}