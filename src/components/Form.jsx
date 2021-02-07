import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux-toolkit/todosSlice";
const Form = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(value));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;
