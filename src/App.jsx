import React from 'react'
import "./App.css"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import {Home} from "./Components/Pages/Home"
import {Blog} from "./Components/Pages/Blog"

const App = () => {
  
  return(
    <div className='container'>
     <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/blog/:id" element={<Blog/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App