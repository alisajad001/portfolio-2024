export default function Button({ children }) {
  return (
    <button className="transition-all duration-500 transform hover:bg-rose-500 rounded-full flex justify-between bg-gray-950 py-2 px-5 mt-7 text-white relative overflow-hidden">
      {children}
    </button>
  );
}
