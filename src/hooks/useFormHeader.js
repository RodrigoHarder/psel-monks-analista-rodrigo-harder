import { useEffect, useState } from "react";
import { fetchFormHeader } from "../services/formService";

export function useFormHeader() {
  const [formData, setFormData] = useState({ 
    header: {},
    fields: [],
    form: {}
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFormHeader();
        setFormData({
          header: data.header,
          fields: data.fields,
          form: data.form
        });
      } catch (error) {
        console.error("Erro ao carregar dados do formulário:", error);
      }
    })();
  }, []);

  return formData;
}