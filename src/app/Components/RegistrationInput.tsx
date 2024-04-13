import RegistrationForm, { IRegistrationForm } from "./RegistrationForm"
import TextInput from "./TextInput"

function RegistrationInput() {
    const { handleSubmit, register, formState: { isSubmitting } } = RegistrationForm()

    const onSubmit = (data: IRegistrationForm) => {
        console.table(data)
    }
    return (
        <div className="p-8 bg-white rounded-br-lg ">
            <h1 className="font-medium text-5xl text-center">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    {TextInput(register, "First name", "firstname", "text")}
                </div>
                <div className="sm:col-span-3">
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
                            <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="ms-2" htmlFor="flexCheckDefault">
                                morning
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" />
                            <label className="ms-2">
                                afternoon
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5">
                        <div className="col-span-2">
                            <label htmlFor="" className="font-medium">7 June 2024:</label>
                        </div>
                        <div className="form-check">
                            <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" id="flext" />
                            <label className="ms-2" htmlFor="">
                                morning
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900" type="checkbox" value="" />
                            <label className="ms-2" htmlFor="">
                                afternoon
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="p-2 bg-rose-700 col-span-full text-white font-semibold">Register</button>
            </form>
        </div>
    )
}

export default RegistrationInput