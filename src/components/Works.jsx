const worksData = [
  {
    title: 'Weather Application',
    tools: ['React', 'Tailwind'],
    image: '/images/weather-app.png',
  },
  {
    title: 'Cinema MDB',
    tools: ['React', 'Tailwind'],
    image: '/images/cinema-mdb.png',
  },
  {
    title: 'Simple Todo App',
    tools: ['React', 'Tailwind'],
    image: '/images/todo-app.png',
  },
  {
    title: 'Quote Generator',
    tools: ['JavaScript', 'CSS'],
    image: '/images/quote-generator.png',
  },
  {
    title: 'University Finder',
    tools: ['JavaScript', 'CSS'],
  },
];

export default function Works() {
  return (
    <section id="works" className="container mx-auto p-6 my-32">
      <h2 className="text-3xl md:text-4xl font-medium text-gray-900">Works</h2>
      <p className="text-gray-500 font-extralight mt-2">
        Here are some of my recent projects.
      </p>

      <div className="flex flex-col mt-6">
        {worksData.map((work) => {
          return (
            <>
              <a
                href="#"
                className="border-t text-xl md:text-3xl lg:text-6xl py-5 md:py-10"
              >
                <div className="flex justify-between items-center">
                  <h3>{work.title}</h3>
                  <span className="w-3 h-3 rounded-full bg-gray-950"></span>
                </div>
                <p className="text-sm text-gray-500">{work.tools.join(', ')}</p>
              </a>
            </>
          );
        })}
      </div>
    </section>
  );
}
