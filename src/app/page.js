"use client";

import { useRef, useEffect } from "react";
import { MathUtils } from "three";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, RenderTexture } from "@react-three/drei";
import { MyText } from "@/components/step1";
import gsap from "gsap";

const Cylinder = ({ position }) => {
  const meshRef = useRef();
  const totalLines = 5;
  const rotation = 360 / totalLines;
  var tl = gsap.timeline({
    delay: 0.5,
    repeat: -1,
  });

  useEffect(() => {
    for (let i = 1; i <= totalLines; i++) {
      tl.to(meshRef.current.rotation, {
        x: MathUtils.degToRad(rotation * i),
        duration: 1,
        ease: "power4.inOut",
      });
    }
  }, [tl]);

  return (
    <mesh ref={meshRef} position={position} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.75, 0.75, 4.5, 64]} />
      <meshBasicMaterial toneMapped={false}>
        <RenderTexture attach="map">
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 4.83]}
          />

          <MyText />
        </RenderTexture>
      </meshBasicMaterial>
    </mesh>
  );
};

const Home = () => {
  return (
    <Canvas>
      <Cylinder position={[0, -1.8, 0]} />
      <Cylinder position={[0, -1.8 * 2, 0]} />
      <Cylinder />
      <Cylinder position={[0, 1.8, 0]} />
      <Cylinder position={[0, 1.8 * 2, 0]} />
    </Canvas>
  );
};

export default Home;
