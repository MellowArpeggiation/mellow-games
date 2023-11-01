import Nav from "@/components/nav"
import './page.css'

export default function DriftKing() {
    return <main>
        <Nav />
        <div className="h-screen flex items-center justify-center flex-col">
            <img className="w-1/2" src="/images/logos/drift-king-logo.png" />
            <div className="h-24"/>
        </div>
        <div className="container bg-black bg-opacity-50 m-auto -mt-36 mb-12 text-2xl p-12">
            <h2 className="font-onuava text-center text-smallcaps">Thom Yorke's Pro Drifter</h2>
        </div>
    </main>
}