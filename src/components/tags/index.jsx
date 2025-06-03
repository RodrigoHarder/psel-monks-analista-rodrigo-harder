import { useEffect, useState } from "react";
import { Tag } from "./tag";
import styles from "./Tags.module.scss"
import { useTags } from "../../hooks/useTags";

export function Tags() {
    const { tags } = useTags();

    if (!tags) return <p>Erro ao carregar as tags.</p>;

    return (
        <div className={styles.container}>
            <h2>{tags.title}</h2>
            <div className={styles.tags}>
                {tags.items.map((item) => (
                    <Tag key={item.id} tagName={item.name} />
                ))}
            </div>
        </div>
    )
}