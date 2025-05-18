import { useEffect, useState } from "react";
import { getPromoApp } from "../services/promoAppService";

export function usePromoApp() {
    const [promoApp, setPromoApp] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const data = await getPromoApp();
                setPromoApp(data);
            } catch (error) {
                console.error("Erro ao carregar o banner dos aplicativos.");
            }
        })();
    }, []);

    return { promoApp };
}
