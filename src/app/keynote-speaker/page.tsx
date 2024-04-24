'use client'
import Image from "next/image"
import Navbar from "../Components/Navbar"
import ToTop from "../Components/ToTop"
import CardSlider from "../Components/CardSlider"
import PeopleCard from "../Components/PeopleCard"
import Footer from "../Components/Footer"
import { useEffect, useRef, useState } from "react"
import { motion } from 'framer-motion'

function KeynoteSpeakerPage() {
    const [activateSlide, setActivateSlide] = useState<boolean>(false)
    const dragable = useRef<HTMLDivElement>({} as HTMLDivElement)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setActivateSlide(false)
            } else {
                setActivateSlide(true)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <header>
            <div className="relative">
                <Navbar path={"/"} />
                <ToTop />
                <div className="mt-28 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center flex-col">
                    <h2 className="text-white text-5xl p-8 text-center font-semibold">Keynote Speaker</h2>
                    <div className="grid gap-4 lg:grid-cols-3 lg:gap-4 lg:mx-2 lg:my-6">
                        {activateSlide ?
                        <motion.div ref={dragable}
                        drag="x"
                        dragConstraints={{ right: 0, left: 0}}
                        >
                        </motion.div>
                        :
                            <><PeopleCard name={"a"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"b"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"c"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"d"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"e"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"f"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"g"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"h"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"i"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"j"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"k"} srcImage={"/images/profile/natthanan.jpg"} />
                                <PeopleCard name={"l"} srcImage={"/images/profile/natthanan.jpg"} />
                            </>
                        }

                    </div>
                </div>
                <Footer />
            </div>
        </header>
    )
}

export default KeynoteSpeakerPage