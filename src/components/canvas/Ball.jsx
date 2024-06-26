/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgURL]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}></icosahedronGeometry>
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
        />{" "}
        <Decal
          position={[0, 0, 0.5]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        ></Decal>
      </mesh>
    </Float>
  );
};
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgURL={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
