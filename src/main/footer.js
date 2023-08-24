import '../scss/footer.css'
import { motion } from 'framer-motion'

const Footer = () =>{
return(
<>
    <div className='home-footer'>
          <div className='informations'>
           <div>
             <p>
              For media inquiries,
              please contact agent Donna Clark
              </p>

              <span>
              123-456-7890 | info@my-domain.com
              500 Terry Francois Street,  San Francisco
              </span>
           </div>

           <div>
              <p>
              Sign up for news and updates 
               from Daniel Lunsford
              </p>
              <div className='input'>
                <input type={'email'} placeholder="Email Address"/>
                <button type={'submit'}>Subscribe</button>
              </div>
           </div>

           <div>
             <p>
              Find more information about
              our online store & policies below
             </p>

             <span>
              FAQ | Shipping & Returns 
              Store Policy | Payment Methods
             </span>
           </div>
         </div> 

    </div>
    <div className='footer-wix'>
       <span>© 2035 by Daniel Lunsford. Powered and secured by <a href="#">Wix</a> </span>
    </div>
</>
)
}


export default Footer