'use client';

import {useEffect, useState} from "react";
import Link from "next/link";

const DashboardPage = () => {

  const [nameInput, setNameInput] = useState("");
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    console.log(screen.colorDepth)
    console.log(screen.availHeight)
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <div className={`flex flex-col items-center ${theme === "dark" ? 'bg-green-500' : ''}`}>
      <Link href='/'>На главную</Link>
      <h1 className={`text-4xl ${theme === "dark" ? 'bg-green-300' : ''}`}>Привет, {name || 'гость'}!</h1>
      <h2 className="text-2xl">Это панель управления</h2>
      <input className="border-b-cyan-800 border-2 rounded p-3" type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} onBlur={(e) => setName(e.target.value)} />
      <p>Ширина окна: {windowWidth}px</p>

      <button onClick={toggleTheme} className="cursor-pointer px-12 py-4 bg-green-300 rounded-[3px] text-cyan-600">{theme === "dark" ? `Светлая тема` : 'Темная тема'}</button>
    </div>
  )
}

export default DashboardPage;