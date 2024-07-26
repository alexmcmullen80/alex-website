import './App.css';
import StockModel from './StockModel';
import AboutMe from './AboutMe';
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { HashRouter, Routes, Route } from "react-router-dom";



function App() {


  
  return(
    <>
    <ChakraProvider>
    <HashRouter>
        
      <Flex
          w='100%'
          //h={{base:'calc(15vh)', sm:'calc(10vh)', lg:'calc(10vh)'}}
          h='80px'
          minH='40px'
          minW='400px'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          color='white'
          as="b"
          fontSize= '10pt'
          bg='#344E41'
          padding='0% 5%'

      >

        <Flex
          justifyContent={{base:'space-around', sm: 'space-between', md:'space-between'}}
          alignItems='center'
          w={{base:'30%', sm: '40%', md:'30%'}}
          //h = '100%'
          //flexDirection={{base:'column', sm: 'row', md:'row'}}
        >
          <a href='#/stock-model'>STOCK MODEL</a>
        </Flex>

        <Flex>
          <a href='#/about-me'>ABOUT ME</a>
        </Flex> 
          

      </Flex>

        <Routes>
          <Route path="/" element={<AboutMe />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/stock-model" element={<StockModel />}></Route>
        </Routes>
    </HashRouter>
      
    </ChakraProvider>
    </>
  )
}


export default App