//good vid: https://www.youtube.com/watch?v=fdtqqyeKRJk

import './App.css';
import React, { Suspense, useState, useRef, useEffect} from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { SoftShadows, MeshWobbleMaterial, 
        Stars, Html, GradientTexture, useCursor, OrbitControls } from '@react-three/drei';
import { useSpring, a, config} from '@react-spring/three';
import { useGesture } from "react-use-gesture"
import { useNavigate } from 'react-router-dom'
import * as THREE from "three"

import CloudModel from "./Cloud.jsx"
let initYSun = 9
let initXSun = 10
// let initXCloud1 = 3.3
// let initXCloud2 = 8.6

function scale(number, inMin, inMax, outMin, outMax) {
  if(number >= inMax) {
    return outMax
  } else if(number <= inMin) {
    return outMin
  } else {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
}

const SpinBox = ({position, args, color, speed}) => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  });
  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
  })

  return (
    <a.mesh
      castShadow
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      position={position} 
      ref={mesh}
    >
      <boxBufferGeometry attach='geometry' args={args}/>
      <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={0.6}/> 
    </a.mesh>
  );
}

let n = 0;
let count = 0;
const SunMoon = ({setTextCol, 
                  setPlaneOpacity, 
                  setStarRadius,
                  setCloudColor,
                  setGrab,
                  setGrabbing,
}) => {
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  const [sunSpring, setSunSpring] = useSpring(() => ({ scale: [1, 1, 1], position: [initXSun, initYSun, -1], rotation: [0, 0, 0], config: { mass: 0.5, friction: 10, tension: 100 } }))
  const [moonSpring, setMoonSpring] = useSpring(() => ({ scale: [1, 1, 1], position: [-initXSun, -initYSun, 0], rotation: [0, 0, 0], config: { mass: 0.5, friction: 10, tension: 100 } }))
  const [moonHover, setMoonHover] = useState(false)
  const [lastSunPos, setLastSunPos] = useState([0, 0])
  const [lastMoonPos, setLastMoonPos] = useState([0, 0])
  const [sunOpacity, setSunOpacity] = useState(1)
  const [moonOpacity, setMoonOpacity] = useState(0)
  const bind = useGesture({
    onDrag: ({ offset: [x, y], tap }) => {  
      if(tap) {
        
      } else {
        if(moonHover) {
          setSunSpring({ position: [-(x / aspect) + lastSunPos[0] + initXSun, (y / aspect) + initYSun + lastSunPos[1], -1]})
          setMoonSpring({ position: [(x / aspect) - lastSunPos[0] - initXSun, (-y / aspect) - initYSun - lastSunPos[1], 0]})
          setLastMoonPos([-x*2 / aspect + lastSunPos[0], y*2 / aspect + lastSunPos[1]])
          setSunOpacity(scale((y / aspect) + initYSun + lastSunPos[1], -2, 0, 0, 1))
          setMoonOpacity(scale((-y / aspect) - initYSun - lastSunPos[1], -2, 0, 0, 1))
          setPlaneOpacity(scale((y / aspect) + initYSun + lastSunPos[1], -3, 7, 0, 1))
          let c = scale((y / aspect) + initYSun + lastSunPos[1], -3, 7, 0.07, 0.93)
          setCloudColor(new THREE.Color(c, c, c))
        } else {
          setSunSpring({ position: [(x / aspect) + lastMoonPos[0] + initXSun, (-y / aspect) + initYSun + lastMoonPos[1], -1]})
          setMoonSpring({ position: [-(x / aspect) - lastMoonPos[0] - initXSun, (y / aspect) - initYSun - lastMoonPos[1], 0]})
          setLastSunPos([x*2 / aspect + lastMoonPos[0], -y*2 / aspect + lastMoonPos[1]])
          setSunOpacity(scale((-y / aspect) + initYSun + lastMoonPos[1], -2, 0, 0, 1))
          setMoonOpacity(scale((y / aspect) - initYSun - lastMoonPos[1], -2, 0, 0, 1))
          setPlaneOpacity(scale((-y / aspect) + initYSun + lastMoonPos[1], -3, 7, 0, 1))
          let c = scale((-y / aspect) + initYSun + lastMoonPos[1], -3, 7, 0.07, 0.93)
          setCloudColor(new THREE.Color(c, c, c))
        }
      }
      if(sunOpacity < 0.8) {
        setTextCol({color: '#dddddd', fill:"#f7e190"})
        setStarRadius(100)
      } else {
        setTextCol({color: '#202020', fill:"#800000"})
        setStarRadius(1000)
      }
    },
  }, {filterTaps: true})

  const [sunExpand, setSunExpand] = useState(false)
  const [moonExpand, setMoonExpand] = useState(false)
  const props = useSpring({
    scaleSun: sunExpand ? [1.2, 1.2, 1.2] : [1, 1, 1],
    scaleMoon: moonExpand ? [1.2, 1.2, 1.2] : [1, 1, 1],
    config: config.wobbly
  })
  const sunMesh = useRef(null);
  const moonMesh = useRef(null);
  useFrame(() => {
    if(!sunExpand && sunOpacity) {
      n += 0.03
      sunMesh.current.scale.x = sunMesh.current.scale.y = sunMesh.current.scale.z = 1 + Math.sin(n)*0.05
    }
    if(!moonExpand && moonOpacity) {
      n += 0.03
      moonMesh.current.scale.x = moonMesh.current.scale.y = moonMesh.current.scale.z = 1 + Math.sin(n)*0.05
    }
  });
  return (
    <a.group {...bind()}>
      <a.mesh 
        {...sunSpring} 
        onPointerOver={() => {
          setMoonHover(false)
          setSunExpand(true)
          setGrab(true)
          
        }}
        onPointerOut={() => {
          setSunExpand(false)
          setGrab(false)
        }}
        onPointerDown={() => setGrabbing(true)}
        onPointerUp={() => setGrabbing(false)}
        scale={props.scaleSun}
        ref={sunMesh}
      >
        <sphereBufferGeometry attach='geometry' args={[1.1, 30]}/>
        <meshStandardMaterial attach='material' color='#800000' opacity={sunOpacity} transparent/>
      </a.mesh>
      <a.mesh 
        {...moonSpring}
        onPointerOver={() => {
          setMoonHover(true)
          setMoonExpand(true)
          setGrab(true)
        }}
        onPointerOut={() => {
          setMoonExpand(false)
          setGrab(false)
        }}
        onPointerDown={() => setGrabbing(true)}
        onPointerUp={() => setGrabbing(false)}
        scale={props.scaleMoon}
        ref={moonMesh}
      >
        <sphereBufferGeometry attach='geometry' args={[1, 30]}/>
        <meshStandardMaterial attach='material' color='#f7e190' opacity={moonOpacity} transparent/>
      </a.mesh>
    </a.group>
  )
}

