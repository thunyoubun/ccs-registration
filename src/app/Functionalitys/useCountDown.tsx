import { useEffect, useState } from "react"

function useCountDown(targetdate: Date){
    const countdownDate = new Date(targetdate).getTime()
    const [countdownState, setCountdownState] = useState(
        countdownDate - new Date().getTime()
    )
    useEffect(()=>{
        const interval = setInterval(() => {
            setCountdownState( countdownDate - new Date().getTime() )
        }, 1000)

        return () => clearInterval(interval)
    }, [countdownDate])
    return getReturnValue(countdownState)
}

const getReturnValue = (countdown: number) => {
    const days = Math.floor(countdown /(1000*60*60*24))
    const hours = Math.floor( (countdown%(1000*60*60*24)) / (1000*60*60))
    const minuts = Math.floor( (countdown%(1000*60*60)) / (1000*60))
    const seconds = Math.floor( (countdown%(1000*60)) / 1000)
    return [ days, hours, minuts, seconds ]
}
export { useCountDown }