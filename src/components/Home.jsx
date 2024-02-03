function Home() {
  return (
    <main>
      {/* Home start */}
      <section id="home">
        <div className="container">
          <h1 className="home_title">
            Front end developer <br /> designer
          </h1>
          <p>
            I'm a passionate front-end developer. Crafting seamless digital
            experiences with innovation and design in mind.
            <br />
          </p>
          <button className="btn-primary">
            <a href="#">See Works</a>
          </button>

          <div className="mouse-animation"></div>
        </div>
      </section>
      {/* Home end */}

      <section id="recent-projects">
        <div className="container">
          <div className="recent-projects-text">
            <h2 className="section-title">Recent Projects</h2>
            <p>Some of my recent projects made with React</p>
          </div>
          <div className="projects-container">
            <div className="project">
              <img
                src="https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg"
                alt="Recent Project"
              />

              <div className="project-info">
                <h3>Weather App React</h3>
                <p>
                  A simple Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Velit esse maiores consequuntur, deleniti odio
                  praesentium!
                </p>

                <a href="#" className="btn-outline">
                  View Live
                </a>
              </div>
            </div>
            <div className="project">
              <img
                src="https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg"
                alt="Recent Project"
              />

              <div className="project-info">
                <h3>Weather App React</h3>
                <p>
                  A simple Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Velit esse maiores consequuntur, deleniti odio
                  praesentium!
                </p>

                <a href="#" className="btn-outline">
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
