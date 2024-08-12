"use client";
import uniqid from "uniqid";
import { useCallback, useState } from "react";

import { useTodosStore } from "@/entities/todo";
import { cn } from "@/shared/lib/utils";

export const TodoInput = () => {
  const { setTodo } = useTodosStore();

  const [todoTitle, setTodoTitle] = useState("");

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const isEnter = e.key === "Enter";

      if (!isEnter) return;

      setTodo({
        id: uniqid(),
        title: todoTitle,
        isCompleted: false,
      });

      setTodoTitle("");
    },
    [setTodo, todoTitle],
  );

  return (
    <div className="bg-black/[0.1] rounded-xl h-10 max-w-[320px] w-full px-4 py-1.5 flex items-center justify-between gap-2">
      <input
        type="text"
        placeholder="What need to be done?"
        className="placeholder:text-black/[0.3] bg-transparent outline-none border-none w-full"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          setTodo({ id: uniqid(), title: todoTitle, isCompleted: false });
          setTodoTitle("");
        }}
        className={cn(
          "border-none outline outline-1 outline-black/[0.2] text-black/[0.2] rounded-lg px-2",
          todoTitle.length > 0 &&
            "outline-blue-300 text-blue-300 bg-white/[0.1]",
        )}
        disabled={todoTitle.length <= 0}>
        Add
      </button>
    </div>
  );
};
