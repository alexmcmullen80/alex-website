import { useState } from "react";
import { Flex, Box, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion.create(Box);

const ProjectGrid = ({ projects }) => {
    const [showGrid, setShowGrid] = useState(false);

    return (
        <>
            <Flex flexDirection="row" alignItems="center">
                <Text color='white' as='b' fontSize='16pt' marginTop="5%" marginBottom="5%" id='projects'>
                    Projects
                </Text>
                <Button 
                    onClick={() => setShowGrid(!showGrid)}
                    colorScheme="inherit"
                    // mb={4}
                >
                    {/* {showGrid ? "Hide Projects" : "Show Projects"} */}
                    <Image
                        src={require('./Pictures/expand.png')}
                        alt='expand'
                        boxSize="20px" 
                        position="absolute"
                        top="50%" //centers the image vertically
                        left="50%" //centers the image horizontally
                        transform={`translate(-50%, -50%) rotate(${showGrid ? 180 : 0}deg)`}
                        transition="all 0.3s ease"
                        _groupHover={{
                            top: '15px', //moves image to top on hover
                        }}
                    />
                </Button>
            </Flex>
            <Box textAlign="center">
                

                <AnimatePresence>
                    {showGrid && (
                        <MotionBox
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                        
                            <SimpleGrid columns={1} spacing="20px">
                                {projects.map((project, index) => (
                                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Box
                                            position="relative"
                                            w="100%"
                                            h="auto"
                                            textAlign="center"
                                            borderRadius="12px"
                                            overflow="hidden"
                                            boxShadow="0 6px 12px rgba(0, 0, 0, 0.2)"
                                            _hover={{
                                                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                                                transform: "scale(1.05)",
                                            }}
                                            transition="transform 0.3s ease, box-shadow 0.3s ease"
                                        >
                                            <Box w="100%" color="white" fontSize="12pt" padding="15px" borderTopRadius="12px" textAlign="left">
                                                <Text as="b" fontSize="15pt">
                                                    {project.name}
                                                </Text>
                                                <Text>
                                                    {project.description.split("\n").map((line, idx) => (
                                                        <span key={idx}>
                                                            {line}
                                                            <br />
                                                        </span>
                                                    ))}
                                                </Text>

                                                {project.images && Object.values(project.images).length > 0 && (
                                                    <SimpleGrid minChildWidth="70px" justifyItems="center" spacing="15px" templateColumns="repeat(auto-fill, 50px)">
                                                        {Object.values(project.images).map((image, index) => (
                                                            <Box key={index} position="relative" w="70px" h="60px" textAlign="center" role="group" overflow="hidden">
                                                                <Image
                                                                    src={require("./Pictures/" + image + ".png")}
                                                                    alt={image}
                                                                    boxSize="30px"
                                                                    position="absolute"
                                                                    top="50%"
                                                                    left="50%"
                                                                    transform="translate(-50%, -50%)"
                                                                    transition="all 0.3s ease"
                                                                    _groupHover={{ top: "15px" }}
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
                                                                    _groupHover={{ opacity: 1 }}
                                                                >
                                                                    {image}
                                                                </Box>
                                                            </Box>
                                                        ))}
                                                    </SimpleGrid>
                                                )}

                                            </Box>
                                        </Box>
                                    </a>
                                ))}
                            </SimpleGrid>
                        
                        </MotionBox>
                    )}
                </AnimatePresence>
                
            </Box>
        </>
    );
};

export default ProjectGrid;
