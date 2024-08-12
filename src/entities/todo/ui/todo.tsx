"use client";

import { Check, Trash } from "lucide-react";
import { type Todo as TodoType } from "@/shared/types";
import { useTodosStore } from "../model/store";
import { cn } from "@/shared/lib/utils";

export interface TodoProps {
  todo: TodoType;
}

export const Todo = ({ todo }: TodoProps) => {
  const { changeTodo, removeTodo } = useTodosStore();

  return (
    <div
      key={todo.id}
      className="max-w-[320px] w-full flex items-center justify-between gap-2 mx-auto bg-black/[0.1] px-2 py-1.5 rounded-lg"
      onClick={() =>
        changeTodo({
          ...todo,
          isCompleted: !todo.isCompleted,
        })
      }>
      <div className="flex items-center gap-4">
        <button
          className={cn(
            "h-4 w-4 outline outline-1 outline-zinc-600 rounded-full flex items-center justify-center",
            todo.isCompleted && "outline-green-400 text-green-400",
          )}>
          {todo.isCompleted && <Check size={14} />}
        </button>
        <span
          className={cn(todo.isCompleted && "line-through text-black/[0.3]")}>
          {todo.title}
        </span>
      </div>
      <button
        className="outline-none border-none p-1 text-black/[0.4] hover:bg-black/[0.08] hover:text-red-500 rounded-full transition-all"
        onClick={() => removeTodo([todo.id])}>
        <Trash size={18} />
      </button>
    </div>
  );
};
