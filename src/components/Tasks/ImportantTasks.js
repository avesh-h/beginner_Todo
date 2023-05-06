import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleTask from "./SingleTask";
import style from "./task.module.css";
import { taskActions } from "../../store/TaskSlice";
import { SelectedTaskList } from "../../Context/SelectedTaskList";
import OptionMenu from "./OptionMenu";

const ImportantTasks = () => {
  const taskList = useSelector((state) =>
    state.task.filter((task) => task.priority === "High")
  );
  const { selectTask, setSelectTask, deleteTaskHandler, completeTaskHandler } =
    useContext(SelectedTaskList);
  const dispatch = useDispatch();
  useEffect(() => {}, [taskList]);
  const priorityHandler = (taskId) => {
    const findTask = taskList.find((task) => task.id === taskId);
    // const taskIndex = taskList.findIndex((task) => task.id === taskId);
    let updatedTask;
    if (findTask.priority === "High") {
      updatedTask = {
        ...findTask,
        priority: "Normal",
      };
    } else {
      updatedTask = {
        ...findTask,
        priority: "High",
      };
    }
    // taskList.splice(taskIndex, 1, updatedTask);
    dispatch(taskActions.impTask(updatedTask));
  };
  return (
    <div>
      {/* {console.log("important", taskList)} */}
      {taskList.length ? (
        taskList
          .filter((task) => !task.isCompleted)
          .map((task) => {
            return (
              <SingleTask
                task={task}
                key={task.id}
                priorityHandler={priorityHandler}
              />
            );
          })
      ) : (
        <p>There Is no Important Task!</p>
      )}
      {selectTask.length ? (
        <OptionMenu
          deleteTaskHandler={deleteTaskHandler}
          completeTaskHandler={completeTaskHandler}
          selectTask={selectTask}
        />
      ) : (
        " "
      )}
    </div>
  );
};

export default ImportantTasks;
