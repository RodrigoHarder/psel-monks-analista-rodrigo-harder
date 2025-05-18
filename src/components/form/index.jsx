import { useFormSubmit } from "../../hooks/useFormSubmit";
import { useRandomNumbers } from "../../hooks/useRandomNumbers";
import { useFormHeader } from "../../hooks/useFormHeader";

import styles from "./Form.module.scss";
import fieldsData from "../../../db.json";
import { Button } from "../Button";
import { InputField } from "../input-field";
import { Validator } from "../validator";
import { rules } from "../../utils/rules";

export default function Form() {
  const formHeader = useFormHeader();
  const { number1, number2 } = useRandomNumbers();
  const { register, handleSubmit, onSubmit, errors } = useFormSubmit(number1, number2);

  const formProps = { register, errors };

  return (
    <div className={styles.container}>
      <img src={formHeader.image} />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2>{formHeader.title}</h2>
          <p>{formHeader.subtitle}</p>
          <span>{formHeader.info}</span>
        </div>

        <div className={styles.fieldsWrapper}>
          <InputField fields={fieldsData.fields} {...formProps} rules={rules} />
        </div>

        <Validator number1={number1} number2={number2} {...formProps} error={errors.resposta} />

        <div className={styles.buttonWrapper}>
          <Button type="submit" className={styles.buttonSend}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}
