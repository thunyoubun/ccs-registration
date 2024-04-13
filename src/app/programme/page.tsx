'use client'
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import TableProgramme from "../Components/TableProgramme"

function ProgrammePage() {
    return (
        <header>
            <div className="h-screen relative">
                <Navbar />
                <div className="mt-24 p-16 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center ">
                    <div className="grid grid-cols-1 gap-7">
                        <h2 className="text-white text-5xl font-semibold text-center">Programme</h2>
                        <TableProgramme />
                    </div>
                </div>
                <Footer />
            </div>
        </header>
    )
}
export default ProgrammePage