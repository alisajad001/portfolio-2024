export default function Home() {
  return (
    <section
      id="home"
      className="container mx-auto p-6 mt-60 md:mt-40 lg:flex items-end justify-between"
    >
      <h1 className="text-5xl font-bold sm:text-7xl md:text-[9rem] xl:text-[12rem] md:mt-20 text-gray-900">
        Web <br /> Developer<span className="text-rose-500">.</span>
      </h1>
      <p className="text-gray-500 font-extralight mt-5 max-w-44">
        specialized in React and Next JS, Front End Development.
      </p>
    </section>
  );
}
