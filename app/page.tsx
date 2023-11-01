'use client'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import Header from '@/components/header'
import Nav from '@/components/nav'
import './title.css'

export default function Home() {
  const parallax = useRef<IParallax>(null!)

  return (
    <main>
      <Parallax ref={parallax} pages={2}>
        {/* Behind BG elements */}
        <ParallaxLayer offset={0.8} speed={-0.5}>
          <div className='scroll-indicator m-auto'></div>
        </ParallaxLayer>


        {/* BG layers */}
        <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: '#050505' }} />


        {/* Ents */}
        <ParallaxLayer offset={0.8} speed={-0.5}>

        </ParallaxLayer>


        {/* Content */}
        <ParallaxLayer offset={0.1} speed={1}>
          <Header title='MELLOW' />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.7}>
          <div className='flex items-center justify-center'>
            <h2 className='text-center italic text-violet-800'>Inspire Genuine Joy</h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.65 }}>
          <Nav simple={true} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.9}>
          <div className='container m-auto'>
            <h2>About</h2>
            <p>MELLOW PTY LTD is games</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}
