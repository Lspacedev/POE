function About() {
  return (
    <div className="About" id="about">
      <div className="introduction">
        <div>
          <h4>Hi, I'm Tshepo Mpogeng.</h4>
        </div>
        <p>
          I am a full stack developer, based in Pretoria, South Africa. Before
          Codetribe, I was a self taught developer. I have enjoyed my journey at
          Codetribe and have learned a lot.
        </p>
        <a href="./src/assets/cv.pdf" download>
          <button>Download CV</button>
        </a>
      </div>
      <div className="photo">
        <img src="/images/pic.jpeg" />
      </div>
    </div>
  );
}

export default About;
