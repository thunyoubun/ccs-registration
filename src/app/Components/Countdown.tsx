import { useCountDown } from "../Functionalitys/useCountDown"

function Countdown({targetDate}:{targetDate:Date}) {
    const [day, hour, minute, second] = useCountDown(targetDate)
    return (
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
    )
}
export default Countdown