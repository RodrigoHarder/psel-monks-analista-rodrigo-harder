import { useEffect, useState } from "react";
import { fetchFormHeader } from "../services/formService";

export function useFormHeader() {
  const [formHeader, setFormHeader] = useState({ title: "", subtitle: "", info: "", image:"" });

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFormHeader();
        setFormHeader(data);
      } catch (error) {
        console.error("Erro ao carregar o cabeçalho do formulário.");
      }
    })();
  }, []);

  return formHeader;
}
