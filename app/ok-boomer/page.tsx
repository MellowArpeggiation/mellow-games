import Nav from "@/components/nav"
import './page.css'
import Image from "next/image"

export default function OkBoomer() {
    return <main>
        <div className="bg" />
        <Nav />
        <div className="h-screen flex items-center justify-center flex-col">
            <Image className="w-9/12 max-w-3xl" width={1693} height={857} alt="OK BOOMER" src="/images/logos/ok-boomer-logo.png" />
            <div className="h-24"/>
        </div>
        <div className="container bg-black bg-opacity-50 m-auto -mt-36 mb-12 text-2xl p-12">
            <h2 className="text-center text-smallcaps mb-12">Absurd 2D Mayhem!</h2>

            <p>Shoot toasters from a bathtub at your friends! Or flaming bacon straight from the pan! Or even wear a bad wig, get up close and personal, and demand the manager! YES! thats right, be the Karen you always wanted to be!</p>
            <br />
            <p className="mb-12">Grease your ray phlasers and get ready...</p>

            <div className="aspect-video w-full lg:w-6/12 m-auto mb-12">
                <iframe src="https://player.vimeo.com/video/447658692?h=7c8c5a7c97" style={{ width: '100%', height: '100%' }} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>

            <p className="mb-4">These are strange times indeed, but what if I was to tell you that there was a galactic overlord that abducts a wholesome pig, that he injects with radioactive space jim-jams accelerating his growth to make him the lethal flame thrower enthusiast known as Hogan Bortelis Noguel or simply Hoggnogg. Hoggnogg would later find his alleged father/captor overlord Glandeen the Sow to be committing questionable acts of selecting species to be served as fried food on the kids special menu at his diner...</p>
            <p className="mb-4">Hoggnogg escapes life as a space pirate but not with out Glandeens elite cyborg arachnid Spyd3r on his tail...</p>
            <p className="mb-4">Meanwhile, Drakaan Dictator Strood Von Burgen tests Transphonic Nuclear arms out in an unknown desert unbeknowingly birthing the life of Carktus, an animate cactus who leads an attack on Tunkaal.</p>
            <p className="mb-4">Tunkaal, A planet of mild mannered turtles that have been brutally enslaved and brainwashed by The Elevationeers who were manufactured fanatics bred in incubators on Glandeen&apos;s home planet, the turtles of tunkaal would shelve &quot;cak&quot; harvested from carktus and his fellow cacti in the illusion that they will reach an enlightened path...</p>

            <hr className="my-24" />

            <h2 className="text-center text-smallcaps mb-12">AVAILABLE NOW!</h2>

            <iframe className="mx-auto hidden sm:block" src="https://itch.io/embed/729715?border_width=0&amp;bg_color=000000&amp;fg_color=00ffff&amp;link_color=ff00ff&amp;border_color=333333" width="550" height="165"></iframe>
            <iframe className="mx-auto sm:hidden" src="https://itch.io/embed/729715?border_width=0&amp;bg_color=000000&amp;fg_color=00ffff&amp;link_color=ff00ff&amp;border_color=333333" width="206" height="165"></iframe>
        </div>
    </main>
}