import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { Flex, Text , Image, Box} from '@chakra-ui/react';
import projects from "./projects";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";


// function AboutMe(props){

//     props.colourHandler('#3A5A40', '#344E41');
const AboutMe = () =>{
    const [expanded, setExpanded] = useState(false);
    const skills = [
        {
            name: 'Python',
            link: 'https://www.python.org/'
        },
        {
            name: 'PyTorch',
            link: 'https://pytorch.org/'
        },
        {
            name: 'Scikit-learn',
            link: 'https://scikit-learn.org/stable/'
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
            name: 'R',
            link: 'https://www.r-project.org/'
        },
        {
            name: 'JavaScript',
            link: 'https://www.javascript.com/'
        },
        {
            name: 'Typescript',
            link: 'https://www.typescriptlang.org/'
        },
        {
            name: 'AWS',
            link: 'https://aws.amazon.com/'
        },
        {
            name: 'Cloud',
            link: 'https://cloud.google.com/?hl=en'
        },
        {
            name: 'Java',
            link: 'https://www.java.com/en/'
        },
        {
            name: 'PHP',
            link: 'https://www.php.net/'
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
            name: 'React',
            link: 'https://react.dev/'
        },
        {
            name: 'Excel',
            link: 'https://www.microsoft.com/en-ca/microsoft-365/excel'
        },
        // {
        //     name: 'Amplify',
        //     link: 'https://aws.amazon.com/amplify/'
        // },
        // {
        //     name: 'Vision',
        //     link: 'https://cloud.google.com/vision?hl=en'
        // },
        // {
        //     name: 'C++',
        //     link: 'https://isocpp.org/get-started'
        // },
        
        



        

        
    ]

    return(
        <ChakraProvider>
            <Flex
            w='100%'
            //h={{base:'calc(15vh)', sm:'calc(10vh)', lg:'calc(10vh)'}}
            h='80px'
            minH='40px'
            minW='390px'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            color='white'
            as="b"
            fontSize= '10pt'
            bg="#344E41"
            padding='0% 5%'

            >

                <Flex
                // justifyContent={{base:'space-around', sm: 'space-between', md:'space-between'}}
                alignItems='center'
                gap = '10%'
                w={{base:'30%', sm: '40%', md:'30%'}}
                //h = '100%'
                //flexDirection={{base:'column', sm: 'row', md:'row'}}
                >
                    <a href='#projects'>PROJECTS</a>
                    <a href='#about-me'>ACADEMICS</a>
                </Flex>
                <Flex>
                    <a href='#about-me'>ABOUT ME</a>
                </Flex> 
                

            </Flex>
            <SimpleGrid 
            
            minChildWidth='300px'
            padding='5% 5% 7% 5%'
            columns={2}
            spacingX='20%'
            //backgroundColor='#3A5A40'
            minW='390px'
            id='about-me'
            >
                <Flex 
                    flexDirection="column"
                    alignItems="left"
                    marginBottom='5%'
                    
                >
                    <Text color='white' as='b' fontSize='16pt' >
                        About Me
                    </Text>
                    <Text color='white' fontSize='12pt' marginTop='5%'>
                        Hi there! I am a Math and Computer Science New Grad from McMaster University.
                        I am a Software Developer with experience in both front-end and back-end technologies, always eager to learn and grow.
                    </Text>
                    <Text color='white' fontSize='12pt' marginTop='5%'>
                        I have a strong passion for data science and machine learning and am excited to gain hands-on experience in these fields. 
                        I enjoy tackling complex problems, building efficient solutions, and continuously expanding my skill set.

                        Throughout my school and work experience, I have gained various technical skills.
                        However, many of the tools/frameworks used to build this website were new to me, so I taught myself how to use them. 
                    </Text>
                    <Text color='white' fontSize='12pt' marginTop='5%'>
                        Additionally, I am a huge sports fan! 
                        I love playing just about any sport, including hockey, ultimate frisbee, golf, soccer, badminton etc.
                        Over the years, I have continued to be a captain of many sports teams, which has strengthened my leadership and teamwork skills.
                        In my free time, I enjoy traveling, hiking, and playing guitar.
                    </Text>
                    <Text color='white' as='b' fontSize='16pt' marginTop="5%" id='academics'>
                        Academics
                    </Text>
                    <Flex marginTop='2%' justifyContent="space-between">
                        <Text color='white' fontSize='12pt'>
                            <b>McMaster University</b> 
                        </Text>
                        <Text color='white' as='i' fontSize='12pt'>
                            2021 - 2025
                        </Text>
                    </Flex>
                    
                    <Text color='white' as='i'fontSize='12pt' marginTop='1%'>
                        <a href='https://academiccalendars.romcmaster.ca/preview_program.php?catoid=56&poid=28253&returnto=11346' target="_blank" rel="noopener noreferrer">
                            Honours Bachelor of Science in Mathematics and Computer Science
                        </a>
                    </Text>

                    <Text color='white' fontSize='12pt' marginTop="2%">
                        <b>3.94 CGPA - Summa Cum Laude</b>
                    </Text>
                    
                    <ProjectGrid projects={projects} expanded={expanded} />




                    
                </Flex>
                <Flex 
                    flexDirection="column"
                    alignItems="center"
                >
                    <Image
                        // src = {require('./Pictures/profile.jpg')}
                        src = {require('./Pictures/gradphoto.jpg')}
                        borderRadius='full'
                        boxSize='200px'
                        objectFit = 'cover' 
                        objectPosition="80% 23%"
                    />
                    <Text color='white' as='b' fontSize='15pt' textAlign='center' marginTop='2%'>
                        Alex McMullen
                    </Text>
                    <Text color='white'fontSize='12pt' textAlign='center' marginTop='2%'>
                        Mathematics and Computer Science New Grad from McMaster University
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
                        <a href='mailto:alex88.mcmullen@gmail.com'>
                                <Box
                                    position="relative"
                                    w="70px"
                                    h="60px" 
                                    textAlign="center"
                                    role="group"
                                    overflow="hidden"
                                >
                                    
                                    <Image
                                        src={require('./Pictures/Email.png')}
                                        alt='email'
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
                                        Email
                                    </Box>
                                </Box>
                        </a>
                        
                    </Flex>
                    <Text color='white' as='b' fontSize='15pt' marginTop = '5%' marginBottom='2%'>
                        Technical Skills
                    </Text>
                    <SimpleGrid w="75%" minChildWidth="70px" justifyItems="center">
                        {skills.map((skill, index) => (
                            <a href={skill.link} target="_blank" rel="noopener noreferrer" key={index}>
                                <Box
                                    
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
                                        // objectFit={'cover'}
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