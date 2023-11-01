import Nav from "@/components/nav"
import './page.css'
import Image from "next/image"

export default function DriftKing() {
    return <main>
        <Nav />
        <div className="h-screen flex items-center justify-center flex-col">
            <Image className="w-1/2" width={1591} height={482} alt="Drift King" src="/images/logos/drift-king-logo.png" />
            <div className="h-24"/>
        </div>
        <div className="container bg-black bg-opacity-50 m-auto -mt-36 mb-12 text-2xl p-12">
            <h2 className="font-onuava text-center text-smallcaps">Thom Yorke&apos;s Pro Drifter</h2>
        </div>
    </main>
}