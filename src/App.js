
import React from 'react'
import Stocks from './Stocks'
import Logos from './Logos'
import './App.css';
import { ChakraProvider, Flex} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react' 



function App() {
  return (
    <>
      <ChakraProvider>
        <Flex 
          //bg = 'black' 
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          >
          <Image margin = '40px' src = {require('./Pictures/title.png')}/>
          <Stocks /> 
          <Logos />
        </Flex>
      </ChakraProvider>
    </>
    
  );
}
export default App;
