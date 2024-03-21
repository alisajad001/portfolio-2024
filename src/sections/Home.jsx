import { useState, useEffect } from 'react';

function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
    <main className="container mx-auto flex justify-center items-center h-screen">
      <div
        className="custom-cursor"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl uppercase font-black text-gray-950 antialiased">
        {letters.slice(0, 10)} <br /> {letters.slice(10, 20)}
      </h1>
    </main>
  );
}

export default Home;
