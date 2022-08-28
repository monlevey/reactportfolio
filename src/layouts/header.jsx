import { Link } from 'react-router-dom'
// Here we import the Head css file 
import '../components/css/header.css';
//importing the navbar 
import Navbar from './navbar';
// import the profile image
function Header(){
  return (
    <header className='header'>  
      Mon Levey
      <div className="mobilelogo">
        </div>
      <Navbar></Navbar>
    </header>
  )
}

export default Header