'use client'
import Navbar from "../Components/Navbar"
import RegistrationForm, { IRegistrationForm } from "../Components/RegistrationForm"
import TextInput from "../Components/TextInput"

function RegistrationPage() {
    const { handleSubmit, register, formState: { isSubmitting } } = RegistrationForm()

    const onSubmit = (data: IRegistrationForm) => {
        console.table(data)
    }
    return (
        <header>
            <div className="h-screen relative">
                <Navbar />
                <div className="mt-24 p-6 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center">
                    <div className="p-4 bg-white rounded-br-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                {TextInput(register, "First name", "firstname", "text")}
                            </div>
                            <div className="sm:col-span-3">
                                {TextInput(register, "Last name", "lastname", "text")}
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputaffiliation" className="form-label">Affiliation</label>
                                <input {...register("affiliation")} placeholder="Enter your affiliation." id="inputaffiliation" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputemail" className="form-label">Email</label>
                                <input type="email" className="form-control" {...register("email")} placeholder="Enter your email" id="inputemail" />
                            </div>
                            <div className="grid ">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        morning
                                    </label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="checkbox" value="" />
                                    <label className="form-check-label">
                                        afternoon
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flext" />
                                    <label className="form-check-label" htmlFor="">
                                        morning
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" />
                                    <label className="form-check-label" htmlFor="">
                                        afternoon
                                    </label>
                                </div>
                            </div>

                            <button type="submit">Register</button>
                        </form>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default RegistrationPage