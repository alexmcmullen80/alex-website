
import React from 'react';
import Stocks from './Stocks'
import './App.css';
import { ChakraProvider, Flex} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react' 


function App() {
  return (
    <>
      <ChakraProvider>
        <Flex 
          bg = 'black' 
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          >
          <Image src = {require('./title.png')}/>
          <Stocks/> 
        </Flex>
      </ChakraProvider>
    </>
    
  );
}
export default App;
