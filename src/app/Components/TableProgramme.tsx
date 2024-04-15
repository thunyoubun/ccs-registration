import React from "react"
import ScheduleData from "../Datas/ProgrammeData.json"
import { MdOutlineExpandLess } from "react-icons/md"

function RowData() {

    function ExpandRowData(id:string) {
        const element = document.getElementById(id)
        if(element){
            element.hidden = !element.hidden
        }
    }
    return ScheduleData["programme-schedule"].map((schedule, index) =>
        <React.Fragment key={schedule.time + index}>
            <tr key={schedule.topic + index} className={`${schedule.bgColor ? "bg-rose-700 shadow rounded-lg" : " hover:bg-gray-100"} shadow rounded-lg`} onClick={() => schedule.bgColor ? {} : ExpandRowData(schedule.time)}>
                <td className="font-light text-lg text-center p-2">{schedule.time}</td>
                <td>
                    <h3 className="font-medium text-lg ">{schedule.topic}</h3>
                </td>
                <td>{schedule.group != "None"? schedule.group: ''}</td>
                <td className="flex justify-center content-center">
                    <button className="content-center" onClick={() => ExpandRowData(schedule.time)}>
                        <MdOutlineExpandLess />
                    </button>
                </td>
            </tr>
            {schedule.description.length > 0 || schedule.speakers.length > 0 || schedule.panelists.length > 0 || schedule.facilitators.length ?
                <tr className="bg-gray-200 rounded-b-lg`" key={schedule.time} id={schedule.time}>
                    <td></td>
                    <td className="grid gap-2">
                        {schedule.description.length > 0 ? 
                            <div>
                                {schedule.description.map((data)=>
                                    <h2 key={data}>{data}</h2>
                                )}
                            </div>
                        : ''}
                        {schedule.speakers.length > 0 ?
                            <div>
                                <h2 className="font-semibold">Speaker:</h2>
                                {schedule.speakers.map((data) =>
                                    <h2 key={data}>{data}</h2>
                                )}
                            </div>
                            : ''}
                        {schedule.panelists.length > 0 ?
                            <div>
                                <h2 className="font-semibold">Panelists:</h2>
                                {schedule.panelists.map((data) =>
                                    <h2 key={data}>{data}</h2>
                                )}
                            </div> :
                            ''
                        }{schedule.facilitators.length > 0 ?
                            <div>
                                <h2 className="font-semibold">Facilitator:</h2>
                                {schedule.facilitators.map((data) =>
                                    <h2 key={data}>{data}</h2>
                                )}
                            </div>
                            : ''}
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                : <></>}
        </React.Fragment>
    )
}

function TableProgramme() {

    return (
        <div className="bg-white grid-cols-1 rounded shadow-lg overflow-auto">
            <table className="table-auto mx-2 my-2">
                <thead className="">
                    <tr className="border-b-2">
                        <th className="text-center font-medium text-2xl">TIME</th>
                        <th className="text-center font-medium text-2xl">AGENDA</th>
                        <th className="text-center font-medium text-2xl">GROUP</th>
                        <th className="text-center font-medium text-2xl">ACTION</th>
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