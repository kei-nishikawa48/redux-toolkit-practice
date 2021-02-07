import Item from "./Item";
import {useSelector} from "react-redux"
const List = () => {
  const todos=useSelector(state=>state.todos)
  console.log(todos)
  return (
    <>
      {todos.map((todo,i) => {
        return <Item content={todo.content} key={i}/>;
      })}
    </>
  );
};

export default List;