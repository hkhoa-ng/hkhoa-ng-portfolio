import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import Works from './pages/Works';

function App() {
  const [page, setPage] = useState('Home');

  const pageSelect = name => {
    setPage(name);
  };

  return (
    <ChakraProvider theme={theme}>
      <Navbar pageSelect={pageSelect} activePage={page} />
      <Hero />
      {page === 'Home' && <Home pageSelect={pageSelect} />}
      {page === 'Works' && <Works />}
    </ChakraProvider>
  );
}

export default App;
