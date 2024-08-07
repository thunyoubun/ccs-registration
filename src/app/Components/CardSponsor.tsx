import Image from "next/image";

function CardSponsor({
  path,
  nameCompany1,
  nameCompany2,
}: {
  path: string;
  nameCompany1: string;
  nameCompany2: string;
}) {
  return (
    <div className="max-w-sm h-fit lg:p-6 bg-white grid justify-items-center gap-4">
      <Image
        src={path}
        alt={nameCompany1}
        width={300}
        height={300}
        className=" object-contain h-40 w-80"
      />
      <div className="text-center">
        <h5 className="text-base font-semibold text-teal-500">
          {nameCompany1}
        </h5>
        <h5 className="text-sm font-light">{nameCompany2}</h5>
      </div>
    </div>
  );
}

export default CardSponsor;
