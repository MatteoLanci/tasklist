import React, { useState } from "react";
import "./tasklist.css";

import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "../../state/Reducers/tasklistSlice";

import { Button, ListGroup, Form } from "react-bootstrap";

const Tasklist = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask) {
      dispatch(addTask({ id: Date.now(), text: newTask, completed: false }));
      setNewTask("");
    }
  };

  const handleRemoveTask = (task) => {
    dispatch(removeTask(task));
  };

  const handleToggleTask = (task) => {
    dispatch(toggleTask({ id: task.id }));
  };

  return (
    <section className="tasklistMainWrapper">
      <h2>Tasklist</h2>

      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task.id} className={task.completed ? "completed" : null}>
            {task.text}

            <Form.Check
              type="checkbox"
              inline
              checked={task.completed}
              onChange={() => handleToggleTask(task)}
            />

            <Button variant="danger" onClick={() => handleRemoveTask(task)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="d-flex justify-content-center align-items-center gap-1">
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <Button onClick={handleAddTask}>add</Button>
      </div>
    </section>
  );
};

export default Tasklist;
