import { useEffect, useState } from "react";
import { getLinks } from "../services/linksService";

export function useLinks() {
    const [links, setLinks] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getLinks();
                setLinks(data);
            } catch (error) {
                console.error("Erro ao carregar os links do rodapé.");
            }
        })();
    }, []);

    return { links };
}
