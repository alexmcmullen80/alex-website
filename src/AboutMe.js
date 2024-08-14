import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { Flex, Text , Image} from '@chakra-ui/react';


function AboutMe(props){

    props.colourHandler('#3A5A40', '#344E41');
    
    const skills = [
        {
            name: 'php',
            link: 'https://www.php.net/'
        },
        {
            name: 'mysql',
            link: 'https://www.mysql.com/'
        },
        {
            name: 'postgreSQL',
            link: 'https://www.postgresql.org/'
        },
        {
            name: 'azure',
            link: 'https://azure.microsoft.com/en-ca'
        },
        {
            name: 'docker',
            link: 'https://www.docker.com/'
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
            name: 'html',
            link: 'https://html.spec.whatwg.org/'
        },
        {
            name: 'css',
            link: 'https://w3.org/Style/CSS/Overview.en.html'
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
            name: 'java',
            link: 'https://www.java.com/en/'
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
                            <Image
                            src = {require('./Pictures/linkedin.png')}
                            boxSize='25px'
                            objectFit = 'cover'
                            margin='5px'
                            />
                        </a>
                        <a href='https://github.com/alexmcmullen80'>
                            <Image
                            src = {require('./Pictures/github.png')}
                            boxSize='30px'
                            objectFit = 'cover'
                            margin='5px'
                            />
                        </a>
                    </Flex>
                    <Text color='white' as='b' fontSize='15pt' marginTop = '5%' marginBottom='2%'>
                        Technical Skills
                    </Text>
                    <SimpleGrid w='75%' minChildWidth='50px' justifyItems='center'>
                        {skills.map((skill, index) => {
                            return (
                                <a href={skill.link} key={index}>
                                    <Image
                                    src = {require('./Pictures/' + skill.name + '.png')}
                                    alt=""
                                    boxSize='30px'
                                    marginTop='10px'
                                    marginBottom='10px'
                                    key = {index}
                                    />
                                </a>
                                );
                            })}
                    </SimpleGrid>
                </Flex>
            </SimpleGrid>
        </ChakraProvider>
    )

}
export default AboutMe