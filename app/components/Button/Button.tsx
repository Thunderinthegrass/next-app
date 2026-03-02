"use client";

const Button = () => {
  return (
    <button className="bg-amber-800 px-5 py-2 rounded text-cyan-50 cursor-pointer transition duration-300 hover:bg-blue-500" onClick={() => alert('Привет')}>
      Жмяк
    </button>
  );
};

export default Button;