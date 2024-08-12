// TodoSelected.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoSelected } from "@/features/todo-selected";
import { useTodosStore } from "@/entities/todo";
import { STATUSES } from "@/shared/constants";

describe("TodoSelected Component", () => {
  test("renders buttons for all statuses", () => {
    render(<TodoSelected />);

    // Проверяем, что все статусы отображаются как кнопки
    STATUSES.forEach((status) => {
      expect(screen.getByText(status)).toBeInTheDocument();
    });
  });

  test("highlights the active button based on selectedStatus", () => {
    const activeStatus = "all";

    render(<TodoSelected />);

    // Проверяем, что активная кнопка имеет правильный стиль
    STATUSES.forEach((status) => {
      const button = screen.getByText(status);
      if (status.toLowerCase() === activeStatus) {
        expect(button).toHaveClass("outline outline-1 outline-blue-300");
      } else {
        expect(button).not.toHaveClass("outline outline-1 outline-blue-300");
      }
    });
  });

  test("calls setSelectedStatus with correct value on button click", () => {
    render(<TodoSelected />);

    // Симулируем клик по кнопке
    STATUSES.forEach((status) => {
      const button = screen.getByText(status);
      fireEvent.click(button);

      // Проверяем, что кнопка была выбрана
      expect(button).toHaveClass("outline outline-1 outline-blue-300");
    });
  });
});
