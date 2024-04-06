import Button from './Button';

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 my-10 lg:flex items-end justify-between"
    >
      <h2 className="text-3xl sm:text-5xl md:text-7xl max-w-3xl font-medium text-gray-900">
        Let's talk about your stunning Idea and make it real.
      </h2>
      <a
        href="https://linkedin.com/in/alisajad001"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Get in touch</Button>
      </a>
    </section>
  );
}
