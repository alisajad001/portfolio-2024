export default function Works() {
  return (
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
  );
}
