'use client'
import Navbar from "../Components/Navbar"
import CardSponsor from "../Components/CardSponsor"
import RegistrationInput from "../Components/RegistrationInput"
import RegistrationMap from "../Components/RegistrationMap"
import { useCountDown } from "../Functionalitys/useCountDown"

function RegistrationPage() {
    const [day, hour, minute, second] = useCountDown(new Date("2024-06-06"))

    return (
        <header>
            <div className="relative">
                <Navbar />
                <div className="mt-24 p-8 lg:p-16 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center">
                    <div className="">
                        <div className="p-4 bg-rose-700 rounded-t-lg text-white text-center gap-3 lg:flex lg:justify-center">
                            <div className="text-3xl font-medium content-center md:text-5xl">TIME TO END</div>
                            <div className="flex text-center gap-3 justify-center">
                                <div>
                                    <h1 className="font-semibold text-4xl lg:text-6xl">{day}</h1>
                                    <h4 className="">day(s)</h4>
                                </div>
                                <h1 className="font-semibold text-4xl lg:text-6xl">:</h1>
                                <div>
                                    <h1 className="font-semibold text-4xl lg:text-6xl">{hour}</h1>
                                    <h4>hour(s)</h4>
                                </div>
                                <h1 className="font-semibold text-4xl lg:text-6xl">:</h1>
                                <div>
                                    <h1 className="font-semibold text-4xl lg:text-6xl">{minute}</h1>
                                    <h4>minute(s)</h4>
                                </div>
                                <h1 className="font-semibold text-4xl lg:text-6xl">:</h1>
                                <div>
                                    <h1 className="font-semibold text-4xl lg:text-6xl">{second}</h1>
                                    <h4>second(s)</h4>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:flex">
                            {/* Google Map */}
                            <RegistrationMap />
                            {/* Registration Form */}
                            <RegistrationInput />
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className="p-2">
                    <div>
                        <label htmlFor="" className="font-semibold">Our sponsor:</label>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-4">
                            <CardSponsor path={"/images/sponsors/1200px-Seal_of_the_Minister_of_Foreign_Affair_of_Thailand.svg.png"} nameCompany1={"Ministry of Foreign Affairs Kingdom of Thailand"} nameCompany2={""} />
                            <CardSponsor path={"/images/sponsors/Seal_of_the_Ministry_of_Energy_of_Thailand.svg.png"} nameCompany1={"Department of Mineral Fuels MINISTRY OF ENERGY"} nameCompany2={""} />
                            <CardSponsor path={"/images/sponsors/สอทnew.png"} nameCompany1={"Royal Thai Embassy, Copenhagen, Denmark"} nameCompany2={"สถานเอกอัครราชทูต ณ โคเปนเฮเกน"} />
                            <CardSponsor path={"/images/sponsors/images.png"} nameCompany1={"Royal Thai Embassy, Oslo"} nameCompany2={"สถานเอกอัครราชทูต ณ กรุงออสโล"} />
                            <CardSponsor path={"/images/sponsors/images (1).png"} nameCompany1={"กระทรวงอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม"} nameCompany2={"Ministry of Higher Education, Science, Research and Innovation"} />
                            <CardSponsor path={"/images/sponsors/TSRI_Logo_300x363.png"} nameCompany1={"สำนักงานคณะกรรมการส่งเสริมวิทยาศาสตร์ วิจัยและนวัตกรรม"} nameCompany2={"Thailand Science Research and Innovation"} />
                            <CardSponsor path={"/images/sponsors/PMU-b-logo.png"} nameCompany1={"หน่วยบริหารและจัดการทุนด้านการพัฒนากำลังคนและทุนด้านการพัฒนาสถาบันอุดมศึกษาการวิจัยและการสร้างนวัตกรรม"} nameCompany2={""} />
                            <CardSponsor path={"/images/sponsors/pmcu-logo.png"} nameCompany1={"หน่วยบริหารและจัดการทุนด้านการเพิ่มความสามารถในการแข่งขันของประเทศ"} nameCompany2={""} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default RegistrationPage