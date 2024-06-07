import {useState, useEffect }from 'react'

const Timer = ({startingTime}) => {
    const [time, setTime] = useState(startingTime)

    //använd useEffect för att räkna ner tiden
    useEffect(() => {
        if (time > 0){
            const interval = setInterval(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000);
        return () => clearInterval(interval)
        }
    }, [time])

    const minutes = Math.floor(time/ 60)
    const seconds = time % 60

    return (

        <>
            <h5>Timer component</h5>
            <h5
            >{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h5>
        </>
    )
}
export default Timer
