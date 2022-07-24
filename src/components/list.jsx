import { useSelector } from "react-redux";

import { selectTodoItems } from "../store/todo/todo.selector";

import Item from "./item";

const List = () => {
  const todoItems = useSelector(selectTodoItems);

  return (
    <div className="mt-4">
      {todoItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
