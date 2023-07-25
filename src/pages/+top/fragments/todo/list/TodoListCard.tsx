import { Todo } from "@/pages/api/todo";
import { memo } from "react";
import styles from "./TodoList.module.css";

export interface TodoListCardProps {
  todo: Todo;
  onRemove: (todo: Todo) => void;
}

export default memo(function TodoList({ todo, onRemove }: TodoListCardProps) {
  return (
    <div>
      <div className={styles.content}>・ {todo.content}</div>
      {/* アロー関数にすることでonClickには関数自体を渡すことになる(onRemove実行前の状態) */}
      <button onClick={() => onRemove(todo)}>REMOVE</button>
    </div>
  );
});
