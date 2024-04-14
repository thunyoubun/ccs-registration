import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface IRegistrationForm{
    firstname: string,
    lastname: string,
    affiliation: string,
    email: string,
    june06: {
        morning: boolean,
        afternoon: boolean
    },
    june07: {
        morning: boolean,
        afternoon: boolean
    }
}

const validationRegistration = z.object({
    firstname: z.string().min(1, { message: 'Firstname is required.'} ),
    lastname: z.string().min(1, { message: 'Surename is required.'} ),
    affiliation: z.string().min(1, { message: 'Affiliation is required.' }),
    email: z.string().min(1, { message: 'Email is required.'}).email(),
    june06: z.object({
        morning: z.boolean(),
        afternoon: z.boolean()
    }),
    june07: z.object({
        morning: z.boolean(),
        afternoon: z.boolean()
    })
})

function RegistrationForm(){
    const form = useForm<IRegistrationForm>({
        resolver: zodResolver(validationRegistration),
        defaultValues:{
            firstname: '',
            lastname: '',
            affiliation: '',
            email: '',
            june06: {
                morning: true,
                afternoon: true
            },
            june07: {
                morning: true,
                afternoon: true
            }
        }
    })
    return form
}

export default RegistrationForm