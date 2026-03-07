"use client";

import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex justify-center h-full">
      <h1>Братск</h1>
      <div className="flex flex-col bg-green-300">
        <Link href='/about'>О нас</Link>
        <Link href='/dashboard'>Панель управления</Link>
        <Link href='/products'>Продукты</Link>
        <Link href='/posts'>Посты</Link>
      </div>
      <button onClick={() => setCounter(prev => prev + 1)}>Прибавить</button>
      <button onClick={() => setCounter(prev => prev - 1)}>Убавить</button>
      {counter}
    </div>
  );
}
