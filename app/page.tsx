'use client'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ReactNode, useRef } from 'react'
import Header from '@/components/header'
import Nav from '@/components/nav'
import './page.css'
import Image from 'next/image'
import {
  PiPlayDuotone,
  PiDogDuotone,
  PiPersonSimpleRunDuotone,
  PiEngineDuotone,
  PiCarDuotone,
  PiHandHeartDuotone,
  PiPuzzlePieceDuotone,
  PiSunHorizonDuotone,
  PiHeartDuotone,
} from 'react-icons/pi'

const Icon = ({
  className,
  children,
}: {
  className?: string,
  children: ReactNode,
}) =>
  <div className={`z-50 text-4xl w-1/12 absolute ${className}`}>{children}</div>

const Button = ({
  href,
  className,
  children,
}: {
  href: string,
  className?: string,
  children: ReactNode,
}) =>
  <a href={href} className={`truncate bg-cyan-500 hover:bg-cyan-400 text-white hover:text-white rounded py-3 px-6 ${className}`}>{children}</a>

const icons = [
  {
    element: <PiPlayDuotone />,
    className: "text-cyan-800 relative ml-12 lg:mx-auto lg:-translate-x-72",
    offset: 0.61,
    speed: 0.1,
  },
  {
    element: <PiDogDuotone />,
    className: "text-fuchsia-800 right-2 md:right-1/4",
    offset: 0.7,
    speed: -0.2,
  },
  {
    element: <PiPersonSimpleRunDuotone />,
    className: "text-cyan-800 right-1/3",
    offset: 0.8,
    speed: -0.1,
  },
  {
    element: <PiEngineDuotone />,
    className: "text-fuchsia-800 left-1/3",
    offset: 0.75,
    speed: -0.3,
  },
  {
    element: <PiCarDuotone />,
    className: "text-cyan-800 relative mx-auto -translate-x-16",
    offset: 0.72,
    speed: -0.15,
  },
  {
    element: <PiHandHeartDuotone />,
    className: "text-fuchsia-800 hidden lg:block lg:left-16 xl:left-96",
    offset: 0.55,
    speed: -0.05,
  },
  {
    element: <PiPuzzlePieceDuotone />,
    className: "text-cyan-800 hidden sm:block right-6 lg:right-16 xl:right-96",
    offset: 0.5,
    speed: -0.12,
  },
  {
    element: <PiSunHorizonDuotone />,
    className: "text-fuchsia-800 left-4 lg:left-10 xl:left-48",
    offset: 0.8,
    speed: -0.35,
  },
  {
    element: <PiHeartDuotone />,
    className: "text-cyan-800 right-6 lg:right-10 xl:right-48",
    offset: 0.85,
    speed: -0.38,
  },
]

export default function Home() {
  const parallax = useRef<IParallax>(null!)

  return (
    <main>
      <Parallax ref={parallax} className='parallax-container' pages={4}>
        {/* Behind BG elements */}
        <ParallaxLayer offset={0.8} speed={-0.4}>
          <div className='scroll-indicator m-auto'></div>
        </ParallaxLayer>

        {icons.map((icon, i) => <ParallaxLayer key={i} offset={icon.offset} speed={icon.speed}><Icon className={icon.className}>{icon.element}</Icon></ParallaxLayer>)}


        {/* BG layers */}
        <ParallaxLayer offset={1} speed={0.25} style={{ backgroundImage: 'linear-gradient(rgb(64, 0, 64) 0%, #000a 70%, black), url(/images/screenshots/dk-ss-2.jpg)', backgroundSize: "cover", backgroundPositionX: "left" }} />
        <ParallaxLayer offset={2} speed={0.23} style={{ backgroundImage: 'linear-gradient(black 0%, #0008 70%, black), url(/images/screenshots/dk-ss-3.jpg)', backgroundSize: "cover", backgroundPositionX: "center" }} />
        <ParallaxLayer offset={3} speed={0.26} style={{ backgroundImage: 'linear-gradient(black 0%, #000a 70%, rgba(0, 64, 64)), url(/images/screenshots/team-ss.jpg)', backgroundSize: "cover", backgroundPositionX: "center" }} />



        {/* Content */}
        <ParallaxLayer offset={0.1} speed={1}>
          <Header className="intro-header-full text-center" title='MELLOW' />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.5}>
          <div className='flex items-center justify-center'>
            <h2 className='text-center italic text-violet-500 text-smallcaps'>Inspire Genuine Joy</h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className='sticky-fix hidden lg:block' sticky={{ start: 0.6, end: 4 } }>
          <Nav simple={true} />
        </ParallaxLayer>

        <ParallaxLayer className='lg:hidden' offset={0.6} speed={0.3}>
          <Nav simple={true} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.9}>
          <div className='container m-auto h-screen flex flex-col justify-center'>
            <div className="m-4 md:m-12">
              <Image className='w-full md:w-1/2 md:float-right md:ml-12 rounded-3xl mb-8' src="/images/screenshots/dk-ss-1.jpg" width={1774} height={998} alt="Screenshot of Drift King - The Compensatore Piccolo in the Unreality" />
              <h2 className='text-smallcaps text-6xl sm:text-8xl'>About</h2>
              <br />
              <h3>MELLOW PTY LTD is dedicated to the art of video games</h3>
              <br />
              <p>We&apos;re here to generate delight, produce beauty, and fight against an ever darkening landscape of profitable anti-patterns. You won&apos;t be seeing any microtransactions here, you aren&apos;t our product. The ticket price is the only charge to play.</p>
              <br />
              <p>Check out the links currently at the top of your screen to view our current and finished projects!</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1.1}>
          <div className='container m-auto h-screen flex flex-col justify-center'>
            <div className="m-4 md:m-12">
              <Image className='w-full md:w-1/2 md:float-left md:mr-12 rounded-3xl mb-8' src="/images/screenshots/community-ss.jpg" width={1940} height={898} alt="Screenshot of Discord community - Showing in development images, on the left are 3 images of Drift King, on the right are 2 images of FUNG and a code snippet" />
              <h2 className='text-smallcaps text-6xl xl:text-8xl'>Community</h2>
              <br />
              <h3>Join with us, share the love</h3>
              <br />
              <p>We&apos;re very active on our Discord, and if you have even a cursory interest in games development (or maybe you&apos;re studying to become a developer yourself!), then don&apos;t hesitate to join us!</p>
              <br />
              <br />
              <Button href="https://discord.gg/KXfe8TQugK">Join the MELLOW Discord Community</Button>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.2}>
          <div className='container m-auto h-screen flex flex-col justify-center'>
            <div className="m-4 md:m-12">
              <a href='http://arpeggi.at/'><Image className='w-96 rounded-full mx-auto lg:float-right opacity-75 hover:opacity-100 transition-opacity md:ml-12' src="/images/ents/team-george.jpg" width={500} height={500} alt="5 year old George having a sook" /></a>
              <h2 className='text-smallcaps text-6xl sm:text-8xl'>Team</h2>
              <br />
              <h3>MELLOW PTY LTD is <a className='animate-underline' href='http://arpeggi.at/'>George</a></h3>
              <br />
              <p>George is an experienced developer with the taste for the minimal and heartwarming. He has over 15 years of experience in games development. He possesses an eye for details, while still being aware of the big picture. He totally didn&apos;t write this blurb about himself, that would be the height of vanity. <em>(hah)</em></p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}
