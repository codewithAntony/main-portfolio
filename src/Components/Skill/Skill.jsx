import React from 'react';
import './Skill.css';
import Tick from '../../assets/tick-2.png';
function Skill() {
    return (
        <div className="skills" id="skill">
            <div className="skills-t">
                <h2>Skills & Technologies</h2>
                <p>
                    I am a skilled Web Developer with over 5 Years of freelance
                    experience. <br /> A self-motivated and self-driven
                    individual who is always looking for new opportunities to
                    grow and improve.
                </p>
                <p>My skillsets: </p>
            </div>
            <div className="skills-b">
                <div className="skillsets">
                    <img src={Tick} alt="" />
                    <p>Javascript</p>
                </div>
                <div className="skillsets">
                    <img src={Tick} alt="" />
                    <p>Python</p>
                </div>
                <div className="skillsets">
                    <img src={Tick} alt="" />
                    <p>CSS</p>
                </div>
                <div className="skillsets">
                    <img src={Tick} alt="" />
                    <p>React</p>
                </div>
                <div className="skillsets">
                    <img src={Tick} alt="" />
                    <p>Typescript</p>
                </div>
                <div className="skillsets">
                    <img src={Tick} alt="" />
                    <p>Django</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
