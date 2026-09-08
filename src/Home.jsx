import './Home.css';
import cardp from "./assets/cardp.jpeg";
import { TypeAnimation } from 'react-type-animation';
import {useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
function Home()
{
    const navigate = useNavigate();
     const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = (x - centerX) / 12;
            const rotateX = (centerY - y) / 12;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.05)
            `;
        };

        const handleMouseLeave = () => {
            card.style.transition = "0.3s";
            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
            `;
        };

        const handleMouseDown = () => {
            card.style.transition = "0.1s";
            card.style.transform += " scale(0.98)";
        };

        const handleMouseUp = () => {
            card.style.transition = "0.3s";
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
        card.addEventListener("mousedown", handleMouseDown);
        card.addEventListener("mouseup", handleMouseUp);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
            card.removeEventListener("mousedown", handleMouseDown);
            card.removeEventListener("mouseup", handleMouseUp);
        };
    }, [])

    return (
        <>
            <section className="hero">
                <div className="left">
                    <h3>Hello, I'm</h3>
                    <h1>DINESH KUMAR C</h1>
                    <h2 id='feild'>
                        <TypeAnimation
                            sequence={[
                                "FullStact Developer..",
                                2000,
                                "Frontend Developer..",
                                2000,
                                "React Developer..",
                                3000,
                            ]}
                            wrapper='h2'
                            repeat={Infinity}
                            speed={50}
                        /></h2>
                    <p>This is DINESH KUMAR C, A Passionate Full Stack developer creating clean & responsive website | building modern web experiences.</p>
                    <div className="btns">
                        <button className="hire" onClick={() => navigate("/Contact")}>Hire Me</button>
                        <button className="view-project" onClick={() => navigate("/Project")}>View Projects</button>
                    </div>
                </div>
                <div className="right">

                    <div className="id-card" ref={cardRef}>
                        <img src={cardp} alt="Profile" />
                        <h3>Dinesh Kumar C</h3>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;