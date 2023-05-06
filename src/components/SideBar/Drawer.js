import React, { useEffect } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ChecklistIcon from "@mui/icons-material/Checklist";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import CompleteTasks from "../Tasks/CompleteTasks";
import ImportantTasks from "../Tasks/ImportantTasks";
import Tasks from "../Tasks/Tasks";

const drawerWidth = 240;

const MENULIST = ["All Tasks", "Importants", "Completed", "Add Task"];

export default function PermanentDrawerLeft() {
  const navigate = useNavigate();
  const navigateHandler = (menu) => {
    if (menu === MENULIST[0]) navigate("/tasks");
    else if (menu === MENULIST[1]) navigate("/imptasks");
    else if (menu === MENULIST[2]) navigate("/completed");
    else navigate("/form");
  };

  useEffect(() => {
    navigate("/tasks");
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {MENULIST.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigateHandler(text)}>
                <ListItemIcon>
                  {index === 0 ? (
                    <FormatListNumberedRtlIcon />
                  ) : index === 1 ? (
                    <StarBorderIcon />
                  ) : index === 2 ? (
                    <ChecklistIcon />
                  ) : (
                    <AddTaskIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {["Completed", "Add Task"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate("/form")}>
                <ListItemIcon>
                  {index % 2 === 0 ? <ChecklistIcon /> : <AddTaskIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {/* <Toolbar /> */}
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/imptasks" element={<ImportantTasks />} />
          <Route path="/completed" element={<CompleteTasks />} />
        </Routes>
      </Box>
    </Box>
  );
}
