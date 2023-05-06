// import SideBar from "./components/SideBar";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { SelectedTaskProvider } from "./Context/SelectedTaskList";
import SideBar from "./components/SideBar/Drawer";

function App() {
  return (
    <div className="App">
      <Router>
        <SelectedTaskProvider>
          <SideBar />
        </SelectedTaskProvider>
      </Router>
    </div>
  );
}

export default App;
