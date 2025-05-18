import styles from "./Validator.module.scss";

export function Validator({ number1, number2, register, error }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.title}>Verificação de segurança</span>
        <div className={styles.operation}>
          <div className={styles.numbers}>
            <span>{number1}</span>
            +
            <span>{number2}</span>
          </div>
          =
          <input
            placeholder="Resultado"
            type="number"
            {...register("resposta", {
              required: "Este campo é obrigatório",
              validate: (value) =>
                !isNaN(Number(value)) || "Informe um número válido.",
            })}
          />
        </div>
      </label>
      {error && <span>{error.message}</span>}
    </div>
  );
}
