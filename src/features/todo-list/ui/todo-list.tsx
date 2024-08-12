"use client";

import { Todo, useTodosStore } from "@/entities/todo";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const TodoList = () => {
  const { todos, selectedStatus } = useTodosStore();

  return (
    <OverlayScrollbarsComponent
      defer
      element="section"
      className="w-full max-w-[350px] h-[130px]"
      options={{
        overflow: { x: "hidden" },
        scrollbars: { autoHide: "scroll" },
      }}>
      <div className="w-full flex flex-col gap-2 max-h-[130px] h-full">
        {todos
          ?.filter((todo) => {
            if (selectedStatus === "all") return true;
            if (selectedStatus === "completed") return todo.isCompleted;
            if (selectedStatus === "active") return !todo.isCompleted;
            return todo;
          })
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
    </OverlayScrollbarsComponent>
  );
};
