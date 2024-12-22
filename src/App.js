import './App.css';
import StockModel from './StockModel';
import AboutMe from './AboutMe';
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';




function App() {
  // const [colour, changeColour] = useState("#3A5A40");
  // const [headercolour, changeHeaderColour] = useState("#344E41");
  document.body.style.backgroundColor = "#3A5A40";

  // function colourHandler(bodyColour, headerColour){
  //   changeColour(bodyColour);
  //   changeHeaderColour(headerColour);
  // }



  
  return(
    <>
    {/* <ChakraProvider>
    <HashRouter>
        <Routes>
          <Route path="/" element={<AboutMe colourHandler = {colourHandler}/>}></Route>
          <Route path="/about-me" element={<AboutMe colourHandler = {colourHandler}/>}></Route>
          <Route path="/stock-model" element={<StockModel colourHandler = {colourHandler}/>}></Route>
        </Routes>
    </HashRouter>
      
    </ChakraProvider> */}

    <ChakraProvider>

      <AboutMe  />
    </ChakraProvider>
    </>
  )
}


export default App