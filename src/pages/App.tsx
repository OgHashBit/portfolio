import Navbar from "../components/Navbar";
import Introduction from "../components/sections/Introduction";
import Project-info from "../components/sections/About";
import About from "../components/sections/AboutMe";
import Footer from "../components/sections/Footer";

export const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Introduction/>
            <Project-info/>
            <About/>
            <Footer/>
        </div>
    )
}

export default App;
