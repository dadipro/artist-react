import '../scss/books.css'
import { motion } from 'framer-motion'
import Book1 from '../books-images/book1.png'
import Book2 from '../books-images/book2.png'
import Book3 from '../books-images/book3.png'
import Book4 from '../books-images/book4.png'
import Book5 from '../books-images/book5.png'
import Book6 from '../books-images/book6.png'

const Books = () =>{
   return(
      <motion.div className='books'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:.5}}
      >
         <div className='books-title'>
            <span></span>
            <h1>Books</h1>
         </div>
         <div className='books-shop'>
             <div className='books-1'>
                <div>
                   <img src={Book1}/>
                     <div className='under-book'>
                        <h4>The Sleepwalkers</h4>
                        <span></span>
                        <p>$24.90</p>
                     </div>
                </div>

                <div>
                   <img src={Book2}/>
                     <div className='under-book'>
                        <h4>Infinity Expired</h4>
                        <span></span>
                        <p>$24.90</p>
                     </div>
                </div>

                <div>
                <img src={Book3}/>
                     <div className='under-book'>
                        <h4>The Sleepwalkers</h4>
                        <span></span>
                        <p>$24.90</p>
                     </div>
                </div>
             </div>

             <div className='books-2'>
                <div>
                <img src={Book4}/>
                     <div className='under-book'>
                        <h4>Life for Rent</h4>
                        <span></span>
                        <p>$24.90</p>
                     </div>
                </div>

                <div>
                <img src={Book5}/>
                     <div className='under-book'>
                        <h4>On a Higher Level</h4>
                        <span></span>
                        <p>$24.90</p>
                     </div>
                </div>

                <div>
                <img src={Book6}/>
                     <div className='under-book'>
                        <h4>My First & My Last</h4>
                        <span></span>
                        <p>$24.90</p>
                     </div>
                </div>
             </div>
         </div>
      </motion.div>
   )
}


export default Books