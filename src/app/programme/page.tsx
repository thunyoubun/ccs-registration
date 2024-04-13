import Navbar from "../Components/Navbar"

function ProgrammePage() {
    return (
        <header>
            <div className="h-screen relative">
                <Navbar />
                <div className="mt-24 p-16 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center ">
                    <div className="grid grid-cols-1 gap-7">
                        <h2 className="text-white text-5xl font-semibold text-center">Programme</h2>
                        <div className="bg-white grid-cols-full rounded">
                            <table className="table-auto">
                                <thead>
                                    <tr>
                                        <th>TIME</th>
                                        <th>GRAND BALLROOM</th>
                                        <th>SPEAKERs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>08.30 - 09.00</td>
                                        <td>Registration and welcome refreshment</td>
                                    </tr>
                                    <tr>
                                        <td>09.00 - 09.30</td>
                                        <td>Opening ceremony</td>
                                    </tr>
                                    <tr>
                                        <td>09.30 - 09.45</td>
                                        <td>Carbon Neutrality Research and Innovation</td>
                                    </tr>
                                    <tr>
                                        <td>09.45 - 10.15</td>
                                        <td>Science, Research, and Innovation Toward Net-Zero via CCUS</td>
                                    </tr>
                                    <tr>
                                        <td>10.15 - 10.45</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}
export default ProgrammePage