import {
  Box,
  Link,
  Flex,
  Stack,
  Text,
  Spacer,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { GoThreeBars } from 'react-icons/go';
import ThemeToggleButton from './ThemeToggleButton';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Navbar({ pageSelect, activePage }) {
  const bg = useColorModeValue('#efd5bf', 'gray.900');
  return (
    <Container
      zIndex={10}
      position="fixed"
      minW="100vw"
      display="flex"
      centerContent
      backdropFilter="blur(5px)"
      backdropBlur="8px"
      bg={bg}
      h="3em"
    >
      <Box
        textAlign="center"
        fontSize="xl"
        display="flex"
        justify="center"
        minW={{ base: '100%', md: '650px' }}
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
            textDecorationColor="teal.200"
            textDecorationThickness={4}
            _hover={
              activePage === 'Home'
                ? {
                    textDecoration: 'underline',
                    textUnderlineOffset: 6,
                    textDecorationColor: 'teal.200',
                    textDecorationThickness: 4,
                  }
                : {}
            }
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
            textDecorationColor="teal.200"
            textDecorationThickness={4}
            _hover={
              activePage === 'Works'
                ? {
                    textDecoration: 'underline',
                    textUnderlineOffset: 6,
                    textDecorationColor: 'teal.200',
                    textDecorationThickness: 4,
                  }
                : {}
            }
            onClick={() => {
              pageSelect('Works');
            }}
          >
            Works
          </Link>
          <Link
            fontWeight="light"
            href="https://github.com/hkhoa-ng"
            leftIcon={<FaGithub />}
            isExternal
            _hover={{}}
            h="100%"
            px={3}
            maxH={10}
          >
            Source
          </Link>
        </Stack>
        <Spacer />
        <Flex me={2}>
          <ThemeToggleButton justifySelf="flex-end" />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<GoThreeBars />}
                variant="ghost"
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
