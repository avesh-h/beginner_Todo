import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectedTaskList } from "../../Context/SelectedTaskList";
import OptionMenu from "./OptionMenu";
import SingleTask from "./SingleTask";

const CompleteTasks = () => {
  const taskList = useSelector((state) => {
    console.log("all tasks", state.task);
    return state.task.filter((task) => task.isCompleted);
  });

  useEffect(() => {}, [taskList]);
  const { selectTask, setSelectTask, deleteTaskHandler, completeTaskHandler } =
    useContext(SelectedTaskList);
  return (
    <div>
      {/* {console.log("completed", taskList)} */}
      {taskList.length ? (
        taskList.map((task) => {
          return <SingleTask task={task} key={task.id} />;
        })
      ) : (
        <p>There is No completed Task!</p>
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

export default CompleteTasks;
