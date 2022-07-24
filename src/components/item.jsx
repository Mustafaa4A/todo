import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import {
  removeTodoItem,
  SetTodoItemDone,
  setCurrentItem,
} from "../store/todo/todo.actions";
import {
  selectTodoItems,
  selectItemIsdDone,
} from "../store/todo/todo.selector";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const todoItems = useSelector(selectTodoItems);
  const itemIsDone = useSelector(selectItemIsdDone(item));

  const editItem = () => {
    if (itemIsDone) return;
    dispatch(setCurrentItem(item));
  };

  const removeItem = () => {
    dispatch(removeTodoItem(todoItems, item));
  };

  const itemIsDoneHandler = () => {
    dispatch(SetTodoItemDone(todoItems, item));
  };

  const itemDoneStyle = {
    opacity: "0.5",
    pointerEvent: "none",
    textDecoration: "line-through",
  };

  return (
    <div
      className="bg-light p-2  position-relative rounded my-2"
      style={itemIsDone ? itemDoneStyle : {}}
    >
      <div onClick={itemIsDoneHandler}>{item.text}</div>
      <div className="position-absolute top-0 end-0 m-2">
        <span className="cursor-pointer">
          <BiEdit size={25} className="text-primary" onClick={editItem} />
        </span>
        <span className="cursor-pointer">
          <BsTrash size={22} className="text-danger" onClick={removeItem} />
        </span>
      </div>
    </div>
  );
};

export default Item;
