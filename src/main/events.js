import '../scss/events.css'
import { motion } from 'framer-motion'
import Event1 from '../event-images/event1.png'
import Event2 from '../event-images/event2.png'
import Event3 from '../event-images/event3.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Events = () =>{
  return(
     <motion.div className='events'
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{delay:.5}}
     >
        <div className='event-title'>
           <span></span>
           <h1>Events</h1>
        </div>


        <div className='events-info'>
           <div className='event-1'>
             <div>
                <img src={Event1}/>
             </div>
             <div className='event-text'>
                <p>Sat, May 12 | The “Neighborhood”</p>
                <h4>Book Signing</h4>
                <div className='socials'>
                     <a href='https://www.facebook.com/' style={{color:'blue'}} target='_blank'><FacebookIcon/></a>
                     <a href='https://twitter.com/' style={{color:'lightblue'}}  target='_blank'><TwitterIcon/></a>
                     <a href='https://www.linkedin.com/?trk=career-advice-hub-home_nav-header-logo' style={{color:'blue'}}  target='_blank'><LinkedInIcon/></a>
                </div>
                <span>Register Now</span>
             </div>
           </div>
           <div className='event-2'>
              <div className='event-text'>
                  <p>Sun, Jul 01 | The Corner Book Store</p>
                  <h4>Read and Discuss | Infinity Expired</h4>
                  <span>Share</span>
                  <div className='socials'>
                     <a href='https://www.facebook.com/' style={{color:'blue'}}  target='_blank'><FacebookIcon/></a>
                     <a href='https://twitter.com/' style={{color:'lightblue'}}  target='_blank'><TwitterIcon/></a>
                     <a href='https://www.linkedin.com/?trk=career-advice-hub-home_nav-header-logo' style={{color:'blue'}}  target='_blank'><LinkedInIcon/></a>
                  </div>
                  <span>Register Now</span>
               </div>
               <div>
                <img src={Event2}/>
               </div>
           </div>
           <div className='event-3'>
               <div>
                </div>
                  <img src={Event3}/>
                <div className='event-text'>
                  <p>Sat, May 12 | The “Neighborhood”</p>
                  <h4>Reading & Signing | Life for Rent</h4>
                  <span>Share</span>
                  <div className='socials'>
                    <a href='https://www.facebook.com/' style={{colo:'blue'}}><FacebookIcon/></a>
                    <a href='https://twitter.com/' style={{color:'lightblue'}}><TwitterIcon/></a>
                    <a href='https://www.linkedin.com/?trk=career-advice-hub-home_nav-header-logo' style={{color:'blue'}}><LinkedInIcon/></a>
                  </div>
                  <span>Register Now</span>
                </div>
           </div>
        </div>
     </motion.div>
  )
}


export default Events