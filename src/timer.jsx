import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(600);

  const minutes = Math.floor(time / 60); // 9
  const seconds = time - minutes * 60; // 60 sek

  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
}
