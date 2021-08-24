export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: Math.random().toString(),
      data: data,
    },
  };
};
export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id,
  };
};
