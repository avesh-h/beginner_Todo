import { Box, Button } from "@mui/material";
import React from "react";

const OptionMenu = ({ deleteTaskHandler, completeTaskHandler }) => {
  return (
    <div>
      <Box pt={5}>
        <Button onClick={deleteTaskHandler}>Delete</Button>
        <Button onClick={completeTaskHandler}>Complete/Incomplete</Button>
      </Box>
    </div>
  );
};

export default OptionMenu;
