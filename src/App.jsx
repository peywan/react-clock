// Importera React och hooks
import { useState, useEffect } from "react";


const App = () => {
    // Skapa en state variabel för tiden
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // Använd useEffect för att sätta upp setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval)
    }, []);

    return (
        <>
            {/*returnera JSX som visar tiden*/}
            <h1>your locale time zone time by peywan with react</h1>
            <h5>the current time is: {time}</h5>
        </>
    )
}
export default App
