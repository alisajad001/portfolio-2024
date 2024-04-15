import Button from './Button';

export default function About() {
  return (
    <section id="about" className="container mx-auto p-6 my-20">
      <div className="flex items-center gap-3 mb-7">
        <img src="/photo.jpg" alt="Ali Sajad" className="rounded-full" />
        <span>Ali Sajad Ahmadi</span>
      </div>
      <p className="text-3xl text-gray-900 leading-relaxed max-w-2xl">
        I am a Front end web developer based in Kabul. I am specialized in
        making websites with modern technologies like React and Tailwind CSS.
        Some of my hobbies are reading books, playing football and watching
        movies.
      </p>

      <a href="https://drive.google.com/file/d/1OnUzRpPsMYUv0QL8sDymoLDxlSIDCzlV/view?usp=drive_link">
        <Button>See Resume</Button>
      </a>
    </section>
  );
}
