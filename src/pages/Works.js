import React from 'react';
import {
  Container,
  Box,
  Button,
  Heading,
  Grid,
  GridItem,
  Divider,
} from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projectsData, collaborationsData } from '../data/projectData';

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
    <Container pt={10} maxW={{ base: '400px', md: '600px' }} centerContent>
      <Box minW={{ base: '400px', md: '600px' }} my={5}>
        <Heading
          fontSize="1.2em"
          textDecoration="underline"
          textUnderlineOffset={6}
          textDecorationColor="#525252"
          textDecorationThickness={4}
          marginBottom={10}
        >
          Works
        </Heading>
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
          marginBottom={4}
        >
          Collaborations
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {collabCards}
        </Grid>
      </Box>

      <Footer />
    </Container>
  );
}

export default Works;
