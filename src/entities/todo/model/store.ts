import { SelectedStatus, Todo } from "@/shared/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type useTodosFunctions = {
  setTodo: (todo: Todo) => void;
  removeTodo: (todosId: string[]) => void;
  changeTodo: (todo: Todo) => void;
  setSelectedStatus: (status: SelectedStatus) => void;
};

interface useTodosStore extends useTodosFunctions {
  todos: Todo[];
  selectedStatus: SelectedStatus;
}

export const useTodosStore = create<useTodosStore>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        selectedStatus: "all",
        setTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
        removeTodo: (todosId) =>
          set((state) => {
            const newTodos = state.todos.filter(
              (todo) => !todosId.includes(todo.id),
            );

            return { todos: [...newTodos] };
          }),
        changeTodo: (todo) =>
          set((state) => ({
            todos: state.todos.map((val) => {
              if (val.id === todo.id) {
                val.isCompleted = todo.isCompleted;
                val.title = todo.title;
              }
              return val;
            }),
          })),
        setSelectedStatus: (status) => set({ selectedStatus: status }),
      }),
      {
        name: "todos",
      },
    ),
  ),
);

export default useTodosStore;
