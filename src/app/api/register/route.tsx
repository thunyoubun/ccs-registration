import { IAPIRegister } from "@/app/Components/RegistrationForm";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const { id, firstname, lastname, affiliation, email, june06, june07} = await req.json()
    const newData = {
        id: id,
        firstname: firstname,
        lastname: lastname,
        affiliation: affiliation,
        email: email,
        june06_morning: june06.morning,
        june06_afternoon: june06.afternoon,
        june07_morning: june07.morning,
        june07_afternoon: june07.afternoon
    }
    try{
        const result:IAPIRegister[] = await axios.post('https://api-secure-petroleum-climate.eng.cmu.ac.th/registration', newData ).then((res)=> res.data )
        return NextResponse.json({ message: "New register has been add."}, { status: 200 })
    }catch(err){
        return NextResponse.json({ error: err})
    }
    
}

export async function GET(){
    try{
        const result = await axios.get('https://api-secure-petroleum-climate.eng.cmu.ac.th/registration').then((res)=> res.data)
        return NextResponse.json({ data: result })
    }catch(err){
        return NextResponse.json({ error: err })
    }
    
}