function Scene({setTextCol}) {
  const [planeOpacity, setPlaneOpacity] = useState(1)
  const [starRadius, setStarRadius] = useState(1000)
  const [cloudColor, setCloudColor] = useState(new THREE.Color(0.93, 0.93, 0.93))
  const [hovered, setHovered] = useState(false)
  const [grab, setGrab] = useState(false)
  const [grabbing, setGrabbing] = useState(false)

  const navigate = useNavigate()

  useCursor(hovered, 'pointer', 'auto')
  useCursor(grab, 'grab', 'auto')
  useCursor(grabbing, 'grabbing', 'auto')

  const [xCloud1, setXCloud1] = useState(0)
  const [xCloud2, setXCloud2] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 850) {
        initXSun = 0;
        //currently some issues when resizing browser. for now just refresh.
        setXCloud1(-5.6)
        setXCloud2(0)
      } else {
        initXSun = 10
        setXCloud1(2.2)
        setXCloud2(8.6)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <Canvas 
      shadows
      camera={{position: [0, 2, 32], fov: 40, rotation: [0, 0, 0]}}
      style={{background: "#1c1c1c", position: 'fixed'}}    
    >
      <ambientLight intensity={0.3}/>
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      <pointLight position={[-10, 0, -5]} intensity={0.5}/>
      <pointLight position={[0, -10, 15]} intensity={0.5}/>

      <mesh 
        receiveShadow
        rotation={[-Math.PI/2, 0, 0]} 
        position={[0, -3, 0]}
      >
        <planeBufferGeometry attach='geometry' args={[100, 100]}/>
        <shadowMaterial transparent opacity={0.3}/>
      </mesh>

      <mesh
        position={[0, -25, -500]}
      >
        <planeGeometry attach="geometry" args={[25000, 2000]}/>
        <meshBasicMaterial attach="material" transparent opacity={planeOpacity}>
          {/* <GradientTexture
            stops={[0, 0.35, 0.8]} colors={["#121212", '#3333ff', '#eeeeff']} size={100}
          /> */}
          {/* <GradientTexture
            stops={[0, 0.35, 0.8]} colors={["#121212", '#800000', '#777777']} size={100}
          /> */}
          <GradientTexture
            stops={[0]} colors={["#c0c0c0"]} size={100}
          />
        </meshBasicMaterial>
      </mesh>
      
      <SunMoon 
        setPlaneOpacity={setPlaneOpacity} 
        setTextCol={setTextCol} 
        setStarRadius={setStarRadius}
        setCloudColor={setCloudColor}
        setGrab={setGrab}
        setGrabbing={setGrabbing}
      />
      
      {/* <SpinBox position={[0, 1, 10]} args={[3, 2, 1]} color={'lightblue'} speed={2}/> */}
      {/* <SpinBox position={[0, 0, 5]} color={'#FFD8B1'} speed={6}/>
      <SpinBox position={[4, 0, 2]} color={'#FF775E'} speed={6}/>
      <SpinBox position={[-4, 0, 2]} color={'#FF9A8A'} speed={6}/> */}
      {/* <Box>
        <meshStandardMaterial attach='material'/> 
      </Box> */}
      <SoftShadows 
        size={30}
        samples={10}
        depth={0}
      />
      <Suspense fallback={null}>
        <CloudModel 
          position={[xCloud1, 7, 7]} 
          scale={0.1} 
          cloudColor={cloudColor} 
          // onPointerOver={() => setHovered(true)}
          // onPointerOut={() =>setHovered(false)}
          // onClick={() => navigate('/resume')}
        />
        <CloudModel 
          position={[xCloud2, 7.2, 5]} 
          scale={0.06} 
          cloudColor={cloudColor}
          // onPointerOver={() => setHovered(true)}
          // onPointerOut={() =>setHovered(false)}
        />
      </Suspense>
      {/* <gridHelper /> */}
      {/* <OrbitControls /> */}
      {/* <Stars radius={starRadius} depth={0} count={1000} factor={10} saturation={1} fade speed={1}/> */}
    </Canvas>
  );
}

export default Scene;
