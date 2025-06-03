import { useForm } from "react-hook-form";
import { saveUser } from "../services/formService";

export function useFormSubmit(number1, number2) {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const resposta = parseInt(data.resposta.trim(), 10);
    const somaCorreta = number1 + number2;

    if (resposta !== somaCorreta) {
      setError("resposta", {
        type: "validate",
        message: "A soma está incorreta. Tente novamente.",
      });
      return;
    }

    const dadosParaSalvar = {
      nome: data.field_1 || '',
      email: data.field_2 || '',
      idade: data.field_3 ? parseInt(data.field_3) : null,
      cidade: data.field_4 || ''
    };

    try {
      await saveUser(dadosParaSalvar);
      alert("Usuário salvo com sucesso!");
      reset();
    } catch (error) {
      console.error("Erro detalhado:", error);
      alert(error.message || "Erro ao salvar usuário");
    }
  };

  return { register, handleSubmit, onSubmit, errors };
}
