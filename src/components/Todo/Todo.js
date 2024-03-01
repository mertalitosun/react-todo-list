import Form from "./Form/Form";
import List from "./List/List";
import { useState } from "react";
function Todo() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
    <>
      <div className="todo-container">
        <Form addTask={setTaskList} task={taskList} />
        <List taskList={taskList} />
        <hr />
      </div>
      <div className="todo-footer">
        <div> {taskList.length} task left</div>
      </div>
    </>
  );
}

export default Todo;
