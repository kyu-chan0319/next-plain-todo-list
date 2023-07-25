export interface Todo {
  content: string;
}

export const INITIAL_TODO = {
  content: "",
} as const satisfies Todo;
