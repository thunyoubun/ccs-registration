import Navbar from "../Components/Navbar"
import ToTop from "../Components/ToTop"

function KeynoteSpeakerPage(){
    return(
        <header>
            <div className="relative">
                <Navbar path={"/"} />
                <ToTop />
                <div className="mt-28 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center">
                    <h2 className="text-white text-5xl p-8 text-center font-semibold">Keynote Speaker</h2>
                </div>
            </div>
        </header>
    )
}

export default KeynoteSpeakerPage