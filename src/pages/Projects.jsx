const Projects = () => {

  return (
    <div className="p-2 flex flex-col h-screen items-center">
      
      <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl my-2">
        <figure><img src="/crowengine.png" alt="Photo of crow engine" /></figure>
        <div className="card-body">
          <h2 className="card-title">Crow Engine</h2>
          <p>This is the renderer that I am working on for my Master's Thesis, which originally started as just a project for fun. The engine is written using Vulkan, and uses a PBR workflow.</p>
          <div className="card-actions justify-end">
            <a className="btn btn-ghost" href='https://github.com/tganderson0/crow-engine/tree/new_engine'><i class="fa-brands fa-github text-2xl"></i></a>
          </div>
        </div>
      </div>

      <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl my-2">
        <figure><img src="/gamejam.png" alt="Photo of gamejam game" /></figure>
        <div className="card-body">
          <h2 className="card-title">Game from Hack USU 2023</h2>
          <p>This is the game that we made for Hack USU 2023, and won 2nd place. It's modeled after games like Octopath Traveler, and we went for the HD 2D look that those games do. The game was created using Unity, and written in C#. You can watch a video where we talk about the game at: <a href='https://youtu.be/GbMzlhmffb4' class='btn btn-link'>https://youtu.be/GbMzlhmffb4</a></p>
          <div className="card-actions justify-end">
            <a className="btn btn-ghost" href='https://github.com/Serpents-of-the-East/hackUSU-2023'><i class="fa-brands fa-github text-2xl"></i></a>
          </div>
        </div>
      </div>

      <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl my-2">
        <figure><img src="/water-app.png" alt="Photo of water tracking app" /></figure>
        <div className="card-body">
          <h2 className="card-title">Water Tracker App</h2>
          <p>This was an app that tracked your daily water intake, and kept track of your streak over time. This project I did to learn how to develop a iOS app using React Native. The app was published on the Apple App Store.</p>
          <div className="card-actions justify-end">
            <a className="btn btn-ghost" href='https://github.com/tganderson0/water-tracker'><i class="fa-brands fa-github text-2xl"></i></a>
          </div>
        </div>
      </div>

      <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl my-2">
        <figure><img src="/mazegame.jpg" alt="Photo of maze game" /></figure>
        <div className="card-body">
          <h2 className="card-title">Maze Game</h2>
          <p>This project was before I learned how to use full rendering frameworks, and instead I used the principles from games like Wolfenstein to render a 3D environment. The program reads a maze from a text file and then renders the environment using the terminal.</p>
          <div className="card-actions justify-end">
            <a className="btn btn-ghost" href='https://github.com/tganderson0/Maze-Game'><i class="fa-brands fa-github text-2xl"></i></a>
          </div>
        </div>
      </div>

      

    </div>
  )
}
export default Projects;