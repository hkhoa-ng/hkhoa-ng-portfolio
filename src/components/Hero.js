import React, { Suspense, useRef, useState } from 'react';
import { Container, Image } from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

function Hero() {
  return (
    <Container pt="50px" h={450} w={{ base: 400, md: 800 }} centerContent>
      {/* <Image
        src="images/projectImages/coffee0001.png"
        h={350}
        objectFit="contain"
      /> */}
      {/* <Canvas
        orthographic
        camera={{
          position: [1, 1.5, 2],
          left: -2,
          right: 2,
          top: 2,
          bottom: -2,
          zoom: 150,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[5, 5, 5]} intensity={3} />
          <Model />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas> */}

      <Spline scene="https://prod.spline.design/TiYfa9oKLVYe2iii/scene.splinecode" />
    </Container>
  );
}

export default Hero;
