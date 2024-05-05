import TableProgramme from "./TableProgramme";

function ProgrammeBody() {
  return (
    <div className="mt-20 bg-gradient-to-r from-teal-500 to-blue-950 flex justify-center ">
      <div className="w-full">
        <h2 className="text-white text-5xl font-semibold text-center p-6 my-4 lg:mt-10">
          Agenda
        </h2>
        <TableProgramme />
      </div>
    </div>
  );
}

export default ProgrammeBody;
