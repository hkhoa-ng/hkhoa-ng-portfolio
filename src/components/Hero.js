import React, { Suspense, useEffect, useState } from 'react';
import { Container, Center } from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import HashLoader from 'react-spinners/HashLoader';

function Hero() {
  return (
    <Container pt="50px" h={450} w={{ base: 400, md: 800 }} centerContent>
      {/* <Spline scene="https://prod.spline.design/TiYfa9oKLVYe2iii/scene.splinecode" /> */}
      <Spline scene="https://prod.spline.design/MsXq-eyxX9SE9U7B/scene.splinecode" />
    </Container>
  );
}

export default Hero;
