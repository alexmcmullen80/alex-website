import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

function Logos(){
    const logos = [
        {
            name: 'postgreSQL',
            link: 'https://www.postgresql.org/'
        },
        {
            name: 'azure',
            link: 'https://azure.microsoft.com/en-ca'
        },
        {
            name: 'git',
            link: 'https://git-scm.com/'
        },
        {
            name: 'node',
            link: 'https://nodejs.org/en'
        },
        {
            name: 'javaScript',
            link: 'https://www.javascript.com/'
        },
        {
            name: 'react',
            link: 'https://react.dev/'
        },
        {
            name: 'python',
            link: 'https://www.python.org/'
        },
        {
            name: 'R',
            link: 'https://www.r-project.org/'
        }
    ]

    return(
        <ChakraProvider>
            <Flex alignItems="center" justifyContent="center" flexDirection="column">
                <Text as="b" fontSize="7pt" margin='15px 10px 15px 15px' textAlign='center' color='white'>Powered By</Text>
                <Flex alignItems="center" justifyContent="center" flexDirection="row">
                    {logos.map((logo, index) => {
                        return (
                            <a href={logo.link}>
                                <Image
                                src = {require('./Pictures/' + logo.name + '.png')}
                                alt=""
                                boxSize='25px'
                                objectFit = 'cover'
                                margin='5px 10px 15px 15px'
                                key = {index}
                                />
                            </a>
                            );
                        })}
                </Flex>
            </Flex>
        </ChakraProvider>
  
      )
}
export default Logos