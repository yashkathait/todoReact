export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: Math.random().toString(),
      data: data,
    },
  };
};
export const removeTodo = (data) => {
  return {
    type: "REMOVE_TODO",
  };
};
