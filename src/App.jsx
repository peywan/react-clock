// Importera React och hooks
import { useState, useEffect } from "react";
import Clock from "./components/Clock.jsx"


const App = () => {

    return (
        <>
            {/*returnera JSX som visar tiden*/}
            <h1>your locale time zone time by Peywan with react</h1>
            <Clock city="Stockholm" timeZone="Europe/Stockholm"/>
            <Clock city="Tokyo" timeZone="Asia/Tokyo"/>
            <Clock city="New York" timeZone="America/New_York"/>
        </>
    )
}
export default App
