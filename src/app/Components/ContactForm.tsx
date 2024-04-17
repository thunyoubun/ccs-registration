import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export interface IContactForm{
    name: string,
    email: string,
    subject: string,
    message: string
}

const validationContactForm = z.object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string()
})

function ContactForm(){
    const form = useForm<IContactForm>({
        resolver: zodResolver(validationContactForm),
        defaultValues:{
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    })

    return form
}

export default ContactForm