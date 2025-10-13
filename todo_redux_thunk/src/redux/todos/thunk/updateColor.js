import { colorSelected } from "../actions";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        color,
      }),
    });
    const todo = await response.json();

    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default updateColor;
