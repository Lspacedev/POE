function About() {
  return (
    <div className="About" id="about">
      <div className="introduction">
        <div>
          <h1>Hi, I'm Tshepo Mpogeng</h1>
          <h3 style={{ fontWeight: 700, fontStyle: "italic" }}>
            I'm a
            <span
              style={{ borderBottom: "2px solid #a8a53c", fontWeight: 700 }}
            >
              {" "}
              Full Stack{" "}
            </span>
            &
            <span
              style={{ borderBottom: "2px solid #a8a53c", fontWeight: 700 }}
            >
              {" "}
              Mobile App
            </span>{" "}
            Developer
          </h3>
          <p>Based in Pretoria, South Africa.</p>
        </div>
        <p>
          Before Codetribe, I was a self taught developer. I have enjoyed my
          journey at the Codetribe Academy and have learned a lot of new skills
          and technologies.
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
