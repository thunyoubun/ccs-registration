import ScheduleData from "../Datas/ProgrammeData.json"
import { MdOutlineExpandLess } from "react-icons/md"

function RowData() {

    function ExpandRowData() {
        console.log("Expand")
    }
    return ScheduleData["programme-schedule"].map((schedule) =>
        <tr key={schedule.topic + schedule.time} className=" hover:bg-gray-100" onClick={() => schedule.bgColor? {}: ExpandRowData()}>
            <td className="font-light text-xl text-center p-3">{schedule.time}</td>
            <td>
                <h3 className="font-medium text-xl">{schedule.topic}</h3>
                {schedule.description.map((dest, index) =>
                    <h4 key={dest}>{dest}</h4>
                )}
            </td>
            <td className="flex justify-center content-center">
                <MdOutlineExpandLess />
            </td>
        </tr>
    )
}

function TableProgramme() {

    return (
        <div className="bg-white grid-cols-full rounded shadow-lg overflow-auto">
            <table className="w-full table-auto">
                <thead className="">
                    <tr className="border-b-2">
                        <th className="text-center text-2xl">TIME</th>
                        <th className="text-center text-2xl">AGENDA</th>
                        <th className="text-center text-2xl">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <RowData />
                </tbody>
            </table>
        </div>
    )
}
export default TableProgramme