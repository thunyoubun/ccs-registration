import RegistrationForm, { IRegistrationForm } from "./RegistrationForm"
import TextInput from "./TextInput"

function RegistrationInput() {
    const { handleSubmit, register, formState: { isSubmitting } } = RegistrationForm()

    const onSubmit = (data: IRegistrationForm) => {
        console.table(data)
    }
    return (
        <div className="p-2 bg-white w-full md:order-none md:rounded-b-lg lg:p-8">
            <h1 className="font-medium text-3xl lg:text-5xl text-center">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-6">
                <div className="col-span-full lg:col-span-3">
                    {TextInput(register, "First name", "firstname", "text")}
                </div>
                <div className="col-span-full lg:col-span-3">
                    {TextInput(register, "Last name", "lastname", "text")}
                </div>
                <div className="col-span-full">
                    {TextInput(register, "Affiliation", "affiliation", "text")}
                </div>
                <div className="col-span-full">
                    {TextInput(register, "Email", "email", "email")}
                </div>
                <div className="col-span-full">
                    <h3 className="font-medium text-xl">Convenience:</h3>
                    <div className="flex justify-center gap-5">
                        <div className="col-span-2">
                            <label htmlFor="" className="font-medium">6 June 2024:</label>
                        </div>
                        <div className="flex items-center mb-4 col-span-2">
                            <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value=""{...register("june06.morning")} id="flexCheckDefault" />
                            <label className="ms-2" htmlFor="flexCheckDefault">
                                morning
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" {...register("june06.afternoon")} />
                            <label className="ms-2">
                                afternoon
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5">
                        <div className="col-span-2">
                            <label htmlFor="" className="font-medium">7 June 2024:</label>
                        </div>
                        <div className="flex items-center mb-4 col-span-2">
                            <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" id="flexCheckDefault" {...register("june07.morning")} />
                            <label className="ms-2" htmlFor="flexCheckDefault">
                                morning
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" {...register("june07.afternoon")} />
                            <label className="ms-2">
                                afternoon
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="p-2 bg-rose-700 col-span-full text-white font-semibold" disabled={isSubmitting? true: false }>Register</button>
            </form>
        </div>
    )
}

export default RegistrationInput