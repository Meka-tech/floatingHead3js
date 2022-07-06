import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import HeadModel from "./Models/HeadModel";
import { OrbitControls } from "@react-three/drei/core";

function App() {
  return (
    <div className="App">
      <Canvas style={{ backgroundColor: "black", height: "100vh" }}>
        <spotLight position={[0, 0, 5]} intensity={1} color="green" />

        <ambientLight intensity={1} position={[0, 0, 0]} />
        {/* <spotLight intensity={1} position={[0, 8, 0]} /> */}
        <Suspense fallback={null}>
          {" "}
          <HeadModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
