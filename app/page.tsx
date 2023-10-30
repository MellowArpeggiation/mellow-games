'use client'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import './title.css'

export default function Home() {
  const parallax = useRef<IParallax>(null!)

  return (
    <main>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: '#001100' }} />
        <ParallaxLayer offset={0} speed={1}>
          <div className="intro-header">
            <h1 className="font-title">MELLOW<span>MELLOW</span></h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <h2>Our Games:</h2>
          <ul>
            <li><a href="fung">FUNG</a></li>
          </ul>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}
