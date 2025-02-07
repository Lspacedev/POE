import { FaLocationDot } from "react-icons/fa6";

function About() {
  return (
    <div className="About" id="about">
      <div className="introduction">
        <div>
          {/* style={{ color: "#a8a53c" }} */}
          <h3 style={{ margin: "2px", fontWeight: 700 }}>Hi,</h3>
          <h1
            style={{
              margin: "2px",
              fontWeight: 900,
              fontSize: "3.2rem",
            }}
          >
            I'm Tshepo Mpogeng.
          </h1>
          <h3 style={{ fontWeight: 300, margin: "2px", fontSize: "1.9rem" }}>
            I'm a<span> Full Stack </span>&<span> Mobile App</span> Developer
          </h3>
          <div
            style={{
              fontWeight: 320,
              margin: "2px",
              fontSize: "1.4rem",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <p
              style={{
                margin: "2px",
              }}
            >
              Based in Pretoria, South Africa.
            </p>{" "}
            <FaLocationDot />
          </div>
        </div>
        <p style={{ fontWeight: 300, fontSize: "1.2rem" }}>
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
