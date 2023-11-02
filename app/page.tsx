'use client'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import Header from '@/components/header'
import Nav from '@/components/nav'
import './page.css'
import { FaCarBurst } from 'react-icons/fa6'

export default function Home() {
  const parallax = useRef<IParallax>(null!)

  return (
    <main>
      <Parallax ref={parallax} className='parallax-container' pages={2}>
        {/* Behind BG elements */}
        <ParallaxLayer offset={0.8} speed={-0.4}>
          <div className='scroll-indicator m-auto'></div>
        </ParallaxLayer>


        {/* BG layers */}
        <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: '#050505' }} />


        {/* Ents */}
        {/* <ParallaxLayer offset={1.5} speed={-0.5}>
          <div className='text-4xl text-slate-800'>
            <div></div>
            <FaCarBurst />
          </div>
        </ParallaxLayer> */}


        {/* Content */}
        <ParallaxLayer offset={0.1} speed={1}>
          <Header className="intro-header-full text-center" title='MELLOW' />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.7}>
          <div className='flex items-center justify-center'>
            <h2 className='text-center italic text-violet-800 text-smallcaps'>Inspire Genuine Joy</h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className='sticky-fix hidden lg:block' sticky={{ start: 0.6 } }>
          <Nav simple={true} />
        </ParallaxLayer>

        <ParallaxLayer className='lg:hidden' offset={0.6} speed={0.3}>
          <Nav simple={true} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.9}>
          <div className='container m-auto'>
            <h2>About</h2>
            <h3>MELLOW PTY LTD is games</h3>
            <br />
            <p>Here is a list of links we&apos;re gonna put here in a nicely formatted way <em>soon™</em></p>
            <ul className='list-disc list-inside'>
              <li><a className='animate-underline' href="https://mellowarpeggiation.itch.io/">Itch.io</a></li>
              <li><a className='animate-underline' href="https://store.steampowered.com/search/?developer=MELLOW%20PTY%20LTD">Steam</a></li>
              <li><a className='animate-underline' href="https://discord.gg/KXfe8TQugK">MELLOW Community Discord</a></li>
            </ul>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={1.1}>
          <div className='container m-auto'>
            <h2>Community</h2>
            <h3>Share the love</h3>
            <p></p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={1.2}>
          <div className='container m-auto'>
            <h2>Team</h2>
            <h3></h3>
            <p>MELLOW PTY LTD is <a className='animate-underline' href='http://arpeggi.at/'>George</a></p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}
