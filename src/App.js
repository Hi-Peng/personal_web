import './App.css';
import Navbar from './Components/Navbar/Navbar'

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from "@react-three/drei";
import React from 'react';

const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none')
  },2000)
})

function Torus() {
  const torusRotation = React.useRef()
  useFrame(() => {
    torusRotation.current.rotation.x += 0.001
  })
  return(
    <mesh ref={torusRotation} scale={[1,1,1]}>
      <torusGeometry args={[10,3,16,100]} attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink" wireframe={true} />
    </mesh>
  )
}

function Torus2() {
  const torus2Rotation = React.useRef()
  useFrame(() => {
    torus2Rotation.current.rotation.x += 0.001
    torus2Rotation.current.rotation.y += 0.001
  })
  return(
    <mesh ref={torus2Rotation} scale={[0.5,0.5,0.5]}>
      <octahedronGeometry args={[10, 0]} attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink" wireframe={true} />
    </mesh>
  )
}

function starAnimate() {
  return(
    <Stars></Stars>
  )
}

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}>
        <ambientLight intensity={0.5}></ambientLight>
        <spotLight position={[10, 10, 15]} angle={0.3}></spotLight>
        <Stars fade={20}></Stars>
        <Torus></Torus>
        <Torus2></Torus2>
      </Canvas>
    </div>
  );
}

export default App;
