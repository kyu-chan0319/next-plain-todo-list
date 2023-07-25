import { Todo } from "@/pages/api/todo";
import { memo } from "react";
import styles from "./TodoList.module.css";
import TodoListCard from "./TodoListCard";

export interface TodoListProps {
  todoList: Todo[];
  onRemove: (todo: Todo) => void;
}

// コンポーネントとして１番の理想は、memo() + props zero のコンポーネント
// （vue はそうではないので注意）
export default memo(function TodoList({ todoList, onRemove }: TodoListProps) {
  return (
    <div className={styles.list}>
      {todoList.map((todo, index) => (
        <TodoListCard key={index} todo={todo} onRemove={onRemove} />
      ))}
    </div>
  );
});
