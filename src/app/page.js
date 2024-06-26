import NavBar from "../components/NavBar";
import About from "../components/About";
import Header from "../components/Header";

import "../styles/Home.css";

export default function HomePage() {
  return (
    <div className="Home">
      <NavBar></NavBar>
      <div id="content">
        {/* <Intro></Intro> */}
        <About></About>
        {/* <Experience></Experience> */}
        {/* <Projects></Projects> */}
        {/* <Credits></Credits> */}
      </div>
    </div>
  );
}