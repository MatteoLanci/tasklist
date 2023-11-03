import React, { useState } from "react";
import "./tasklist.css";

import { Tooltip } from "react-tooltip";

import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "../../state/Reducers/tasklistSlice";

import { Button, ListGroup, Form } from "react-bootstrap";

import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

const Tasklist = () => {
  const tasks = useSelector((state) => state.tasks);
  const theme = useSelector((state) => state.theme);
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

  const currentTime = new Date();

  return (
    <section className="tasklistMainWrapper">
      <h2>Tasklist</h2>

      <ListGroup className="tasksWrapper">
        {tasks.map((task) => (
          <ListGroup.Item
            key={task.id}
            className={`${theme === "light" ? "taskWrapper" : "taskWrapperDark"} ${
              task.completed ? "completed" : null
            }`}
          >
            <div>
              <Form.Check
                type="checkbox"
                inline
                checked={task.completed}
                onChange={() => handleToggleTask(task)}
                className="taskCheckbox"
              />

              {task.text}
            </div>

            <div className="d-flex justify-content-center align-items-center gap-4">
              {task.completed && (
                <>
                  <em
                    data-tooltip-content={`Completed on: ${currentTime}`}
                    data-tooltip-id="completedTooltip"
                    data-tooltip-place="top"
                    className="taskTooltip"
                  >
                    <MdOutlineDone className="taskCompletedIcon" />
                  </em>

                  <Tooltip id="completedTooltip" />
                </>
              )}

              <Button
                variant="danger"
                onClick={() => handleRemoveTask(task)}
                className="d-flex align-items-center justify-content-center p-2"
              >
                <FaTrashAlt />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="d-flex justify-content-center align-items-center gap-1">
        <input
          type="text"
          placeholder="Type Here..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="taskInput"
        />
        <Button onClick={handleAddTask} className="newTaskBtn">
          add
        </Button>
      </div>
    </section>
  );
};

export default Tasklist;
