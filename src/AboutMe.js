import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { Flex, Text , Image, Box} from '@chakra-ui/react';


function AboutMe(props){

    props.colourHandler('#3A5A40', '#344E41');
    
    const skills = [
        {
            name: 'PHP',
            link: 'https://www.php.net/'
        },
        {
            name: 'MySQL',
            link: 'https://www.mysql.com/'
        },
        {
            name: 'PostgreSQL',
            link: 'https://www.postgresql.org/'
        },
        {
            name: 'Azure',
            link: 'https://azure.microsoft.com/en-ca'
        },
        {
            name: 'Docker',
            link: 'https://www.docker.com/'
        },
        {
            name: 'Git',
            link: 'https://git-scm.com/'
        },
        {
            name: 'Node',
            link: 'https://nodejs.org/en'
        },
        {
            name: 'HTML',
            link: 'https://html.spec.whatwg.org/'
        },
        {
            name: 'CSS',
            link: 'https://w3.org/Style/CSS/Overview.en.html'
        },
        {
            name: 'JavaScript',
            link: 'https://www.javascript.com/'
        },
        {
            name: 'React',
            link: 'https://react.dev/'
        },
        {
            name: 'Java',
            link: 'https://www.java.com/en/'
        },
        {
            name: 'Python',
            link: 'https://www.python.org/'
        },
        {
            name: 'R',
            link: 'https://www.r-project.org/'
        },
        {
            name: 'PyTorch',
            link: 'https://pytorch.org/'
        }
        
    ]

    return(
        <ChakraProvider>
            <SimpleGrid 
            minChildWidth='300px'
            padding='10% 5% 7% 5%'
            columns={2}
            spacingX='20%'
            //backgroundColor='#3A5A40'
            minW='400px'
            >
                <Flex 
                    flexDirection="column"
                    alignItems="left"
                    marginBottom='5%'
                >
                    <Text color='white' as='b' fontSize='15pt'>
                        About Me
                    </Text>
                    <Text color='white' fontSize='12pt' marginTop='5%'>
                        Hi there! I am a fourth year Math and Computer Science student at McMaster University.
                        I've always enjoyed challenging myself for the better, which is exactly what I did with this website.
                    </Text>
                    <Text color='white' fontSize='12pt' marginTop='5%'>
                        Throughout my school and work experience, I have gained various technical skills over the years.
                        However, many of the tools/frameworks used to build this website were new to me, so I taught myself how to use them. 
                    </Text>
                    <Text color='white' fontSize='12pt' marginTop='5%'>
                        Additionally, I am a huge sports fan! 
                        I love playing many sports, including hockey, ultimate frisbee, golf, soccer, badminton etc.
                        In my spare time, I captain an intramural ultimate frisbee team, and assistant captain an intramural hockey team.
                        I also love to travel, hike and play guitar!
                    </Text>
                    
                </Flex>
                <Flex 
                    flexDirection="column"
                    alignItems="center"
                >
                    <Image
                        src = {require('./Pictures/profile.jpg')}
                        borderRadius='full'
                        boxSize='200px'
                        objectFit = 'cover' 
                    />
                    <Text color='white' as='b' fontSize='15pt' textAlign='center' marginTop='2%'>
                        Alex McMullen
                    </Text>
                    <Text color='white'fontSize='12pt' textAlign='center' marginTop='2%'>
                        Mathematics and Computer Science at McMaster University
                    </Text>
                    <Flex 
                        justifyContent='center'
                        flexDirection='row'
                        alignItems='center'
                    >
                        <a href='https://www.linkedin.com/in/alex-mcmullen-01a8a6299/'>
                                <Box
                                    position="relative"
                                    w="70px"
                                    h="60px" 
                                    textAlign="center"
                                    role="group"
                                    overflow="hidden"
                                >
                                    
                                    <Image
                                        src={require('./Pictures/linkedin.png')}
                                        alt='linkedin'
                                        boxSize="30px" 
                                        position="absolute"
                                        top="50%" //centers the image vertically
                                        left="50%" //centers the image horizontally
                                        transform="translate(-50%, -50%)" //ensures the image is centered
                                        transition="all 0.3s ease"
                                        _groupHover={{
                                            top: '15px', //moves image to top on hover
                                        }}
                                    />
                                    
                                    <Box
                                        position="absolute"
                                        bottom="10px"
                                        w="100%"
                                        color="white"
                                        fontSize="12px"
                                        fontWeight="bold"
                                        opacity="0"
                                        transition="opacity 0.3s ease"
                                        _groupHover={{
                                            opacity: 1, //text becomes visible on hover
                                        }}
                                    >
                                        LinkedIn
                                    </Box>
                                </Box>
                        </a>
                        <a href='https://github.com/alexmcmullen80'>
                                <Box
                                    position="relative"
                                    w="45px"
                                    h="60px" 
                                    textAlign="center"
                                    role="group"
                                    overflow="hidden"
                                >
                                    
                                    <Image
                                        src={require('./Pictures/github.png')}
                                        alt='linkedin'
                                        boxSize="30px" // Image size adjusted to be smaller
                                        position="absolute"
                                        top="50%" //centers the image vertically
                                        left="50%" //centers the image horizontally
                                        transform="translate(-50%, -50%)" //ensures the image is centered
                                        transition="all 0.3s ease"
                                        _groupHover={{
                                            top: '15px', //moves image to top on hover
                                        }}
                                    />
                                    
                                    <Box
                                        position="absolute"
                                        bottom="10px"
                                        w="100%"
                                        color="white"
                                        fontSize="12px"
                                        fontWeight="bold"
                                        opacity="0"
                                        transition="opacity 0.3s ease"
                                        _groupHover={{
                                            opacity: 1, //text becomes visible on hover
                                        }}
                                    >
                                        GitHub
                                    </Box>
                                </Box>
                        </a>
                        
                    </Flex>
                    <Text color='white' as='b' fontSize='15pt' marginTop = '5%' marginBottom='2%'>
                        Technical Skills
                    </Text>
                    <SimpleGrid w="75%" minChildWidth="70px" justifyItems="center">
                        {skills.map((skill, index) => (
                            <a href={skill.link}>
                                <Box
                                    key={index}
                                    position="relative"
                                    w="70px"
                                    h="60px" 
                                    textAlign="center"
                                    role="group"
                                    overflow="hidden"
                                >
                                    
                                    <Image
                                        src={require('./Pictures/' + skill.name + '.png')}
                                        alt={skill.name}
                                        boxSize="30px" 
                                        position="absolute"
                                        top="50%" //centers the image vertically
                                        left="50%" //centers the image horizontally
                                        transform="translate(-50%, -50%)" //ensures the image is centered
                                        transition="all 0.3s ease"
                                        _groupHover={{
                                            top: '15px', //moves image to top on hover
                                        }}
                                    />
                                    
                                    <Box
                                        position="absolute"
                                        bottom="10px"
                                        w="100%"
                                        color="white"
                                        fontSize="12px"
                                        fontWeight="bold"
                                        opacity="0"
                                        transition="opacity 0.3s ease"
                                        _groupHover={{
                                            opacity: 1, //text becomes visible on hover
                                        }}
                                    >
                                        {skill.name}
                                    </Box>
                                </Box>
                            </a>
                        ))}
                    </SimpleGrid>





                </Flex>
            </SimpleGrid>
        </ChakraProvider>
    )

}
export default AboutMe