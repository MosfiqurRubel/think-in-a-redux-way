import { added } from "../actions";

const addTodo = (todoText) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
    });
    const todo = await response.json();

    dispatch(added(todo.text));
  };
};

export default addTodo;
