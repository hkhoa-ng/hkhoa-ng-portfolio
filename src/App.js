import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  theme,
  Center,
  Box,
  Heading,
  VStack,
} from '@chakra-ui/react';
import Wrapper from './components/Wrapper';
import HashLoader from 'react-spinners/HashLoader';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {loading && (
        <Box h="180vh" w="100vw" zIndex={15} bg="gray.800" position="absolute">
          <Center
            h="100vh"
            w="100vw"
            position="absolute"
            zIndex={15}
            bg="gray.800"
          >
            <HashLoader size={100} color={'#81E6D9'} loading={loading} />
          </Center>
        </Box>
      )}
      <Wrapper />
    </ChakraProvider>
  );
}

export default App;
