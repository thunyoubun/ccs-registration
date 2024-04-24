'use client'
import Navbar from "../Components/Navbar"
import ToTop from "../Components/ToTop"
import PeopleCard from "../Components/PeopleCard"
import Footer from "../Components/Footer"
import { useEffect, useState } from "react"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

const authData = [
    {
        id: "a",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "b",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "c",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "d",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "e",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "f",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "g",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "h",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "i",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "j",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "k",
        src: "/images/profile/natthanan.jpg"
    },
    {
        id: "l",
        src: "/images/profile/natthanan.jpg"
    },
]

function KeynoteSpeakerPage() {
    const [activateSlide, setActivateSlide] = useState<boolean>(false)
    const [animation, setAnimation] = useState<string>("animate-fade-left");
    const [activeImage, setActiveImage] = useState<number>(0)

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

    const NextKeynote = () => {
        activeImage === authData.length - 1 ? setActiveImage(0) : setActiveImage(activeImage + 1);
        setTimeout(() => {
            setAnimation("animate-fade-right");
        }, 100);
        setAnimation("");
    }

    const PrevKeynote = () => {
        activeImage === 0 ? setActiveImage(authData.length - 1) : setActiveImage(activeImage - 1);

        setTimeout(() => {
            setAnimation("animate-fade-left");
        }, 100);
        setAnimation("");
    }
    return (
        <header>
            <div className="relative">
                <Navbar path={"/"} />
                <ToTop />
                <div className="mt-28 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center flex-col">
                    <h2 className="text-white text-5xl p-8 text-center font-semibold">Keynote Speaker</h2>
                    <div className="grid gap-4 my-4 lg:grid-cols-3 lg:gap-4 lg:mx-2 lg:my-6">
                        {activateSlide ?
                            <div className="flex gap-1">
                                <button onClick={() => PrevKeynote()}>
                                    <IoIosArrowDropleftCircle size={50} />
                                </button>
                                <div className="flex gap-4">
                                    {authData
                                        .slice(activeImage, activeImage + 1)
                                        .map((auth) => (
                                            <div key={auth.id} className={` ${animation}`}>
                                                <PeopleCard
                                                    key={auth.id}
                                                    name={auth.id}
                                                    srcImage={auth.src}
                                                ></PeopleCard>
                                            </div>
                                        ))}
                                </div>
                                <button onClick={() => NextKeynote()}>
                                    <IoIosArrowDroprightCircle size={50} />
                                </button>
                            </div>
                            :
                            <>
                                {authData.map((data) =>
                                    <PeopleCard key={data.id} name={data.id} srcImage={data.src} />
                                )}
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