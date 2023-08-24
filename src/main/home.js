import '../scss/home.css'
import { motion } from 'framer-motion'
import daniel from '../images/daniel.png'
import book1 from '../images/book1.png'
import book2 from '../images/book2.png'
import book3 from '../images/book3.png'

const Home = () =>{
   return(
    <motion.div className='home'
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{delay:.5}}
    
    >
        <div className='home-daniel'>
           <div className='about-daniel'>
              <h1>Daniel <br/> Lunsford</h1>

              <p>Author of the best-selling books Life for Rent, The Sleepwalkers, 
               Infinity Expired and many more</p>

               <a href='#'>Buy Daniel's Books</a>
           </div>

           <div className='image-daniel'>
             <img src={daniel}/>
               <p>Winner of the Golden Ink Award, 2035</p>
                 <div className='signature'>
                   <span>Lunsford</span>
                 </div>
           </div>
        </div>


        <div className='home-books'>
           <h1>Daniel Lunsford’s Latest Releases</h1>

            <div className='daniel-books'>
                <div className='book-1'>
                   <img src={book1}/>
                     <div className='inner-book'>
                        <h4>The Sleepwalkers</h4>
                        <p></p>
                        <span>$24.90</span>
                     </div>
                </div>


                <div className='book-2'>
                   <img src={book2}/>
                       <div className='inner-book'>
                           <h4>Infinity Expired</h4>
                           <p></p>
                           <span>$24.90</span>
                       </div>
                </div>
            </div>

            <div className='daniel-last-book'>
                <div className='last-book'>
                   <img src={book3}/>
                   <h4>Life for Rent</h4>
                   <p></p>
                   <span>$24.90</span>
                </div>

                <div className='last-book-text'>
                   <p><b>"Welcome to the world of 'Life For Rent.' Within the pages of this captivating book, a tapestry of interwoven stories awaits, each unveiling the intricate lives of diverse characters as they navigate the complexities of existence, love, and destiny. As you delve into the depths of its prose, you'll be immersed in their triumphs, struggles, and poignant moments that mirror the universal human experience. 'Life For Rent' is more than a mere collection of words; it extends an eloquent invitation to explore the myriad emotions that shape our journey, reminding us that every chapter offers an opportunity for growth, connection, and a profound comprehension of the essence of living."
                   </b></p>
                   <a href='#'>More Books</a>
                </div>
            </div>
        </div>

        <div className='reviews'>
          <h1>Reviews</h1>
            <div className='media-reviews'>
               <div>
                 <text>
                 "I'm honored to showcase a review from the prestigious Seattle Daily. They've eloquently evaluated both me and my work, describing it as an exceptional blend of [specific qualities]. Their words reflect the dedication and creativity I pour into every project. It's truly inspiring to have received such recognition from a respected critic like Seatle Daily."
                 </text>
                 <p></p>
                 <span>Seatle Daily</span>
               </div>

               <div>
               <text>
               "I'm proud to present an excerpt from a review by The Washington Paper. Their insightful evaluation of both me and my work captures the essence of [specific aspects] that define my creative journey. Their recognition reinforces my commitment to excellence and fuels my passion for pushing boundaries. Being acknowledged by The Washington Paper is a true honor and testament to the impact of my endeavors."
                 </text>
                 <p></p>
                 <span>The Washington Paper</span>
               </div>

               <div>
               <text>
               "I'm thrilled to share a snippet from a review by T.O.M Magazine. Their thoughtful evaluation of my work highlights the [specific qualities] that set my creations apart. Their words resonate deeply, affirming my dedication to crafting exceptional content. Being acknowledged by T.O.M Magazine inspires me to continue pushing the boundaries of my craft and delivering meaningful experiences to my audience."
                 </text>
                 <p></p>
                 <span>T.O.M Magazine</span>
               </div>
            </div>  
            <div className='link-reviews'>
                <a href='#'>Read More</a>
            </div>
        </div>
    </motion.div>
   )
}


export default Home