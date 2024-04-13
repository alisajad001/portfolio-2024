export default function Button({ children }) {
  // Function to handle mouse over event
  const handleMouseOver = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      className="transform rounded-full flex justify-between bg-gray-950 py-2 px-5 mt-7 text-white relative overflow-hidden btn-primary"
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
