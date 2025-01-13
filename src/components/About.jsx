function About() {
  return (
    <div className="About" id="about">
      <div className="introduction">
        <div>
          <h4>Hi, I'm Tshepo Mpogeng.</h4>
        </div>
        <p>
          I am a full stack developer, based in Pretoria, South Africa. I'm
          always seeking opportunities to strenghten knowledge of this vast
          world of programming and hopefully play my part in advancing it
          further.
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
