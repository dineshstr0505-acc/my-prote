import idpic from "./assets/idpic.jpeg";
import './About.css'
function About()
{
    return(
        <>
         <section class="about" id="about">
    <div class="about-container">
        <div class="about-image">
           <img src={idpic} alt="profile-picture" />
        </div>

        <div class="about-content">
            <h1>ABOUT ME</h1>
            <h2>Creative Front-End Developer</h2>

            <p>
                Hello! I'm <strong>DINESH KUMAR</strong>, a passionate Front-End Developer who enjoys
                creating modern, responsive, and interactive websites using HTML, CSS,
                JavaScript, and React. I love turning creative ideas into beautiful
                user experiences with clean and efficient code.
            </p>

            <p>
                I continuously improve my skills by building real-world projects and
                exploring new web technologies. My goal is to develop fast,
                user-friendly, and visually appealing web applications.
            </p>

            <div class="about-info">
                <div>
                    <h3>Experience</h3>
                    <p>Fresher</p>
                </div>

                <div>
                    <h3>Projects</h3>
                    <p>10+ Completed</p>
                </div>

                <div>
                    <h3>Location</h3>
                    <p>Tamil Nadu, India</p>
                </div>
            </div>

            <a href="/contact" class="btn">Let's Connect</a>
        </div>
    </div>
</section>
       
        </>
    )
}
export default About