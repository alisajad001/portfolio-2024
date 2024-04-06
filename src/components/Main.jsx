export default function Main() {
  return (
    <main>
      {/* Home */}
      <section className="container mx-auto p-6 mt-20">
        <span className="text-sm block mb-3 text-rose-500">2024</span>
        <h1 className="font-medium text-5xl text-gray-900">
          Web <br /> Developer
        </h1>
        <p className="text-gray-500 font-extralight mt-5">
          specialized in React JS, Front End Development
        </p>
      </section>

      {/* About */}
      <section className="container mx-auto p-6 mt-10">
        <p className="text-2xl text-gray-900 leading-relaxed">
          I am a Front end web developer based in Kabul. I am specialized in
          making websites with modern technologies like React and Tailwind CSS.
        </p>
        <button className="rounded-full flex justify-between bg-gray-950 py-2 px-5 mt-7 text-white">
          Contact me
        </button>
      </section>

      {/* Works */}
      <section className="container mx-auto p-6 my-10">
        <h2 className="text-3xl font-medium text-gray-900">Works</h2>
        <p className="text-gray-500 font-extralight mt-2">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <a href="#" className="flex justify-between items-center">
            <h3>Weather Application</h3>
            <span className="w-3 h-3 rounded-full bg-gray-950"></span>
          </a>
          <a href="#" className="flex justify-between items-center">
            <h3>Cinema MDB</h3>
            <span className="w-3 h-3 rounded-full bg-gray-950"></span>
          </a>
          <a href="#" className="flex justify-between items-center">
            <h3>Simple Todo App</h3>
            <span className="w-3 h-3 rounded-full bg-gray-950"></span>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto p-6 my-10">
        <img src="" alt="" />
        <h2 className="text-3xl font-medium text-gray-900">
          Let’s talk about a project, collaboration or an idea you may have
        </h2>
        <button className="rounded-full flex justify-between bg-gray-950 py-2 px-5 mt-7 text-white">
          Contact me
        </button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto p-6 mt-10 text-[12px] text-gray-600">
        <ul className="flex gap-5">
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <p className="mt-3">
          &copy; 2024 All Rights Reserved, Coded with ❤️️ by Ali Sajad
        </p>
      </footer>
    </main>
  );
}
