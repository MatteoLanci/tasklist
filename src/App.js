import "./App.css";
import { useSelector } from "react-redux";

import Navbar from "./components/NavigationBar/Navigation";
import Tasklist from "./components/TaskList/Tasklist";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <section className={`mainWrapper ${theme === "light" ? null : "darkMode"}`}>
      <Navbar />
      <Tasklist />
    </section>
  );
}

export default App;
