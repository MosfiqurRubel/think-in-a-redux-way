import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !currentStatus,
      }),
    });
    const todo = await response.json();

    dispatch(toggled(todo));
  };
};

export default updateStatus;
