import { TodoInput } from "@/features/todo-input";
import { TodoList } from "@/features/todo-list";
import { TodoSelected } from "@/features/todo-selected";

export const Todos = () => {
  return (
    <div className="w-full items-center flex flex-col gap-4 justify-center">
      <TodoInput />
      <TodoSelected />
      <TodoList />
    </div>
  );
};
