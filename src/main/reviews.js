import '../scss/reviews.css'
import { motion } from 'framer-motion'

const Reviews = () =>{
    return(
        <motion.div className='reviews'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:.5}}
        >
           <div className='reviews-title'>
              <span></span>
              <h1>Reviews</h1>
           </div>

           <div className='about-reviews'>
              <div className='about-1'>
                <div>
                    <p>
                    "Your work is a masterpiece! The way you [specific achievement] in your latest project is truly outstanding. Your creativity shines through, and I'm excited for what you'll create next!"                   
                    </p>

                    <span></span>

                    <h4>Louisiana Reviews</h4>
                </div>

                <div>
                    <p>
                    "Once again, you've wowed us! Your [specific skill] in your latest project is inspiring. Looking forward to more of your amazing creations!"</p>

                    <span></span>

                    <h4>Reading Time</h4>
                </div>

                <div>
                    <p>
                    "Impressive work! The [notable feature] in your latest project speaks volumes about your innovation. Excited to see where your talents take you!"
                    </p>

                    <span></span>

                    <h4>Line Magazine</h4>
                </div>
              </div>

              <div className='about-2'>
                <div>
                  <p>
                  "Your work always shines! Your [unique aspect] in the latest project is captivating. Your dedication is evident, and I can't wait for more!"
                  </p>

                    <span></span>

                    <h4>James Belle | Author</h4>
                </div>

                <div>
                  <p>
                  "Cheers to your outstanding work! Your [specific strength] in the latest project is commendable. Anticipating more of your incredible projects!"
                    </p>

                    <span></span>

                    <h4>The Boston Independent Review of books</h4>
                </div>

                <div>
                  <p>
                  "Incredible work, as expected! Your [notable achievement] in the latest project is a testament to your skills. Looking forward to your future creations!"
                    </p>

                    <span></span>

                    <h4>Authors for Authors</h4>
                </div>
              </div>
           </div>
        </motion.div>
    )
}


export default Reviews