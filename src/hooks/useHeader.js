import { useEffect, useState } from "react";
import { getHeader } from "../services/headerService";

export function useHeader() {
  const [header, setHeader] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getHeader();
        setHeader(data);
      } catch (error) {
        console.error("Erro ao carregar o cabeçalho.");
      } 
    })();
  }, []);

  return { header };
}
