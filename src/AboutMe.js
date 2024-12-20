import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { Flex, Text , Image, Box} from '@chakra-ui/react';
import projects from "./projects";


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
                    
                    <Text color='white' as='b' fontSize='15pt' marginTop="5%" marginBottom="5%">
                        Projects
                    </Text>
                    <SimpleGrid columns={1} spacing="20px">
                        {projects.map((project, index) => (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Box
                                key={index}
                                position="relative"
                                w="100%"
                                h="auto"
                                textAlign="center"
                                //border="2px solid #2F855A"  // Darker border color for better contrast
                                borderRadius="12px"  // Slightly larger border radius for a smoother look
                                overflow="hidden"
                                //backgroundColor="#A3D9A5" 
                                boxShadow= '0 6px 12px rgba(0, 0, 0, 0.2)'
                                _hover={{ 
                                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',  // Stronger shadow on hover for better effect
                                    transform: 'scale(1.05)',  // Slight scaling effect on hover
                                }}
                                transition="transform 0.3s ease, box-shadow 0.3s ease"  // Smooth transition for hover effects
                            >
                                <Box
                                    w="100%"
                                    color="white"
                                    fontSize="12pt"
                                    padding="15px"
                                    borderTopRadius="12px"  
                                    textAlign="left"  
                                >
                                    <Text                                    
                                        as='b'
                                        fontSize='15pt'
                                    >   
                                        {project.name}
                                    </Text>
                                    <Text>
                                        {/* Split the description by '\n' and render each part with <br /> */}
                                        {project.description.split('\n').map((line, idx) => (
                                        <span key={idx}>
                                            {line}
                                            <br />
                                        </span>
                                        ))}
                                    </Text>
                                    
                                    <SimpleGrid minChildWidth="70px" justifyItems="center" spacing  = '15px' templateColumns="repeat(auto-fill, 50px)">
                                        {Object.values(project.images).map((image, index) => (
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
                                                        src={require('./Pictures/' + image + '.png')}
                                                        alt={image}
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
                                                        {image}
                                                    </Box>
                                                </Box>
                                        ))}
                                    </SimpleGrid>
                                    
                                </Box>
                            
                                
                                    
                            </Box>
                            </a>
                        ))}
                    </SimpleGrid>



                    
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
                        <a href='https://www.linkedin.com/in/alex-mcmullen-01a8a6299/' target="_blank" rel="noopener noreferrer">
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
                        <a href='https://github.com/alexmcmullen80' target="_blank" rel="noopener noreferrer">
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
                            <a href={skill.link} target="_blank" rel="noopener noreferrer">
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