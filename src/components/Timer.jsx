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
            <h1>Timer component</h1>
            <p>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
        </>
    )
}
export default Timer
