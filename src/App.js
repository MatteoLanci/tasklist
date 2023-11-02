import "./App.css";
import { useSelector } from "react-redux";

import Navbar from "./components/NavigationBar/Navigation";
import Hero from "./components/Hero/Hero";

function App() {
  const theme = useSelector((state) => state.theme);
  const initialize = useSelector((state) => state.initialize);

  return (
    <section className={`mainWrapper ${theme === "light" ? null : "darkMode"}`}>
      <Navbar />
      <div className={`${initialize === "false" ? null : "d-none"}`}>
        <Hero />
      </div>
    </section>
  );
}

export default App;
