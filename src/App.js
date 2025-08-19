import './App.css';
import AboutMe from './AboutMe';
import { ChakraProvider } from '@chakra-ui/react'





function App() {
  document.body.style.backgroundColor = "#3A5A40";
  
  return(
    <>
    <ChakraProvider>
      <AboutMe  />
    </ChakraProvider>
    </>
  )
}


export default App