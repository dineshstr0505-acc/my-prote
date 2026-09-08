import './Skill.css';
function Skill ()
{
    return(
        <>
          <section class="skills" id="skills">
    <div class="section-title">
        <h2>My Skills</h2>
        <p>Technologies I use to build modern and responsive websites.</p>
    </div>

    <div className="skills-container">

        <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>HTML5</h3>
            <p>Semantic structure and responsive web layouts.</p>
        </div>

        <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>CSS3</h3>
            <p>Flexbox, Grid, Animations and Responsive Design.</p>
        </div>

        <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>Interactive UI, DOM Manipulation and ES6.</p>
        </div>

        <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React JS</h3>
            <p>Component-based UI development with React.</p>
        </div>

        <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>MySQL</h3>
            <p>Database design and SQL queries.</p>
        </div>

            <div className="skill-card">
    <div className="skill-icon">🅱️</div>
    <h3>Bootstrap</h3>
    <p>Creating responsive and mobile-friendly web designs.</p>
</div>


           <div className="skill-card">
    <div className="skill-icon">🍃</div>
    <h3>Spring Boot</h3>
    <p>Building scalable backend applications and REST APIs.</p>
</div>

        <div className="skill-card">
    <div className="skill-icon">☕</div>
    <h3>Java</h3>
    <p>Building robust applications using object-oriented programming.</p>
</div>

        <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>Git & GitHub</h3>
            <p>Version control and project management.</p>
        </div>

    </div>
</section>
        </>
    )
}
export default Skill