import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export interface IContactForm{
    name: string,
    email: string,
    subject: string,
    message: string,
    phone: string
}

const validationContactForm = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    subject: z.string().min(1),
    message: z.string().min(1),
    phone: z.string().min(1).max(10)
})

function ContactForm(){
    const form = useForm<IContactForm>({
        resolver: zodResolver(validationContactForm),
        defaultValues:{
            name: '',
            email: '',
            subject: '',
            message: '',
            phone: ''
        }
    })

    return form
}

export default ContactForm