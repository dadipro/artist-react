import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import { AnimatePresence,} from 'framer-motion'
import Navbar from './main/navbar';
import About from './main/about';
import Books from './main/books';
import Contact from './main/contact';
import Events from './main/events';
import Home from './main/home';
import Reviews from './main/reviews';
import Footer from './main/footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <AnimatePresence>
           <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/about' exact Component={About}/>
              <Route path='/books' exact Component={Books}/>
              <Route path='/reviews' exact Component={Reviews}/>
              <Route path='/events' exact Component={Events}/>
              <Route path='/contact' exact Component={Contact}/>
           </Routes>
          </AnimatePresence>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
