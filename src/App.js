import React, { useState } from 'react';
import { ChakraProvider, theme, useColorModeValue } from '@chakra-ui/react';
import Wrapper from './components/Wrapper';

function App() {
  const [page, setPage] = useState('Home');

  const pageSelect = name => {
    setPage(name);
  };

  const bg = useColorModeValue('#F1DFD1', 'gray.700');
  return (
    <ChakraProvider theme={theme}>
      <Wrapper />
    </ChakraProvider>
  );
}

export default App;
