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
export const editTodo = ({ id, data }) => {
  console.log(data);
  return {
    type: "EDIT_TODO",
    payload: {
      id: id,
      data: data,
    },
  };
};
