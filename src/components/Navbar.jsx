export default function Navbar() {
  return (
    <header className="flex items-center container mx-auto px-6 py-10 justify-between">
      <a href="#" className="hidden sm:block">
        Ali Sajad.
      </a>
      <nav>
        <ul className="flex flex-col sm:flex-row gap-6 font-extralight">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
