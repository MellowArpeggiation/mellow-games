import Nav from "@/components/nav"
import './page.css'
import Image from "next/image"

export default function OkBoomer() {
    return <main>
        <Nav />
        <div className="h-screen flex items-center justify-center flex-col">
            <Image className="w-1/2" width={1693} height={857} alt="OK BOOMER" src="/images/logos/ok-boomer-logo.png" />
            <div className="h-24"/>
        </div>
        <div className="container bg-black bg-opacity-50 m-auto -mt-36 mb-12 text-2xl p-12">
            <h2 className="text-center text-smallcaps mb-12">Absurd 2D Mayhem!</h2>

            <p>Shoot toasters from a bathtub at your friends! Or flaming bacon straight from the pan! Or even wear a bad wig, get up close and personal, and demand the manager! YES! thats right, be the Karen you always wanted to be!</p>
            <br />
            <p>Grease your ray phlasers and get ready...</p>
        </div>
    </main>
}