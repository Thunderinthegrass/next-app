"use client";

import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Братск</h1>
      <Link href='/about'>О нас</Link>
      <Link href='/dashboard'>Панель управления</Link>
      <button onClick={() => setCounter(prev => prev + 1)}>Прибавить</button>
      <button onClick={() => setCounter(prev => prev - 1)}>Убавить</button>
      {counter}
    </div>
  );
}
