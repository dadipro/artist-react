import '../scss/about.css'
import { motion } from 'framer-motion'
import Abouut from '../images/about.png'

const About = () =>{
   return(
    <motion.div className='about-page'
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{delay:.5}}
    
    >
        <div className='about-title'>
           <span></span>
           <h1>About</h1>
        </div>

        <div className='about-main'>
            <div className='about-img'>
               <img src={Abouut}/>
            </div>

            <div className='about-text'>
                <p>
                "Step into my artistic world, where pages metamorphose into canvases and stories awaken through the art of bookmaking. I'm driven by a deep passion for crafting intricate, visually captivating books that transcend words alone. Each page turn reveals a symphony of colors, textures, and emotions—a journey into the extraordinary.

                In my creative realm, imagination knows no bounds. Every book I create is an uncharted masterpiece, waiting to ignite your curiosity. From pages adorned with hand-painted illustrations that dance to meticulously sculpted covers that beckon your touch, my work invites you to experience storytelling in its most enchanting form.

                My journey began with a vision to reimagine how stories could be presented, felt, and cherished. What sets me apart is the fusion of artistry and literature, where my creations become tangible expressions of tales. I take pride in my dedicated team's commitment to pushing the boundaries of bookmaking, continuously striving to redefine the art form.

                As you explore my collection, you're invited to embrace the tactile elegance of artist books. Discover the magic that unfolds when art and literature entwine. Join me on this journey of endless possibilities, where each creation is a testament to the boundless creativity that resides within."

                Here, I've condensed the text while preserving the essence of your original message. Feel free to further adjust it to fit your style and context.                </p>

                <div className='signature-2'>
                  <span>Lunsford</span>
                </div>
            </div>
        </div>
    </motion.div>
   )
}


export default About