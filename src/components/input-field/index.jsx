import styles from "./InputField.module.scss";

export function InputField({ fields, register, errors, rules }) {
  return fields.map(({ name, placeholder, type = "text" }) => (
    <div key={name} className={styles.container}>
      <input
        placeholder={placeholder}
        type={type}
        {...register(name, rules[name])}
        className={styles.input}
      />
      {errors?.[name] && (
        <span className={styles.error}>{errors[name].message}</span>
      )}
    </div>
  ));
}
