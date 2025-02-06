function About() {
  return (
    <div className="About" id="about">
      <div className="introduction">
        <div>
          <h1>Hi,I'm Tshepo Mpogeng</h1>
          <h2>Full Stack and Mobile App developer</h2>
          <p>Based in Pretoria, South Africa.</p>
        </div>
        <p>
          Before Codetribe, I was a self taught developer. I have enjoyed my
          journey at Codetribe and have learned a lot.
        </p>
        <a href="./src/assets/cv.pdf" download>
          <button>Download CV</button>
        </a>
      </div>
      <div className="photo">
        <img src="/images/profile.png" />
      </div>
    </div>
  );
}

export default About;
