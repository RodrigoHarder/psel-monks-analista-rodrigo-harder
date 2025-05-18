import { useForm } from "react-hook-form";
import { saveUser } from "../services/formService";

export function useFormSubmit(number1, number2) {
  const {
    register,
    handleSubmit,
    setError,
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

    const { resposta: _, ...dadosParaSalvar } = data;

    try {
      await saveUser(dadosParaSalvar);
      alert("Usuário salvo com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar usuário.");
    }
  };

  return { register, handleSubmit, onSubmit, errors };
}
