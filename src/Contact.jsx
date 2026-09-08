import {FaGithub} from "react-icons/fa6";

import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="title">
        <h1>
          Contact <span>Me</span>
        </h1>
        <p>Let's build something amazing together.</p>
      </div>
        <div className="contact-info">
          <div className="box">
            <div>
              <h3>Email</h3>
              <p>dineshstr0505@gmail.com</p>
            </div>
          </div>

          <div className="box">
            <div>
              <h3>Phone</h3>
              <p>+91 9345662833</p>
            </div>
          </div>

          <div className="box">
            <div>
              <h3>Location</h3>
              <p>Dindigul, Tamil Nadu, India</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default Contact