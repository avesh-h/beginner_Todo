import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Button, Checkbox, Chip, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SelectedTaskList } from "../../Context/SelectedTaskList";
import style from "./task.module.css";

const SingleTask = ({ task, priorityHandler }) => {
  const { selectedTask } = useContext(SelectedTaskList);
  return (
    <div className={style.mainTask}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "10px",
          paddingLeft: "15px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Checkbox
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            onClick={() => selectedTask(task.id)}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography paragraph className={style.heading}>
              {task.title}
            </Typography>
            <Typography paragraph className={style.paragraph}>
              {task.description}
            </Typography>
          </Box>
        </Box>
        {task.isCompleted ? (
          <Chip label="Completed" />
        ) : (
          <Chip label="Pending" variant="outlined" />
        )}
        {!task.isCompleted && (
          <Box>
            <Button onClick={() => priorityHandler(task.id)}>
              {task.priority === "High" ? <StarIcon /> : <StarBorderIcon />}
            </Button>
          </Box>
        )}
      </Box>
      <Divider />
    </div>
  );
};

export default SingleTask;
