const links = [
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Works',
    url: '#works',
  },
  {
    name: 'Contact',
    url: '#contact',
  },
];

export default function Navbar() {
  return (
    <header className="flex items-center container mx-auto px-6 py-10 justify-between">
      <a href="#home" className="hidden sm:block">
        Ali Sajad.
      </a>
      <nav>
        <ul className="flex flex-col sm:flex-row gap-6 font-extralight">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a
                  href={`${link.url}`}
                  className="hover:text-rose-500 transition"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
