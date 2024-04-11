'use client'
import { useState } from "react"
import Navbar from "../Components/Navbar"
import RegistrationForm, { IRegistrationForm } from "../Components/RegistrationForm"
import TextInput from "../Components/TextInput"

function RegistrationPage() {
    const { handleSubmit, register, formState: { isSubmitting } } = RegistrationForm()
    const [secondDate, setSecondDate] = useState<boolean>(false)

    const onSubmit = (data: IRegistrationForm) => {
        console.table(data)
    }
    return (
        <header>
            <div className="h-screen relative">
                <Navbar />
                <div className="mt-24 p-16 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center">
                    <div className=" bg-white rounded-bl-lg rounded-tl-lg">
                        {/* Google Map */}
                        <div className="p-1 bg-rose-700 grid grid-cols-1 gap-3 sm:grid-cols-6 rounded-tl-lg">
                            <button
                                onClick={() => setSecondDate(false)}
                                className={`${!secondDate ? "bg-white text-rose-700 rounded shadow-lg" : "text-black"} p-3 rounded-lg flex justify-center text-center col-span-3`}
                                disabled={!secondDate}
                            >
                                <h1 className="text-xl font-semibold">6 JUNE</h1>
                            </button>
                            <button
                                onClick={() => setSecondDate(true)}
                                className={`${secondDate ? "bg-white text-rose-700 rounded shadow-lg" : "text-black"} p-3 rounded-lg flex justify-center text-center col-span-3`}
                                disabled={secondDate}
                            >
                                <h1 className="text-xl font-semibold">7 JUNE</h1>
                            </button>
                        </div>
                        <div className="mt-6 ml-8 mr-8 mb-4">
                            {!secondDate ?
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15485.547317181567!2d100.6167955!3d13.9950625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de1168e62e2101%3A0x9da7a57659ec3960!2z4LmC4LiZ4LmC4Lin4LmA4LiX4LilIOC4geC4o-C4uOC4h-C5gOC4l-C4niDguJ_guLTguKfguYDguIjguK3guKPguYzguJ7guLLguKPguYzguIQg4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1712834003533!5m2!1sth!2sth" width="600" height="450" loading="lazy" ></iframe>
                                :
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15107.094760451677!2d98.9546953!3d18.8082363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a68355ea91f%3A0xd393197b614f8352!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1712834180863!5m2!1sth!2sth" width="600" height="450" loading="lazy" ></iframe>
                            }
                        </div>
                        <div className="text-center">
                            <h3 className="">
                                {!secondDate ?
                                    "6 June at Novotel Bangkok Future Park Rangsit, Bangkok, Thailand"
                                    :
                                    "7 June at Chiang Mai University, Chiang Mai, Thailand"
                                }
                            </h3>
                        </div>
                    </div>
                    {/* Registration Form */}
                    <div className="p-8 bg-white rounded-br-lg rounded-tr-lg">
                        <h1 className="font-medium text-5xl text-center">Registration</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                {TextInput(register, "First name", "firstname", "text")}
                            </div>
                            <div className="sm:col-span-3">
                                {TextInput(register, "Last name", "lastname", "text")}
                            </div>
                            <div className="col-span-full">
                                {TextInput(register, "Affiliation", "affiliation", "text")}
                            </div>
                            <div className="col-span-full">
                                {TextInput(register, "Email", "email", "email")}
                            </div>
                            <div className="col-span-full">
                                <h3 className="font-medium text-xl">Convenience:</h3>
                                <div className="flex justify-center gap-5">
                                    <div className="col-span-2">
                                        <label htmlFor="" className="font-medium">6 June 2024:</label>
                                    </div>
                                    <div className="flex items-center mb-4 col-span-2">
                                        <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="ms-2" htmlFor="flexCheckDefault">
                                            morning
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" />
                                        <label className="ms-2">
                                            afternoon
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-5">
                                    <div className="col-span-2">
                                        <label htmlFor="" className="font-medium">7 June 2024:</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" id="flext" />
                                        <label className="ms-2" htmlFor="">
                                            morning
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" />
                                        <label className="ms-2" htmlFor="">
                                            afternoon
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="p-2 bg-rose-700 col-span-full text-white font-semibold">Register</button>
                        </form>
                    </div>
                </div>
                {/* Footer */}
                <div className="">
                    <div>
                        <label htmlFor="" className="font-semibold">Our sponsor:</label>
                    </div>
                    <div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default RegistrationPage