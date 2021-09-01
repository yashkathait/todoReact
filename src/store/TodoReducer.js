const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      if (data === "")
        return {
          ...state,
        };
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "REMOVE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "EDIT_TODO":
      const updatedList = state.list.map((elem) => {
        if (elem.id === action.payload.id) {
          return {
            ...elem,
            data: action.payload.data,
          };
        }
        return elem;
      });
      return {
        list: updatedList,
      };
    default:
      return state;
  }
};
export default todoReducer;
