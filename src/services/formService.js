const BASE_URL = "http://localhost:3000";

export async function fetchFormHeader() {
  const response = await fetch(`${BASE_URL}/form`);
  if (!response.ok) throw new Error("Erro ao buscar o cabeçalho do formulário");
  return await response.json();
}

export async function saveUser(data) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Erro ao salvar usuário");
}
