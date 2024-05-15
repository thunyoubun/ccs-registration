import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface IAPIRegister {
  id: number;
  firstname: string;
  lastname: string;
  affiliation: string;
  email: string;
  roles_duties: string;
  june06_morning: boolean;
  june06_afternoon: boolean;
  june07_morning: boolean;
  june07_afternoon: boolean;
  Create_at: string;
}

export interface IRegistrationForm {
  firstname: string;
  lastname: string;
  affiliation: string;
  email: string;
  roles: string;
  june06: {
    morning: boolean;
    afternoon: boolean;
  };
  june07: {
    morning: boolean;
    afternoon: boolean;
  };
}

const validationRegistration = z.object({
  firstname: z.string().min(1, { message: "Firstname is required." }),
  lastname: z.string().min(1, { message: "Surename is required." }),
  affiliation: z.string().min(1, { message: "Affiliation is required." }),
  email: z.string().min(1, { message: "Email is required." }).email(),
  roles: z.string().min(1, { message: "Roles is required." }),
  june06: z.object({
    morning: z.boolean(),
    afternoon: z.boolean(),
  }),
  june07: z.object({
    morning: z.boolean(),
    afternoon: z.boolean(),
  }),
});

function RegistrationForm() {
  const form = useForm<IRegistrationForm>({
    resolver: zodResolver(validationRegistration),
    defaultValues: {
      firstname: "",
      lastname: "",
      affiliation: "",
      email: "",
      roles: "",
      june06: {
        morning: true,
        afternoon: true,
      },
      june07: {
        morning: false,
        afternoon: false,
      },
    },
  });
  return form;
}

export default RegistrationForm;
