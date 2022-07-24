import React from 'react';
import {
  Box,
  Text,
  Image,
  Container,
  Button,
  Link,
  ButtonGroup,
  VStack,
  Divider,
} from '@chakra-ui/react';

function ProjectCard({ id, name, description, image, source, url }) {
  console.log(image);
  return (
    <VStack maxW="240px" textAlign="center" minH={350}>
      <VStack pt={2} minH="260px">
        <Image src={image} borderRadius={10} maxW="180px" />
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="0.9em" fontWeight="light" maxW="200px">
          {description}
        </Text>
      </VStack>
      <ButtonGroup>
        <Button variant="ghost" colorScheme="teal">
          <Link isExternal href={source}>
            Source code
          </Link>
        </Button>
        <Button variant="ghost" colorScheme="teal">
          <Link isExternal href={url}>
            Project page
          </Link>
        </Button>
      </ButtonGroup>
      <Divider />
    </VStack>
  );
}

export default ProjectCard;
