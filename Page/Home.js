import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";

function Home () {
    return (
        <>

        <div className="home">
            
            <div className="about">
                <About/>
            </div>
            <div className="skills">
                <Skills/>
            </div>
            <div className="projects">
                <Projects/>
            </div>
        </div>
        </>
    )
}
export default Home;