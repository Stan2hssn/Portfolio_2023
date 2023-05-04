import React, { useMemo, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import vertexShader from "./vertexShader.glsl";
import fragmentShader from "./fragmentShader.glsl";

function Ground({ meshScale, meshRotation, meshPosition, uIntensity }) {
  const mesh = useRef();

  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uIntensity: { value: uIntensity },
    };
  }, [uIntensity]);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.uTime.value = 0.1 * clock.getElapsedTime();
    }
  });
  return (
    <mesh
      antiAliasing={true}
      ref={mesh}
      scale={meshScale}
      rotation={meshRotation}
      position={meshPosition}
    >
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function Blob() {
  const isMobile = useMediaQuery("(max-width: 686px)");

  return (
    <Canvas
      camera={{
        position: [0, 0, 8.0],
      }}
    >
      {!isMobile ? (
        <Ground
          meshScale={[2, 8, 2]}
          meshRotation={[1, Math.PI, Math.PI / 2]}
          meshPosition={[0, -7.5, 0]}
          uIntensity={0.5}
        />
      ) : (
        <Ground
          meshScale={[3, 10, 10]}
          meshRotation={[0, 0, 0]}
          meshPosition={[11, -12, -10]}
          uIntensity={0.5} // Change this value for mobile
        />
      )}
    </Canvas>
  );
}
