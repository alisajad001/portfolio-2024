import Button from './Button';

export default function About() {
  return (
    <section className="container mx-auto p-6 mt-10">
      <p className="text-2xl text-gray-900 leading-relaxed">
        I am a Front end web developer based in Kabul. I am specialized in
        making websites with modern technologies like React and Tailwind CSS.
      </p>

      <Button>Get in touch</Button>
    </section>
  );
}
