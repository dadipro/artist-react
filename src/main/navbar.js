import { Link } from 'react-router-dom'
import '../scss/navbar.css'
import {motion} from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Home from './home';

const Navbar = () =>{
  const [show,setShow] = useState('')

  const menubtn = () =>{
     setShow(show === 'none'? 'block':'none')
  }

  return(
     <div className='navbar'>
       <div className='page-title'>
           <MenuIcon className='menu' onClick={menubtn}/>
           <Link to='/' style={{textDecoration:'none', color:'black'}}><h2>Daniel Lunsford</h2></Link>
        </div>
        <div className='home-navbar' style={{display:show}}>
           <ul>
             <Link to="/" style={{textDecoration:'none'}}>Home</Link>
             <Link to="/about" style={{textDecoration:'none'}}>About</Link>
             <Link to="/books" style={{textDecoration:'none'}}>Books</Link>
             <Link to="/reviews" style={{textDecoration:'none'}}>Reviews</Link>
             <Link to="/events" style={{textDecoration:'none'}}>Events</Link>
             <Link to="/contact" style={{textDecoration:'none'}}>Contact</Link>
           </ul>
        </div>
     </div>
    )
}

export default Navbar