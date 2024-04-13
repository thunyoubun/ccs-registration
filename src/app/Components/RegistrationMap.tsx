import { useState } from "react"

function RegistrationMap() {
    const [secondDate, setSecondDate] = useState<boolean>(false)
    return (
        <div className=" bg-gray-300 rounded-bl-lg ">
            <div className="p-1 bg-rose-700 grid grid-cols-1 gap-3 sm:grid-cols-6">
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15485.547317181567!2d100.6167955!3d13.9950625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de1168e62e2101%3A0x9da7a57659ec3960!2z4LmC4LiZ4LmC4Lin4LmA4LiX4LilIOC4geC4o-C4uOC4h-C5gOC4l-C4niDguJ_guLTguKfguYDguIjguK3guKPguYzguJ7guLLguKPguYzguIQg4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1712834003533!5m2!1sth!2sth" width="500" height="350" loading="lazy" ></iframe>
                    :
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15107.094760451677!2d98.9546953!3d18.8082363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a68355ea91f%3A0xd393197b614f8352!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1712834180863!5m2!1sth!2sth" width="500" height="350" loading="lazy" ></iframe>
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
    )
}

export default RegistrationMap