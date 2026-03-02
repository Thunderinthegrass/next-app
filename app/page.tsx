"use client";

import Image from "next/image";
import {useState} from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Братск</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>Прибавить</button>
      <button onClick={() => setCounter(prev => prev - 1)}>Убавить</button>
      {counter}
    </div>
  );
}
