import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedTaskList } from "../../Context/SelectedTaskList";
import { taskActions } from "../../store/TaskSlice";
import OptionMenu from "./OptionMenu";
import SingleTask from "./SingleTask";

const Tasks = () => {
  const { selectTask, setSelectTask, deleteTaskHandler, completeTaskHandler } =
    useContext(SelectedTaskList);
  let taskList = useSelector((state) => {
    return state.task;
  });
  const dispatch = useDispatch();
  useEffect(() => {}, [taskList]);
  const priorityHandler = (taskId) => {
    const findTask = taskList.find((task) => task.id === taskId);
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
  const selectedTask = (taskId) => {
    setSelectTask((prevTasks) => {
      const sameId = prevTasks.find((id) => id === taskId);
      let idArr;
      if (sameId) {
        idArr = prevTasks.filter((id) => id !== taskId);
      } else {
        idArr = [...prevTasks, taskId];
      }
      return idArr;
    });
  };
  return (
    <div>
      {taskList.length ? (
        taskList
          .filter((task) => !task.isCompleted)
          .map((task) => {
            return (
              <SingleTask
                task={task}
                key={task.id}
                priorityHandler={priorityHandler}
                selectedTask={selectedTask}
              />
            );
          })
      ) : (
        <p>No Task is Available</p>
      )}
      {selectTask.length ? (
        <OptionMenu
          deleteTaskHandler={deleteTaskHandler}
          completeTaskHandler={completeTaskHandler}
          selectTask={selectTask}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Tasks;
