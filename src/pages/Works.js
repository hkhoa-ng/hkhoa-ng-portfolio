import React from 'react';
import {
  Container,
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projectsData, collaborationsData } from '../data/projectData';
import { AnimatedPage } from '../animations/animations';

function Works() {
  const projectCards = projectsData.map(project => {
    return (
      <GridItem maxW="192px">
        <Container centerContent>
          <ProjectCard
            id={project.id}
            name={project.name}
            description={project.description}
            image={project.img}
            url={project.url}
            source={project.source}
          />
        </Container>
      </GridItem>
    );
  });

  const collabCards = collaborationsData.map(project => {
    return (
      <GridItem maxW="192px">
        <Container centerContent>
          <ProjectCard
            id={project.id}
            name={project.name}
            description={project.description}
            image={project.img}
            url={project.url}
            source={project.source}
          />
        </Container>
      </GridItem>
    );
  });
  return (
    <AnimatedPage id="work">
      <Container pt={0} maxW={{ base: '400px', md: '600px' }} centerContent>
        <Box minW={{ base: '400px', md: '600px' }} my={5}>
          <Heading
            fontSize="1.2em"
            textDecoration="underline"
            textUnderlineOffset={6}
            textDecorationColor="#525252"
            textDecorationThickness={4}
            marginBottom={5}
          >
            Works
          </Heading>
          <Text mb={10} align="justify" px="5px">
            Khoa focuses on frontend development using React.js, emphasizes on
            the visual and overall user experience of the design. He also makes
            games in Unity, and build other software using Java, C++, and C#.
          </Text>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={4}
            maxW="300px"
          >
            {projectCards}
          </Grid>
        </Box>

        <Box minW={{ base: '400px', md: '600px' }}>
          <Heading
            fontSize="1.2em"
            textDecoration="underline"
            textUnderlineOffset={6}
            textDecorationColor="#525252"
            textDecorationThickness={4}
            marginBottom={5}
          >
            Collaborations
          </Heading>
          <Text mb={10} align="justify" px="5px">
            Besides his personal works, Khoa also works with his teammates -
            whether from school or friends - to build different things: games,
            school projects, prototypes.
          </Text>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={4}
            maxW="300px"
          >
            {collabCards}
          </Grid>
        </Box>

        <Footer />
      </Container>
    </AnimatedPage>
  );
}

export default Works;
