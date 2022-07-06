import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HeadModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/3Dmodels/head.glb");

  function useMouse() {
    const [mousePosition, setMousePosition] = useState({
      x: null,
      y: null,
    });

    useEffect(() => {
      function handle(e) {
        setMousePosition({
          x: e.pageX,
          y: e.pageY,
        });
      }
      document.addEventListener("mousemove", handle);
      return () => document.removeEventListener("mousemove", handle);
    }, []);

    return mousePosition;
  }

  const { x, y } = useMouse();

  useFrame((state) => {
    group.current.rotation.y = (x / 150) * 0.2 - 0.77;
    group.current.rotation.x = (y / 150) * 0.2 - 0.77;
  });

  /////
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, 0, -10]}
      rotation={[-0.1, 0, 0]}
      scale={0.02}
    >
      <pointLight intensity={2} position={[0, -4, -10]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_lambert3_0.geometry}
        material={materials["lambert3"]}
      />
      <pointLight intensity={10} position={[0, -10, -10]} color="green" />
    </group>
  );
}

useGLTF.preload("/3Dmodels/head.glb");
