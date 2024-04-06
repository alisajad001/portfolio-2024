export default function Footer() {
  return (
    <footer className="container mx-auto px-6 py-8 mt-10 border-t text-sm text-gray-600 md:flex flex-row-reverse justify-between items-center">
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
      <p className="mt-3 md:mt-0">
        &copy; 2024 All Rights Reserved, Coded with ❤️️ by Ali Sajad
      </p>
    </footer>
  );
}
