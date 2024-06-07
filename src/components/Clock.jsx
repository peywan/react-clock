// Importera React och hooks
import { useState, useEffect } from "react";

const Clock = ({city, timeZone}) => {
    // Skapa en state variabel för tiden
    const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", timeZone));

    // Använd useEffect för att sätta upp setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", { timeZone } ));
        }, 1000);
        return () => clearInterval(interval)
    }, [timeZone]);

    return (
        <>
            {/*returnera JSX som visar tiden*/}
            <h1>{city}</h1>
            <h5>the current time in {city} is: {time}</h5>
        </>
    )
}
export default Clock
