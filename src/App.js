
import React from 'react';
import Stocks from './Stocks'
import './App.css';
import { ChakraProvider, Flex } from '@chakra-ui/react'

function App() {
  return (
    <>
      <ChakraProvider>
        <Flex bg = 'black'>
          <Stocks/> 
        </Flex>
      </ChakraProvider>
    </>
    
  );
}
export default App;
