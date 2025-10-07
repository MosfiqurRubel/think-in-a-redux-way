import { useSelector } from "react-redux";
import Todo from "@/components/Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos[1]);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
