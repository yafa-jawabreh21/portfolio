import Card from "./Card";
import '../About.css';

function Skills() {
  return (
    <>
      <div id="section2" className="Container-Skills  w-auto bg-customm snap-start ">
        <div className="Skills-container md:h-2/5 flex flex-col " data-aos="fade-up">
          <h1 className="font-black font-mono text-yellow-50 text-4xl ml-auto mr-auto pt-10 md:pt-16 md:pb-16 sm:mt-12">
            Professional <span className="text-teal-400 font-sans font-bold">Skillset</span>
          </h1>

          <div className="Skills flex flex-wrap justify-center md:pl-36 md:pr-44">
              <div className="p-4 sm:w-1/5 md:w-1/4">
                <Card  name="HTML" image="https://www.svgrepo.com/show/452228/html-5.svg"/>
              </div>
              <div className="p-4  sm:w-1/5 md:w-1/4">
                <Card name="CSS" image="https://www.svgrepo.com/show/452185/css-3.svg"/>
              </div>
              <div className="p-4 sm:w-1/5 md:w-1/4">
                <Card name="JS" image="https://www.svgrepo.com/show/452045/js.svg"/>
              </div>
              <div className="p-4 sm:w-1/5 md:w-1/4">
                <Card  name="React" image="https://www.svgrepo.com/show/452092/react.svg"/>
              </div>
              <div className="p-4 sm:w-1/5 md:w-1/4">
                <Card  name="Redux"image="https://www.svgrepo.com/show/452093/redux.svg" />
              </div>
              <div className="p-4 sm:w-1/5 md:w-1/4">
                <Card  name="TailwindCss" image="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"/>
              </div>
              <div className="p-4 sm:w-1/5 md:w-1/4">
                <Card  name="Python"image="https://www.svgrepo.com/show/452091/python.svg"/>
              </div>
              <div className="p-4 sm:w-1/5 md:w-1/4">
                <Card  name="MySQL"image="https://www.svgrepo.com/show/373848/mysql.svg"/>
              </div><div className="p-4 sm:w-1/5 md:w-1/4">
                <Card  name="Figma"image="https://www.svgrepo.com/show/452202/figma.svg"/>
              </div>
              <div className="p-4 sm:w-1/5 md:w-1/4">
                <Card  name="Git"image="https://www.svgrepo.com/show/452210/git.svg"/>
              </div>
              <div className="p-4 sm:w-1/5 md:w-1/4 pb-5">
                <Card  name="Bootstrap"image="https://www.svgrepo.com/show/353498/bootstrap.svg"/>
              </div>
              
              

          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;