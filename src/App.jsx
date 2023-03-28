import { useState } from 'react';
import { BrowserRouter, Router, Route , Routes } from 'react-router-dom';


import{ Home , Advisor, Parkinson, Alzheimer , MriResult, HandwritingResult , Diseas , BrainCare} from './components';


const App = () => {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/Home" element={<Home/>}/>
          <Route path='/advisor' element={<Advisor/>} />
          <Route path='/parkinson' element={<Parkinson/>} />
          <Route path='/alzheimer' element={<Alzheimer/>} />
          <Route path='/mriresult' element={<MriResult/>} />
          <Route path='/handwritingresult' element={<HandwritingResult/>} />
          <Route path='/Disease' element={<Diseas/>} />
          <Route path='/Brain care' element={<BrainCare/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
