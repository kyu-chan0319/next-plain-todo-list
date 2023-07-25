import { ChangeEventHandler, memo } from "react";
import styles from "./TodoCreator.module.css";

export interface TodoCreatorInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default memo(function TodoCreatorInput({
  value,
  onChange,
}: TodoCreatorInputProps) {
  return (
    <input
      className={styles.createInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
});
