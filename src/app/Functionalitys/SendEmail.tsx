import { IContactForm } from "../Components/ContactForm";
import axios from 'axios'

function sendEmail(data: IContactForm){
    const apiEndpoint = '/api/email'

    axios.post(apiEndpoint, data).then((res) => {
        res.data
    }).catch((err)=>{
        console.log(err.message)
    })
}

export {
    sendEmail
}