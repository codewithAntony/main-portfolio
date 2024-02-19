import React from 'react'
import './Bread.css'
import Tech from "../../assets/tech2.png"
const Bread = () => {
    return (
        <div className='bread'>
            <div className='bread-l'>
                <span>{`Hi, I'm Antony.`}</span>
                <h2>Creating great apps is my Bread and Butter.</h2>
                <p>Lines of Code, Stories of Success: Empowering Brands in the Digital Realm. <br/>For all your Mobile & Web app Designs, you are at the right place!</p>
                <div className='btn'>
                    <button className='btn-1'><a href='#'>Resume</a></button>
                    <button className='btn-2'><a href='#'>See My Past Work</a></button>
                </div>
            </div>
            {/* Tech image */}
            <img src={Tech} alt="" className='bread-img'/>

        </div>
    )
}

export default Bread
