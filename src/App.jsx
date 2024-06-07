// Importera React och hooks
import { useState, useEffect } from "react";
import Clock from "./components/Clock.jsx"
import Timer from "./components/Timer.jsx"


const App = () => {

    return (
        <>
            {/*returnera JSX som visar tiden*/}
            <h1>your locale time zone time by Peywan with react</h1>
            <Clock city="Stockholm" timeZone="Europe/Stockholm"/>
            <Clock city="Tokyo" timeZone="Asia/Tokyo"/>
            <Clock city="New York" timeZone="America/New_York"/>
            <Timer startingTime={10} /> {/* 50 minutes */}
            <Timer startingTime={600} /> {/* 10 minutes */}
        </>
    )
}
export default App
