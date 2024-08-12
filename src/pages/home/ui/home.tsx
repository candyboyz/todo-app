import { Todos } from "@/widgets/todos";

export const HomePage = () => {
  return (
    <main>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-wider">Todos</h1>
        </div>
        <Todos />
      </div>
    </main>
  );
};
