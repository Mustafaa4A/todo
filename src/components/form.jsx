import { useSelector, useDispatch } from "react-redux";

import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  selectTodoItems,
  selectCurrentItem,
} from "../store/todo/todo.selector";
import { setCurrentItem, setTodoItem } from "../store/todo/todo.actions";

const Form = () => {
  const dispatch = useDispatch();
  const currentItem = useSelector(selectCurrentItem);

  const todoItems = useSelector(selectTodoItems);

  const changeHandler = (e) => {
    const input = e.target.value;
    dispatch(setCurrentItem({ ...currentItem, text: input }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setTodoItem(todoItems, currentItem));
    dispatch(setCurrentItem({ id: "", text: "", done: "" }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mt-5">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter item"
          value={currentItem.text}
          name="input"
          onChange={changeHandler}
        />
        <button type="submit" className="btn btn-info ">
          <AiOutlinePlusCircle size={25} className="text-light" />
        </button>
      </div>
    </form>
  );
};

export default Form;
