import styles from "./InputField.module.scss";

export function InputField({ fields, register, errors, rules }) {
  return fields.map((field) => (
    <div key={field.id} className={styles.container}>
      <input
        placeholder={field.placeholder}
        type={field.type}
        {...register(field.id, rules[field.id])}
        className={styles.input}
      />
      {errors?.[field.id] && (
        <span className={styles.error}>{errors[field.id].message}</span>
      )}
    </div>
  ));
}