import { API_URL } from "../api/api";

const BASE_URL = "http://backend.local/wp-json/json_bloco/v1";

export async function fetchFormHeader() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Erro ao buscar dados do formulário");
  
  const data = await response.json();
  
  return {
    header: data.header,
    fields: data.fields,
    form: {
      title: data.form.title,
      subtitle: data.form.subtitle,
      info: data.form.info,
      image: data.form.image
    }
  };
}

export async function saveUser(data) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      errorResponse.message || "Erro desconhecido ao salvar usuário"
    );
  }
}
