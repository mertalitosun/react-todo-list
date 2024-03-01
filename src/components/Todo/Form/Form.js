import { useState } from "react";

function Form({ addTask, task }) {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onClick = () => {
    if (input !== "") {
      addTask([...task, input]);
      setInput("");
    } else {
      alert("task cannot be left blank!");
    }
  };
  return (
    <div>
      <input
        placeholder="What needs to be done?"
        value={input}
        onChange={onChange}
      />
      <button onClick={onClick}>Add New Task</button>
    </div>
  );
}

export default Form;
