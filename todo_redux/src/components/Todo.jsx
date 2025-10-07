import { useDispatch } from "react-redux";
import { toggled, colorSelected, deleted } from "@/redux/todos/actions";
import cancleImage from "@/assets/images/icons/cancel.png";
import SvgIcon from "@/components/ui/SvgIcon";
import Checkbox from "@/components/ui/Checkbox";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, text, completed, color } = todo;

  const handleStatusChange = (todoId) => {
    dispatch(toggled(todoId));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(colorSelected(todoId, color));
  };

  const handleDelete = (todoId) => {
    dispatch(deleted(todoId));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <Checkbox
          checked={completed}
          onChange={() => handleStatusChange(id)}
          className="opacity-0 absolute rounded-full"
        />

        {completed && (
          <SvgIcon
            name="tick"
            color="transparent"
            size={12}
            className="shrink-0 fill-current text-green-500 pointer-events-none"
          />
        )}
      </div>

      <div className={`select-none flex-1 ${completed && "line-through"}`}>
        {text}
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>

      <img
        src={cancleImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

export default Todo;
