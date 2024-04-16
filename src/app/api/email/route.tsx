import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest){
    console.log("POST")
    const { email, name, message, subject } = await request.json()
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.MY_EMAIL,
            pass: process.env.MY_EMAIL_PASSWORD
        }
    })

    const mailOption: Mail.Options = {
        from: email,
        to: process.env.MY_EMAIL,
        subject: subject,
        text: message
    }
    
    const sendMailPromise = () =>{
        new Promise<string>((resolve, rejects) => {
            transport.sendMail(mailOption, function (err) {
                if(!err){
                    resolve("Email sended")
                }else{
                    rejects(err.message)
                }
            })
        })
    }

    try{
        await sendMailPromise()
        return NextResponse.json({ message: 'Email send'})
    }catch (err){
        return NextResponse.json({ error: err}, { status: 500 })
    }
}
