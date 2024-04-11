import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface IRegistrationForm{
    firstname: string,
    lastname: string,
    affiliation: string,
    email: string,
    june06: string[],
    june07: string[]
}

const validationRegistration = z.object({
    firstname: z.string().min(1, { message: 'Firstname is required.'} ),
    lastname: z.string().min(1, { message: 'Surename is required.'} ),
    affiliation: z.string().min(1, { message: 'Affiliation is required.' }),
    email: z.string().min(1, { message: 'Email is required.'}).email()
})

function RegistrationForm(){
    const form = useForm<IRegistrationForm>({
        resolver: zodResolver(validationRegistration),
        defaultValues:{
            firstname: '',
            lastname: '',
            affiliation: '',
            email: '',
            june06: [],
            june07: []
        }
    })
    return form
}

export default RegistrationForm