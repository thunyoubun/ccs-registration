'use client'
import { useEffect, useState } from "react"

function DashboardPage(){

    const [ registrat, setRegistrat] = useState()
    useEffect(() => {

    },[])
    return(
        <>
            <div className="relative">
                <div className="w-auto h-auto bg-gradient-to-r from-red-700 to-blue-800 ">
                    <h1 className="text-white text-center font-medium text-5xl py-8">Registrats</h1>
                    <div className="rounded-md bg-gray-400 p-6">
                        <h1 className="">56</h1>
                    </div>
                    <div className="my-6 bg-white">
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="text-center">No.</th>
                                    <th className="text-center">Full Name</th>
                                    <th className="text-center">Affiliation</th>
                                    <th className="row-span-4">Convenience</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th className="row-span-2 text-center">6 June 2024</th>
                                    <th className="row-span-2">7 June 2024</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="rounded-lg ">
                                    <td>1</td>
                                    <td>parinya muangrod</td>
                                    <td>Student</td>
                                    <td>Kai</td>
                                    <td>Kar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage