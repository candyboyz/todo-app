export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type SelectedStatus = "all" | "active" | "completed";
