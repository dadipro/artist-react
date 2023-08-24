import { Link } from 'react-router-dom'
import '../scss/contact.css'
import { motion } from 'framer-motion'

const Contact = () =>{
    return(
        <motion.div className='contact'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:.5}}
        >
           <div className='contact-title'>
              <span></span>
              <h1>Get In Touch</h1>
           </div>

           <div className='contact-agents'>
              <div className='agent-1'>
                 <h4>Mark Dean</h4>
                 <p>Publicist</p>
                 <span></span>
                 <number>123-456-7890</number>
                 <email>info@my-domain.com</email>
              </div>

              <span className='middle'></span>

              <div className='agent-2'>
                 <h4>Donna Clark</h4>
                 <p>Agent</p>
                 <span></span>
                 <number>123-456-7890</number>
                 <email>info@my-domain.com</email>
              </div>
           </div>

          <div className='last-contact'>
             <div className='last-title'>
                <h3>Contact Daniel Correctly</h3>
             </div>
             <div className='last-inputs'>
                <form action='input' >
                  <div className='inputs'>
                     <input type={'text'} placeholder='Name' style={{width:"250px", outline:'none'}}/>
                     <span style={{color:'transparent'}}>bbb</span>
                     <input type={'email'} placeholder='Email' style={{width:"250px", outline:'none'}}/>
                  </div>
                  <div className='message'>
                    <input type={'text'} placeholder='Type your message here...' style={{outline:'none'}}/>
                  </div>
                  <a href={Contact} style={{textDecoration:'none', marginTop:'20px'}}><button>Submit</button></a>
               </form>
             </div>
          </div>
           
        </motion.div>
    )
}


export default Contact