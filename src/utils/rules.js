export const rules = {
  nome: {
    required: "Nome é obrigatório",
    validate: (value) =>
      value.trim().split(" ").length >= 2 || "Digite o nome completo",
  },
  email: {
    required: "Email é obrigatório",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Formato de email inválido",
    },
  },
  idade: {
    required: "Idade é obrigatória",
    min: {
      value: 18,
      message: "Você deve ter pelo menos 18 anos",
    },
  },
  cidade: {
    required: "Cidade é obrigatória",
  },
};
