import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../store/TaskSlice";

const SelectedTaskList = createContext();

const SelectedTaskProvider = ({ children }) => {
  const [selectTask, setSelectTask] = useState([]);
  const dispatch = useDispatch();
  const deleteTaskHandler = () => {
    dispatch(taskActions.deleteTask(selectTask));
    setSelectTask([]);
  };
  const completeTaskHandler = () => {
    dispatch(taskActions.completeTask(selectTask));
    setSelectTask([]);
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
    <SelectedTaskList.Provider
      value={{
        selectTask,
        setSelectTask,
        selectedTask,
        completeTaskHandler,
        deleteTaskHandler,
      }}
    >
      {children}
    </SelectedTaskList.Provider>
  );
};

export { SelectedTaskList, SelectedTaskProvider };
