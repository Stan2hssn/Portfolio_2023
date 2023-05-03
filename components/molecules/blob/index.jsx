import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

function Ground(props) {
  const mesh = useRef();
  return (
    <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function Blob() {
  return (
    <div className="absolute x-0 y-0 w-screen h-full -z-10 ">
      <Canvas
        className="bg-red-500 opacity-50"
        shadows
        camera={{
          position: [0, 0, 8],
        }}
      >
        <Ground />
      </Canvas>
    </div>
  );
}
