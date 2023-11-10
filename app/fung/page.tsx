'use client'

import { FungCanvas } from "@mellowarpeggiation/fung.js"
import './page.css'
import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";

const images = [
    {
        original: "https://i.imgur.com/AkcG6Re.mp4",
        originalTitle: "The FUNG produces power by consuming",
        thumbnail: "/images/thumbs/fu-thumb-1.png",
        thumbnailLabel: "FUNG grows"
    },
    {
        original: "https://i.imgur.com/uituRo7.mp4",
        originalTitle: "Obstacles must be overcome",
        thumbnail: "/images/thumbs/fu-thumb-2.png",
        thumbnailLabel: "You solve"
    },
    {
        original: "https://i.imgur.com/2j2oE0o.mp4",
        originalTitle: "Maintain control, at the risk of armageddon",
        thumbnail: "/images/thumbs/fu-thumb-3.png",
        thumbnailLabel: "Society prepares"
    },
];

const renderVideo = (item: ReactImageGalleryItem) => {
    return <div className="image-gallery-video-container">
        <h3 className="mb-4">{item.originalTitle}</h3>
        <video className="image-gallery-image image-gallery-video" src={item.original} poster={item.thumbnail} autoPlay loop muted playsInline />
    </div>
};

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
        <div className="container font-g7 bg-black bg-opacity-50 m-auto -mt-44 mb-24 text-2xl py-16 px-4 md:px-16 xl:px-32">
            <h2 className="text-center mb-16">UNLEASH THE LIVING PIXELS</h2>
            
            <div className="lg:float-left lg:mr-12 aspect-video w-full lg:w-6/12 m-auto">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/TVEq682MVQ8?si=v38z7mTXsgUku6GS&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>

            <p className="lg:mx-12 mb-12 pt-4 lg:pt-0 2xl:pt-16">Nurture your mesmerizing slime mold and dive into the depths of a radiation-soaked realm, harnessing its energy. Whatever you do, do not stop feeding the FUNG!</p>

            <div className="clear-both" />

            <div className="text-center mt-12">
                <p className="mb-2">ALL RESOURCES HAVE BEEN DEPLETED</p>
                <p className="mb-2">THE SKY IS THICK WITH ATOMIC FIRE</p>
                <p className="mb-2">DWINDLING ELECTRICAL POWER REMAINS</p>
                <p className="mb-2">OUR LAST HOPE LIES WITH THE FUNG</p>
            </div>

            <hr className="my-24" />

            <h2 className="mb-16 text-center">EVERY PIXEL IS ALIVE</h2>

            <ImageGallery items={images} renderItem={renderVideo} showPlayButton={false} />

            <p className="mt-12">
                The FUNG is a slime mold cellular automata. Each pixel supports the life of your mold as it grows and consumes.
                As humanity teeters on the edge of extinction, you must embrace your role as a daring pioneer.
                Cultivate your unique strain of slimy life, an organic marvel capable of converting toxic remnants into vital energy.
                Through careful nurturing and strategic decision-making, watch your slime mold grow, mutate, and adapt, unfurling mesmerizing tendrils of vibrant power.
            </p>

            <div className="flex flex-col lg:flex-row">
                <div className="basis-1/2 xl:basis-5/12 lg:pr-6">
                    <Image className="mt-20 mx-auto" src="/images/ents/red.png" alt="Red smiling at the camera" width={275} height={310} />
                    <table className="border-separate border-spacing-4 text-sm w-full">
                        <tbody>
                            <tr>
                                <td>Genre</td>
                                <td className="text-right text-gray-300">Puzzle / Tower Defense</td>
                            </tr>
                            <tr>
                                <td>Release</td>
                                <td className="text-right text-gray-300">Coming Soon!</td>
                            </tr>
                            <tr>
                                <td>Developer</td>
                                <td className="text-right text-gray-300">MELLOW PTY LTD</td>
                            </tr>
                            <tr>
                                <td>Platform</td>
                                <td className="text-right text-gray-300">Steam</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="basis-1/2 xl:basis-7/12">
                    <h2 className="mt-24 mb-12">KEY FEATURES</h2>

                    <ul className='list-disc list-outside ml-4'>
                        <li>Every pixel simulated, life ebbs and flows on the grid</li>
                        <li>Exquisite visual design, inspired by the old-school stylings of Lemmings (1991)</li>
                        <li>Full level editor included</li>
                        <li>Many more types of cellular automata included, including over 100 totalistic rules based on Conway&apos;s Game of Life</li>
                        <li>A true indie classic</li>
                    </ul>
                </div>
            </div>

            <hr className="my-24" />

            <h2 className="mb-12 text-center">AVAILABLE NOW IN EARLY ACCESS!</h2>

            <iframe className="mx-auto max-w-max" src="https://store.steampowered.com/widget/2467310/" width="646" height="190"></iframe>

            <h3 className="mt-12 text-center">COPYRIGHT 2023 - MELLOW PTY LTD ^</h3>
        </div>
    </main>
}