import { ChangeEvent, memo, useCallback, useState } from "react";
import CreateButton from "./TodoCreatorSubmitter";
import TodoCreatorInput from "./TodoCreatorInput";
import styles from "./TodoCreator.module.css";
import { INITIAL_TODO, Todo } from "@/pages/api/todo";

export interface TodoCreatorProps {
  onCreate: (todo: Todo) => void;
}

export default memo(function TodoCreator({ onCreate }: TodoCreatorProps) {
  const [todo, setTodo] = useState<Todo>({ ...INITIAL_TODO });

  const updateContent = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const content = event.target.value;
    // prev の中の値を展開して、content だけを上書きする
    setTodo((prev) => ({ ...prev, content }));
  }, []);

  // useCallback で memo化 しているが、このコンポーネントの再レンダリングの大部分は todo の変更によるもの、
  // そのため、ほとんどの確率でこのコンポーネントは再定義されてしまうので、あまり意味をなさない。
  // むしろ、依存配列の値に変更があるかどうかのチェックが挟まるため、処理の負荷が多くなる。
  const handleCreate = useCallback(() => {
    onCreate(todo);
    setTodo({ ...INITIAL_TODO });
  }, [onCreate, todo]);

  return (
    <div>
      <h1 className={styles.title}>INPUT TO THIS FORM</h1>
      <TodoCreatorInput value={todo.content} onChange={updateContent} />
      <CreateButton onClick={handleCreate} />
    </div>
  );
});
