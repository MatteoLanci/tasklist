import React, { useState } from "react";
import "./tasklist.css";

import { Tooltip } from "react-tooltip";

import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "../../state/Reducers/tasklistSlice";

import { Button, ListGroup, Form, Container } from "react-bootstrap";

import { MdOutlineDone, MdOutlineInfo } from "react-icons/md";
import { PiTrashThin } from "react-icons/pi";
import { MdFormatListBulletedAdd } from "react-icons/md";

const Tasklist = () => {
  const tasks = useSelector((state) => state.tasks);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask) {
      dispatch(addTask({ text: newTask }));
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
      <h1>TaskList</h1>
      <Container className="taskContainer">
        <ListGroup
          className={`${theme === "light" ? "tasksWrapper" : "tasksWrapperDark"} ${
            tasks.length === 0 ? "justify-content-center" : null
          }`}
        >
          {tasks.length === 0 && <div>Nothing Here Yet</div>}

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

              <div className="d-flex justify-content-center align-items-center gap-3">
                {task.completed && (
                  <>
                    <em
                      data-tooltip-content={`Completed at: ${task.completedAt}`}
                      data-tooltip-id="completedTooltip"
                      data-tooltip-place="top"
                      className="taskTooltip"
                    >
                      <MdOutlineDone className="taskCompletedIcon" />
                    </em>

                    <Tooltip id="completedTooltip" />
                  </>
                )}

                <em
                  data-tooltip-content={`
                  You created this task on: ${task.createdAt}`}
                  data-tooltip-id="createdTooltip"
                  data-tooltip-place="top"
                  className="taskCreateTooltip"
                >
                  <MdOutlineInfo className="taskCreatedIcon" />
                </em>
                <Tooltip id="createdTooltip" />

                <Button onClick={() => handleRemoveTask(task)} className="taskDeleteBtn">
                  <PiTrashThin />
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="d-flex justify-content-center align-items-center gap-1 w-100">
          <input
            type="text"
            placeholder="Add a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className={theme === "light" ? "taskInput" : "taskInputDark"}
          />
          <Button onClick={handleAddTask} className="newTaskBtn">
            <MdFormatListBulletedAdd />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Tasklist;
