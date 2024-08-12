"use client";

import { useTodosStore } from "@/entities/todo";
import { STATUSES } from "@/shared/constants";
import { cn } from "@/shared/lib/utils";
import { SelectedStatus } from "@/shared/types";

export const TodoSelected = () => {
  const { selectedStatus, setSelectedStatus } = useTodosStore();

  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <div className="flex gap-2">
          {STATUSES.map((val) => (
            <button
              key={"status." + val}
              className={cn(
                "text-black/[0.6] px-2 rounded-lg",
                val.toLowerCase() === selectedStatus &&
                  "outline outline-1 outline-blue-300",
              )}
              onClick={() =>
                setSelectedStatus(val.toLowerCase() as SelectedStatus)
              }>
              {val}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
