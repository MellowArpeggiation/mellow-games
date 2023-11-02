import Nav from "@/components/nav"
import './page.css'
import Image from "next/image"

export default function DriftKing() {
    return <main>
        <Nav />
        <div className="h-screen flex items-center justify-center flex-col">
            <Image className="w-9/12 max-w-6xl" width={1591} height={482} alt="Drift King" src="/images/logos/drift-king-logo.png" />
            <div className="h-24"/>
        </div>
        <div className="container font-onuava bg-black bg-opacity-50 m-auto -mt-36 mb-12 text-2xl p-8">
            <h2 className="text-center text-smallcaps mb-12">Thom Yorke&apos;s Pro Drifter</h2>

            <h3 className="text-center mb-12">Racing has evolved.</h3>

            <p className="mb-4">Congress has taken notice of the popularity of Drift Racing, and has mandated the installation of the Unreal Boost Energy Recovery System on all road cars, because it would be &quot;fully sick, brah&quot;.</p>

            <p className="mb-4">But the official racing scene still reigns supreme</p>

            <p className="mb-4">Enter an open-world arcade racer, tuned to give the fastest and most exhilarating driving experience possible</p>

            <hr className="my-24" />

            <h2 className="text-center text-smallcaps mb-12">MULTIPLAYER ALPHA AVAILABLE NOW!</h2>

            <iframe className="mx-auto hidden sm:block" src="https://itch.io/embed/880447?border_width=4&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=ed0054&amp;border_color=642e65" width="558" height="173"></iframe>
            <iframe className="mx-auto sm:hidden" src="https://itch.io/embed/880447?border_width=4&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=ed0054&amp;border_color=642e65" width="214" height="173"></iframe>
        </div>
    </main>
}