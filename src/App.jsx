import React, {useEffect} from 'react';

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import Overlay from './Overlay'
import Scene from './Scene'

export default function App() {
  // This spring controls the background and the svg fill (text color)
  const [fill, set] = useSpring({color: '#202020', fill: '#800000'}, [])
  return (
    <a.main>
      <Scene className="canvas" setTextCol={set}/>
      <Overlay className="overlay" fill={fill}/>
    </a.main>
  )
}