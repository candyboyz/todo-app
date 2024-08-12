import { render, screen } from "@testing-library/react";
import { TodoInput } from "@/features/todo-input";

describe("TodoInput Component", () => {
  test("renders input and button", () => {
    render(<TodoInput />);

    // Проверяем наличие поля ввода и кнопки
    expect(
      screen.getByPlaceholderText("What need to be done?"),
    ).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });
});
