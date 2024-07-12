
import { ChakraProvider } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import News from './News';
function Stock1(props){

  return(
    <>
    <ChakraProvider>
        <Flex
            w="450px" 
            padding="10px" 
            margin= "10px" 
            //bg={props.bcolour}
            borderRadius='30px'
            color="white"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            fontFamily="Inter"
            >
            <Text
                    as="b"
                    fontSize="20pt"
                    margin='0px'
                    textAlign='center'
                >{props.stock_ticker}</Text>
                    
            <Text
                as="b"
                fontSize="10pt"
                margin='0px'
                textAlign='center'
            >{props.message}</Text>

            <Image
                src = {props.src}
                alt=""
                boxSize='400px'
                objectFit = 'cover'
                margin='15px 10px 0px 10px'
                
            />
            {/* <News ticker = {props.stock_ticker}></News> */}

        </Flex>
    </ChakraProvider>
    </>
  )
}

  


export default Stock1;




