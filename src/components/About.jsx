import Button from './Button';

export default function About() {
  return (
    <section id="about" className="container mx-auto p-6 my-20">
      <p className="text-3xl text-gray-900 leading-relaxed max-w-2xl">
        I am a Front end web developer based in Kabul. I am specialized in
        making websites with modern technologies like React and Tailwind CSS.
        Some of my hobbies are reading books, playing football and watching
        movies.
      </p>

      <a href="#contact">
        <Button>Get in touch</Button>
      </a>
    </section>
  );
}
