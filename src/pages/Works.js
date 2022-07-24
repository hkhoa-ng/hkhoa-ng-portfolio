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
      <GridItem>
        <ProjectCard
          id={project.id}
          name={project.name}
          description={project.description}
          image={project.img}
          url={project.url}
          source={project.source}
        />
      </GridItem>
    );
  });

  const collabCards = collaborationsData.map(project => {
    return (
      <GridItem>
        <ProjectCard
          id={project.id}
          name={project.name}
          description={project.description}
          image={project.img}
          url={project.url}
          source={project.source}
        />
      </GridItem>
    );
  });
  return (
    <Container pt={10}>
      <Box>
        <Box my={5}>
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
          <Grid templateColumns="repeat(2, 1fr)" gap={3} maxW="300px">
            {projectCards}
          </Grid>
        </Box>

        <Box my={5}>
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
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {collabCards}
          </Grid>
        </Box>

        <Footer />
      </Box>
    </Container>
  );
}

export default Works;
