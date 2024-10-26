import '../About.css'
function About () {

return (
    <>
    <div className="Container-About">
        <div className="Navbar flex border border-blue-900 border-x-0">
            <div className="Logo font-extrabold text-4xl text-purple-900 pl-5 pt-5">
                <a href="/"><h1>YAFA</h1></a>
            </div>
            <div className='Navbar-links relative left-96 ml-96 mt-7 sm:hidden'>
            <ul className='font-extralight text-xl text-white list-none flex gap-8'>
            <a href="/#section1"><li className='hover:text-purple-900 duration-300 hover:font-bold'>About</li></a>
            <a href="/Skills/#section2"><li className='hover:text-purple-900 duration-300 hover:font-bold'>Skills</li></a>
            <a href="/Projects/#section3"><li className='hover:text-purple-900 duration-300 hover:font-bold'>Projects</li></a>
            <a href="/"><li className='hover:text-purple-900 duration-300 hover:font-bold'>Resume</li></a>
            </ ul>
            </div>
        </div>
        <div id="section1" className="About-container snap-start block md:flex lg:gap-60 md:mt-36 " data-aos="fade-up">
            <div className="About block">
                <h1 className='text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] '>Hello,<br></br>
                This is <span className='text-purple-400'>YAFA</span> , I'm <br></br> a <span className='text-teal-400'>Web Developer</span>.</h1>
                 
                <div className='flex gap-7 mt-6 mr-28 ml-28  '>
                    <a  href = " https://github.com/yafa-jawabreh21" target="_blank" className='transition-all text-pink-500 hover:scale-150 duration-300' >
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                    <a href = " www.linkedin.com/in/yafa-jawabreh-510742326" target="_blank" className='transition-all text-pink-500 hover:scale-150 duration-300'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
                    </a>
                </div>
                {/* <div className='Button-div '>
                <button type="button" class="text-white mt-6 mr-28 ml-28 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contact Me</button>
                </div> */}

            </div>
            <div className="image sm:mt-14 sm:mb-24 w-fit">
                <div className="div-top w-auto h-11 bg-customm border border-blue-950 flex gap-3 pt-4 pl-4 rounded-md">
                    <div className='circle1 h-3 w-3 rounded-full bg-red-400'></div>
                    <div className='circle2 h-3 w-3 rounded-full bg-orange-400'></div>
                    <div className='circle3 h-3 w-3 rounded-full bg-green-200'></div>
                </div>
                <div className="div-buttom h-auto bg-customm border border-blue-950">
                                    <code class="font-mono text-xs md:text-sm lg:text-base"><div class="blink"><span class="mr-2 text-pink-500">const</span><span class="mr-2 text-white">coder</span><span class="mr-2 text-pink-500">=</span><span class="text-gray-400"></span></div><div><span class="ml-4 lg:ml-8 mr-2 text-white">name:</span><span class="text-gray-400">'</span><span class="text-amber-300">Yafa Jawabreh</span><span class="text-gray-400">',</span></div><div class="ml-4 lg:ml-8 mr-2"><span class=" text-white">skills:</span><span class="text-gray-400">['</span><span class="text-amber-300">HTML</span><span class="text-gray-400">', '</span><span class="text-amber-300">CSS</span><span class="text-gray-400">', '</span><span class="text-amber-300">JS</span><span class="text-gray-400">', '</span><span class="text-amber-300">React</span><span class="text-gray-400">', '</span><span class="text-amber-300">Redux</span><span class="text-gray-400">', '</span><span class="text-amber-300">Python</span><span class="text-gray-400">', '</span><span class="text-amber-300">MySql</span><span class="text-gray-400">', '</span><span class="text-amber-300">TsilwindCSS</span><span class="text-gray-400">'],</span></div><div><span class="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span><span class="text-orange-400">true</span><span class="text-gray-400">,</span></div><div><span class="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span><span class="text-orange-400">true</span><span class="text-gray-400">,</span></div><div><span class="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span><span class="text-orange-400">function</span><span class="text-gray-400">() </span></div><div><span class="ml-8 lg:ml-16 mr-2 text-orange-400">return</span><span class="text-gray-400">(</span></div><div><span class="ml-12 lg:ml-24 text-cyan-400">this.</span><span class="mr-2 text-white">hardWorker</span><span class="text-amber-300">&amp;&amp;</span></div><div><span class="ml-12 lg:ml-24 text-cyan-400">this.</span><span class="mr-2 text-white">problemSolver</span><span class="text-amber-300">&amp;&amp;</span></div><div><span class="ml-12 lg:ml-24 text-cyan-400">this.</span><span class="mr-2 text-white">skills.length</span><span class="mr-2 text-amber-300">&gt;=</span><span class="text-orange-400">5</span></div><div><span class="ml-8 lg:ml-16 mr-2 text-gray-400">);</span></div><div><span class="ml-4 lg:ml-8 text-gray-400"></span></div><div><span class="text-gray-400"></span></div></code>

                </div>
            </div>
        </div>
    </div>
    </>
)


}
export default About;
