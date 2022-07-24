import React from 'react';
import {
  Box,
  Link,
  Button,
  Flex,
  Grid,
  Stack,
  Text,
  Code,
  Spacer,
  Container,
  Heading,
  VStack,
  Image,
} from '@chakra-ui/react';
import Footer from '../components/Footer';

import {
  FaGithub,
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaAngleRight,
} from 'react-icons/fa';
import { BsChevronRight } from 'react-icons/bs';

function Home({ pageSelect }) {
  return (
    <Container pt={10}>
      <Box>
        <Stack>
          <Box
            borderRadius="lg"
            p={3}
            textAlign="center"
            backdropFilter="auto"
            backdropBlur="8px"
            bg="gray.700"
          >
            Hello, I&apos;m a Bachelor student based in Finland!
          </Box>

          <Flex justify="space-between" align="center" pt={5} minW="100%">
            <VStack align="left">
              <Heading>Khoa Nguyen</Heading>
              <Text>Learner, Software Enthusiast</Text>
            </VStack>
            <Image
              border="2px"
              borderColor="teal.200"
              src="images/avatar.jpg"
              borderRadius="full"
              boxSize="100"
            ></Image>
          </Flex>

          {/* About - Bio - Hobbies - Contacts */}
          <Box>
            <Heading
              fontSize="1.2em"
              textDecoration="underline"
              textUnderlineOffset={6}
              textDecorationColor="#525252"
              textDecorationThickness={4}
              marginBottom={4}
            >
              About
            </Heading>
            <Text textAlign="justify">
              Khoa is a Software Engineering student at Tampere University,
              Finland with a passion for building every stuffs he can imagine.
              He is learning ReactJS, and is thriving to work as a full-time
              Software Developer. When not online, Khoa loves his paint brushes
              and guitar. Currently, he is in his third year of the Science and
              Engineering Programme of Tampere University, and he will be
              graduated in the next Summer.
            </Text>
            <Box align="center" mt={3}>
              <Button
                rightIcon={<BsChevronRight />}
                colorScheme="teal"
                onClick={() => {
                  pageSelect('Works');
                }}
              >
                My portfolio
              </Button>
            </Box>
            <Heading
              fontSize="1.2em"
              textDecoration="underline"
              textUnderlineOffset={6}
              textDecorationColor="#525252"
              textDecorationThickness={4}
              mb={4}
              mt={7}
            >
              Bio
            </Heading>
            <Text textAlign="justify">
              Khoa is a Software Engineering student at Tampere University,
              Finland with a passion for building every stuffs he can imagine.
              He is learning ReactJS, and is thriving to work as a full-time
              Software Developer. When not online, Khoa loves his paint brushes
              and guitar. Currently, he is in his third year of the Science and
              Engineering Programme of Tampere University, and he will be
              graduated in the next Summer.
            </Text>
            <Heading
              fontSize="1.2em"
              textDecoration="underline"
              textUnderlineOffset={6}
              textDecorationColor="#525252"
              textDecorationThickness={4}
              mb={4}
              mt={10}
            >
              I love doing
            </Heading>
            <Text textAlign="justify">
              <Link
                isExternal
                href="https://www.instagram.com/khue.still.paints/"
                color="teal.200"
              >
                Painting
              </Link>
              , Crafts, Playing music, and Gaming.
            </Text>
            <Heading
              fontSize="1.2em"
              textDecoration="underline"
              textUnderlineOffset={6}
              textDecorationColor="#525252"
              textDecorationThickness={4}
              mb={4}
              mt={10}
            >
              On the net
            </Heading>
            <VStack align="left">
              <Link isExternal pl={5} href="https://github.com/hkhoa-ng">
                <Button
                  variant="ghost"
                  justify="center"
                  colorScheme="teal"
                  leftIcon={<FaGithub />}
                >
                  @hkhoa-ng
                </Button>
              </Link>
              <Link isExternal pl={5} href="https://www.behance.net/nhkhoa">
                <Button
                  variant="ghost"
                  justify="center"
                  colorScheme="teal"
                  leftIcon={<FaBehance />}
                >
                  @Khoa Nguyen
                </Button>
              </Link>
              <Link
                isExternal
                pl={5}
                href="https://www.instagram.com/khue.still.paints/"
              >
                <Button
                  variant="ghost"
                  justify="center"
                  colorScheme="teal"
                  leftIcon={<FaInstagram />}
                >
                  @khue.still.paints
                </Button>
              </Link>
              <Link
                isExternal
                pl={5}
                href="https://www.linkedin.com/in/khoahng/"
              >
                <Button
                  variant="ghost"
                  justify="center"
                  colorScheme="teal"
                  leftIcon={<FaLinkedin />}
                >
                  @Hoang-Khoa Nguyen
                </Button>
              </Link>
            </VStack>
          </Box>
        </Stack>
        {/* Footer */}
        <Footer />
      </Box>
    </Container>
  );
}

export default Home;
