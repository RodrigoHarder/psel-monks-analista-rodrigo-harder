import { useEffect, useState } from "react";
import { getMenu } from "../services/menuService";

export function useMenu() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMenu();
        setMenu(data);
      } catch (error) {
        console.error("Erro ao carregar o menu.");
      } 
    })();
  }, []);

  return { menu };
}
