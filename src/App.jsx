import React from 'react';
import "./App.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Header from "./Components/Header/Header"
import Bread from "./Components/Bread/Bread"
import Skill from "./Components/Skill/Skill"
import Projects from "./Components/Projects/Projects"
import Hero from "./Components/Hero/Hero"


function App() {
    return (
        <div className="App">
            <Header />
            <Bread />
            <Skill />
            <Projects />
            <Hero />
        </div>
    )
}

export default App
library.add(fab, fas, far)