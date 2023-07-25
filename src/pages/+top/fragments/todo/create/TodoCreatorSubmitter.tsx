import { memo } from "react";
import styles from "./TodoCreator.module.css";

export interface TodoCreatorSubmitterProps {
  onClick: () => void;
}

export default memo(function TodoCreatorSubmitter({
  onClick,
}: TodoCreatorSubmitterProps) {
  return (
    <button className={styles.createSubmit} onClick={onClick}>
      CREATE TODO
    </button>
  );
});
