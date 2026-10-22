import "./Project.css";
import hba from "./assets/hba.jpeg";
import tourm from "./assets/tourm.jpeg"
import typepic from "./assets/typepic.jpeg"
import photo from "./assets/photo.jpeg"
import kbmeat from "./assets/kbhero.jpeg"
import job from "./assets/job.jpg"

function Project() {
  return (
    <div className="projects" id="projects">
      <div className="heading">
        <h2>My Projects</h2>
        <p>
          Here are some of the projects I have built using HTML, CSS,
          JavaScript and React.
        </p>
      </div>

      <div className="project-container">

        {/* Project 1 */}
        <div className="project-card">
          <img src={hba} alt="Hospital Appointment Booking" />

          <div className="project-content">
            <h3>Hospital Appointment Booking</h3>

            <p>
              A responsive hospital appointment booking system where users can
              choose doctors, select available dates, and book appointments with
              client-side form validation.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="buttons">
              <a href="#" className="live" onClick={() => window.open("https://dineshkumarr.github.io/Hospital-Appointment-Booking/", "_blank")}>
                Live Demo
              </a>
              <a href="#" className="github" onClick={() => window.open("https://github.com/dineshstr0505-acc/hospital-appointment-booking", "_blank")}>
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
        
        <img src={photo} alt="photography" />
          <div className="project-content">
            <h3>Photography Portfolio</h3>

            <p>
              A modern photography portfolio featuring a responsive gallery,
              smooth animations, and an elegant interface to showcase creative
              work.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="buttons">
              <a href="#" className="live">
                Live Demo
              </a>
              <a href="#" className="github">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
         
        <img src={tourm} alt="tourmates" />
          <div className="project-content">
            <h3>Tourmates</h3>

            <p>
              A travel and tour booking website that allows users to explore
              destinations, browse travel packages, and plan memorable trips.
            </p>

            <div className="tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="buttons">
              <a href="#" className="live">
                Live Demo
              </a>
              <a href="#" className="github">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          
        <img src={typepic} alt="typing speedtest" />
          <div className="project-content">
            <h3>Typing Speed Test</h3>

            <p>
              A typing speed tester that measures Words Per Minute (WPM),
              typing accuracy, mistakes, and elapsed time with real-time
              feedback.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="buttons">
              <a href="#" className="live" onClick={() => window.open("https://typing-speed-test-self-one.vercel.app", "_blank")}>
                Live Demo
              </a>
              <a href="#" className="github" onClick={() => window.open("https://github.com/dineshstr0505-acc/typing-speed-test", "_blank")}>
                GitHub
              </a>
            </div>
          </div>
        </div>
                {/* Project 5 */}
        <div className="project-card">
          <img src={job} alt="Job Portal" />

          <div className="project-content">
            <h3>Job Portal</h3>

            <p>
              A responsive job portal website where users can explore job
              opportunities, search for jobs, and find suitable career
              opportunities through a simple and user-friendly interface.
            </p>

            <div className="tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="buttons">
              <a href="#" className="live" onClick={() => window.open("https://job-portal-5o1o.vercel.app", "_blank")}>
                Live Demo
              </a>

              <a href="#" className="github" onClick={() => window.open("https://github.com/dineshstr0505-acc/Job-Portal", "_blank")}>
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 6 */}
        <div className="project-card">
          <img src={kbmeat} alt="KB Meat Stall" />

          <div className="project-content">
            <h3>KB Meat Stall</h3>

            <p>
              A responsive online meat shopping website where customers can
              browse different meat products, explore categories, add items
              to their cart, and enjoy a convenient shopping experience.
            </p>

            <div className="tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="buttons">
              <a href="#" className="live" onClick={() => window.open("https://meat-stall-2oe1.vercel.app", "_blank")}>
                Live Demo
              </a>

              <a href="#" className="github" onClick={() => window.open("https://github.com/dineshstr0505-acc/meat-stall", "_blank")}>
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project