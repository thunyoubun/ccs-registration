import Image from "next/image"

function CardSponsor({ path, nameCompany1, nameCompany2}:{ path:string, nameCompany1:string, nameCompany2:string}){
    return(
        <div className="max-w-sm lg:p-6 bg-white grid justify-items-center">
            <Image src={path} alt={nameCompany1} width={128} height={128}/>
            <div className="text-center">
                <h5 className="text-base font-medium">{nameCompany1}</h5>
                <h5 className="text-sm font-light">{nameCompany2}</h5>
            </div>
        </div>
    )
}

export default CardSponsor