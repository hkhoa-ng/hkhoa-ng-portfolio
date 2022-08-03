import React, { useState } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Navbar from './Navbar';
import Hero from './Hero';
import Home from '../pages/Home';
import Works from '../pages/Works';
import { AnimatedBackgroundColor } from '../animations/animations';
import { motion } from 'framer-motion';

function Wrapper() {
  const [page, setPage] = useState('Home');

  const pageSelect = name => {
    setPage(name);
  };

  const bg = useColorModeValue('#F1DFD1', '#1A202C');
  const bgToChange = bg !== '#F1DFD1' ? '#1A202C' : '#F1DFD1';

  const animations = {
    initial: { backgroundColor: bg },
    animate: { backgroundColor: bgToChange },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3 }}
    >
      <Box>
        <Navbar pageSelect={pageSelect} activePage={page} />

        <Hero bg="teal" />
        {page === 'Home' && <Home pageSelect={pageSelect} />}
        {page === 'Works' && <Works />}
      </Box>
    </motion.div>
  );
}

export default Wrapper;
