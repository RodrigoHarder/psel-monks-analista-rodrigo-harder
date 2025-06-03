export const rules = {
  field_1: { 
    required: "Nome é obrigatório",
    minLength: { value: 3, message: "Mínimo de 3 caracteres" } 
  },
  field_2: { 
    required: "Email é obrigatório",
    pattern: { 
      value: /^\S+@\S+$/i, 
      message: "Email inválido" 
    }
  },
  field_3: { 
    required: "Idade é obrigatória",
    min: { value: 18, message: "Idade mínima 18 anos" } 
  },
  field_4: { 
    required: "Cidade é obrigatória" 
  }
};