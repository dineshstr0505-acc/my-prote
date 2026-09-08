import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Skill from './Skill.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
function App()
{
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Skill" element={<Skill/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App