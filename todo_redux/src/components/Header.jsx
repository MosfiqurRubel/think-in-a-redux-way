import { useDispatch } from "react-redux";
import { useState } from "react";
import { added, allTaskCompleted, clearCompleted } from "@/redux/todos/actions";
import noteImage from "@/assets/images/icons/notes.png";
import plusImage from "@/assets/images/icons/plus.png";
import tickImage from "@/assets/images/icons/double-tick.png";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const completeHandler = () => {
    dispatch(allTaskCompleted());
  };

  const clearHandler = () => {
    dispatch(clearCompleted());
  };

  return (
    <header>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />

        <Input
          value={input}
          onChange={handleChange}
          placeholder="Type your todo"
          className="text-lg bg-gray-100 text-gray-500"
        />

        <Button
          type="submit"
          variant="icon"
          size="sm"
          buttonClass="w-8 h-8 bg-no-repeat bg-contain rounded-full"
          style={{ backgroundImage: `url(${plusImage})` }}
        />
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </header>
  );
};

export default Header;
