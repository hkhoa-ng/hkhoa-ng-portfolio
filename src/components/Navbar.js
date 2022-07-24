import { ColorModeSwitcher } from '../ColorModeSwitcher';
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { GoThreeBars } from 'react-icons/go';

import React from 'react';

import Home from '../pages/Home';
import Works from '../pages/Works';

export default function Navbar({ pageSelect, activePage }) {
  return (
    <Container
      position="fixed"
      minW="100vw"
      display="flex"
      centerContent
      backdropFilter="blur(5px)"
      backdropBlur="8px"
      bg="gray.800"
      h="3em"
    >
      <Box
        textAlign="center"
        fontSize="xl"
        display="flex"
        justify="center"
        minW={{ base: '100%', md: '300px' }}
        pt={1}
      >
        <Text alignCenter fontWeight="bold" ms={2}>
          Khoa Nguyen
        </Text>
        <Stack
          px={10}
          spacing={8}
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
        >
          <Link
            fontWeight={activePage === 'Home' ? 'bold' : 'light'}
            textDecoration={activePage === 'Home' ? 'underline' : 'none'}
            textUnderlineOffset={6}
            textDecorationColor="#525252"
            textDecorationThickness={4}
            onClick={() => {
              pageSelect('Home');
            }}
          >
            Home
          </Link>
          <Link
            fontWeight={activePage === 'Works' ? 'bold' : 'light'}
            textDecoration={activePage === 'Works' ? 'underline' : 'none'}
            textUnderlineOffset={6}
            textDecorationColor="#525252"
            textDecorationThickness={4}
            onClick={() => {
              pageSelect('Works');
            }}
          >
            Works
          </Link>
          <Link
            fontWeight="light"
            href="https://github.com/hkhoa-ng"
            isExternal
          >
            Source
          </Link>
          <Spacer px="10" />
        </Stack>
        <Spacer />
        <Flex me={2}>
          <ColorModeSwitcher justifySelf="flex-end" />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<GoThreeBars />}
                variant="outline"
              />
              <MenuList>
                <Link
                  onClick={() => {
                    pageSelect('Home');
                  }}
                >
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link>
                  <MenuItem
                    onClick={() => {
                      pageSelect('Works');
                    }}
                  >
                    Works
                  </MenuItem>
                </Link>
                <Link href="https://github.com/hkhoa-ng" isExternal>
                  <MenuItem>View Source</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
