'use client'

import { FungCanvas } from "@mellowarpeggiation/fung.js"
import './title.css'
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
        />
        <Nav />
        <div className="h-screen flex items-center justify-center flex-col">
            <h1 className="font-fung fung-title">FUNG</h1>
            {/* <h2 className="font-g7 bg-opacity-50 bg-black p-10">UNLEASH THE LIVING PIXELS</h2> */}
            <div className="h-24"/>
        </div>
        <div className="container bg-black bg-opacity-50 m-auto -mt-36 mb-12 text-2xl font-g7 p-12">
            <h2 className="font-g7 text-center">UNLEASH THE LIVING PIXELS</h2>
            <p className="m-12">Nurture your mesmerizing slime mold and dive into the depths of a radiation-soaked realm, harnessing its energy. Whatever you do, do not stop feeding the FUNG!</p>
            
            <div className="aspect-video w-6/12 m-auto">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/TVEq682MVQ8?si=v38z7mTXsgUku6GS&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>
        </div>
    </main>
}