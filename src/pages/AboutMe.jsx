const AboutMe = () => {

  return (
    <div className="p-2 flex flex-col h-screen items-center">
      <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl">
        <figure><img src="/me.jpg" alt="A photo of myself" /></figure>
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p>I'm a Master's student at Utah State University, currently working on a thesis focusing on COmputer Graphics. Other parts of my research focus on ground robotics, specifically with intelligent path planning.</p>
          <p>I have a strong background in working in many programming lanuguages, most notably C++, Python, C# and JavaScript.</p>
          <p>When I'm not working on research or personal projects, I love working out, drawing, and playing video games.</p>
        </div>
      </div>
      <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl mt-4">
        <div className="card-body">
          <h2 className="card-title">Publications</h2>
          <ul>
            <li className="my-1">Anderson, R., <strong>Anderson, T.</strong>, Bailey, C., Anderson, J., Harper, M., (2023) Stealth Centric A*: Bio-Inspired Navigation for Ground Robots. <em>International Robotics Conference.</em></li>
            <li className="my-2">Anderson, J., Anderson, R., <strong>Anderson, T.</strong>, Bailey, C., & Harper, M. (2023). Stealth Centric Autonomous Robot Simulator (SCARS). <em>Software Impacts</em>, 16, 100497.</li>
            <li className="my-2">Anderson, R., Anderson, J., <strong>Anderson, T.</strong>, & Harper, M. (2023). Charger Reservation Web Application. <em>Software Impacts</em>, 18, 100589.</li>
            <li className="my-1">Anderson, R., <strong>Anderson, T.</strong>, & Harper, M. (2022). Power and transportation collection and visualization. <em>Software Impacts</em>, 14, 100386.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default AboutMe;