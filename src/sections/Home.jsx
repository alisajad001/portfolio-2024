import { useState, useEffect } from 'react';

function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Get the cursor position
  useEffect(() => {
    const updateCursorPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const text = 'Front end developer©';
  const letters = text.split('').map((letter, index) => (
    <span key={index} className="animated-text">
      {letter}
    </span>
  ));

  return (
    <main className="container mx-auto overflow-hidden sm:overflow-visible">
      <div
        className="custom-cursor hidden sm:block"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>

      <div className="flex flex-col justify-center items-center h-screen 2xl:h-[50rem] relative">
        {/* Gradient bubbles */}
        <div className="absolute rounded-full top-20 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500 to-yellow-400 filter blur-3xl opacity-70"></div>
        <div className="absolute rounded-full bottom-0 right-20 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 filter blur-3xl opacity-50"></div>

        <span className="text-[10px] md:text-sm uppercase text-gray-800 font-bold tracking-widest absolute top-32">
          Hello World | 2024
        </span>

        <h1 className="text-4xl z-10 sm:text-5xl md:text-7xl lg:text-9xl uppercase font-black text-gray-950 antialiased leading-8">
          {letters.slice(0, 10)} <br /> {letters.slice(10, 20)}
        </h1>

        <div className="w-5 h-8 sm:w-6 sm:h-10 border border-gray-500 rounded-full absolute bottom-10 flex justify-center pt-2">
          <div className="w-[2px] h-2 bg-gray-800 animate-bounce rounded-full"></div>
        </div>
      </div>
    </main>
  );
}

export default Home;
