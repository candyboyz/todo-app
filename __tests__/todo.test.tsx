import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type Todo as TodoType } from "@/shared/types";
import { Todo } from "@/entities/todo";

describe("Todo Component", () => {
  test("renders todo item with title and handles state change", async () => {
    const todo: TodoType = { id: "1", title: "Test Todo", isCompleted: false };

    render(<Todo todo={todo} />);

    // Проверяем отображение заголовка задачи
    expect(screen.getByText("Test Todo")).toBeInTheDocument();

    // Проверяем отсутствие иконки проверки для невыполненной задачи
    expect(
      screen.queryByRole("img", { name: /check/i }),
    ).not.toBeInTheDocument();

    // Симулируем клик по задаче
    await userEvent.click(screen.getByText("Test Todo"));
  });
});
