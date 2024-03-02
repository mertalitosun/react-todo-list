import Form from "./Form/Form";
import List from "./List/List";
import { useState } from "react";
function Todo() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  const onClick = () => {
    if(taskList.length !== 0){
    setTaskList([]);
    }
  };
  return (
    <>
      <div className="todo-container">
        <Form addTask={setTaskList} task={taskList} />
        <div className="todos">
          <List taskList={taskList} />
        </div>
        <hr />

        <div className="todo-footer">
          <div> {taskList.length} task left</div>
          <div></div>
          <button onClick={onClick} className="formDeleteButton">
            All Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
