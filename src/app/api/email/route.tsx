import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const my_email = process.env.MY_EMAIL
const my_pass = process.env.MY_PASSWORD

export async function POST(request: NextRequest) {
  const { email, name, message, subject } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: my_email,
      pass: my_pass,
    },
    tls:{
      rejectUnauthorized: false
    }
  });

  console.log(subject)
  const mailOptions: Mail.Options = {
    from: email,
    to: my_email,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: subject ,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
