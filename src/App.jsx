import Clock from "react-clock";
import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p className='text-5xl'>Current time:</p>
      <Clock value={value} />
      <h1 className='text-3xl font-bold underline text-center'>Hello world!</h1>
    </div>
  );
}

export default App;
