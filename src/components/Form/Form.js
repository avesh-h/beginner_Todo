import React, { useState } from "react";
import styles from "./form.module.css";
import CustomInput from "../Input/CustomInput";
import { Box, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../store/TaskSlice";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const Form = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
    duration: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const fullTaskObj = {
      ...task,
      id: uuid(),
      isCompleted: false,
      priority: task.priority || "Normal",
    };
    dispatch(taskActions.addTask(fullTaskObj));
    navigate("/tasks");
  };

  return (
    <div className={styles.main}>
      <form onSubmit={submitHandler}>
        <CustomInput
          type="text"
          label="Title"
          name="title"
          onChange={changeHandler}
        />
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            placeContent: "center",
          }}
        >
          <label>Description&nbsp;</label>
          <textarea
            rows="2"
            cols={25}
            className={styles.input}
            name="description"
            onChange={changeHandler}
          />
        </Box>
        <br />
        <label>Priority: </label>
        <label>
          <input
            type="radio"
            name="priority"
            className={styles.input}
            value="High"
            onChange={changeHandler}
          />
        </label>
        High
        <label>
          <input
            type="radio"
            name="priority"
            value="Normal"
            className={styles.input}
            onChange={changeHandler}
            defaultChecked
          />
          Normal
        </label>
        <br />
        <label htmlFor="cars">Choose a Duration:</label>
        <select
          name="duration"
          id="duration"
          className={styles.input}
          onChange={changeHandler}
        >
          <option value="Not Selected">--Choose duration--</option>
          <option value="1-2 hr">1-2 hr</option>
          <option value="2-4 hr">2-4 hr</option>
          <option value="5-10 hr">5-10 hr</option>
          <option value="1 day">1 day</option>
        </select>
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Form;
