import { useFormSubmit } from "../../hooks/useFormSubmit";
import { useRandomNumbers } from "../../hooks/useRandomNumbers";
import { useFormHeader } from "../../hooks/useFormHeader";
import styles from "./Form.module.scss";
import { Button } from "../Button";
import { InputField } from "../input-field";
import { Validator } from "../validator";
import { rules } from "../../utils/rules";

export default function Form() {
  const { form, fields } = useFormHeader();
  const { number1, number2 } = useRandomNumbers();
  const { register, handleSubmit, onSubmit, errors } = useFormSubmit(number1, number2);

  return (
    <div className={styles.container}>
      <img src={form?.image} alt="Form header" />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2>{form?.title}</h2>
          <p>{form?.subtitle}</p>
          <span>{form?.info}</span>
        </div>

        <div className={styles.fieldsWrapper}>
          <InputField
            fields={fields}
            register={register}
            errors={errors}
            rules={rules}
          />
        </div>

        <Validator
          number1={number1}
          number2={number2}
          register={register}
          error={errors.resposta}
        />

        <div className={styles.buttonWrapper}>
          <Button type="submit" className={styles.buttonSend}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}