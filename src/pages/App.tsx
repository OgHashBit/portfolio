import Navbar from "../components/Navbar";
import Introduction from "../components/sections/Introduction";
import Projects from "../components/sections/Projects";
import About from "../components/sections/AboutMe";
import Footer from "../components/sections/Footer";

export const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Introduction/>
            <About/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default App;
