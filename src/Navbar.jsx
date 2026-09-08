import{Link} from 'react-router-dom'
import './Navbar.css'
function Navbar()
{
    return(
        <>
        <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to ='/Skill'>Skill</Link>
        <Link to = '/Project'>Project</Link>
        <Link to = '/Contact'>Contact</Link>
        </div>
        </>
    )
}
export default Navbar