'use client'

import { FungCanvas } from "@mellowarpeggiation/fung.js"
import './page.css'
import { useEffect, useState } from "react";
import Nav from "@/components/nav";

export default function Fung() {
    let [width, setWidth] = useState(1920);
    let [portrait, setPortrait] = useState(false);

    useEffect(() => {
        setPortrait(window.outerHeight > window.outerWidth);
        setWidth(window.outerWidth);

        const onResize = () => {
            setTimeout(function () {
                setPortrait(window.outerHeight > window.outerWidth);
                setWidth(window.outerWidth);
            }, 100);
        };

        window.addEventListener('resize', onResize);
        
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);
    
    return <main>
        <div className="animate-fade-out -z-10 w-full h-screen fixed bg-black" />
        <FungCanvas
            className="fung-sim fixed -z-20"
            width={width}
            portrait={portrait}
            agentCount={50000}
            fromColor="magenta"
            toColor="cyan"
        />
        <Nav />
        <div className="h-screen flex items-center justify-center flex-col">
            <h1 className="font-fung fung-title">FUNG</h1>
            <div className="h-24"/>
        </div>
        <div className="container font-g7 bg-black bg-opacity-50 m-auto -mt-36 mb-12 text-2xl py-12 px-2 md:px-12">
            <h2 className="text-center">UNLEASH THE LIVING PIXELS</h2>
            <p className="lg:mx-12 my-12">Nurture your mesmerizing slime mold and dive into the depths of a radiation-soaked realm, harnessing its energy. Whatever you do, do not stop feeding the FUNG!</p>
            
            <div className="aspect-video w-full lg:w-6/12 m-auto">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/TVEq682MVQ8?si=v38z7mTXsgUku6GS&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>

            <div className="text-center mt-12">
                <p className="mb-2">ALL RESOURCES HAVE BEEN DEPLETED</p>
                <p className="mb-2">THE SKY IS THICK WITH ATOMIC FIRE</p>
                <p className="mb-2">DWINDLING ELECTRICAL POWER REMAINS</p>
                <p className="mb-2">OUR LAST HOPE LIES WITH THE FUNG</p>
            </div>

            <hr className="my-24" />

            <h2 className="mb-12 text-center">EVERY PIXEL IS ALIVE</h2>

            <p>
                The FUNG is a slime mold cellular automata. Each pixel supports the life of your mold as it grows and consumes.
                As humanity teeters on the edge of extinction, you must embrace your role as a daring pioneer.
                Cultivate your unique strain of slimy life, an organic marvel capable of converting toxic remnants into vital energy.
                Through careful nurturing and strategic decision-making, watch your slime mold grow, mutate, and adapt, unfurling mesmerizing tendrils of vibrant power.
            </p>

            <h2 className="mt-24 mb-12 text-center">KEY FEATURES</h2>

            <ul className='list-disc list-outside'>
                <li>Every pixel simulated, life ebbs and flows on the grid</li>
                <li>Exquisite visual design, inspired by the old-school stylings of Lemmings (1991)</li>
                <li>Full level editor included</li>
                <li>Many more types of cellular automata included, including over 100 totalistic rules based on Conway&apos;s Game of Life</li>
                <li>A true indie classic</li>
            </ul>

            <hr className="my-24" />

            <h2 className="mb-12 text-center">AVAILABLE NOW IN EARLY ACCESS!</h2>

            <iframe className="mx-auto" src="https://store.steampowered.com/widget/2467310/" width="646" height="190"></iframe>

            <h3 className="mt-12 text-center">COPYRIGHT 2023 - MELLOW PTY LTD ^</h3>
        </div>
    </main>
}