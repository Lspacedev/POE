function Skills() {
  const frontend = [
    {
      icon: "/images/icons/javascript-js.svg",
      text: "JavaScript",
      level: "Advanced",
    },
    {
      icon: "/images/icons/html-5.svg",
      text: "Html",
      level: "Advanced",
    },
    {
      icon: "/images/icons/file-type-css.svg",
      text: "CSS",
      level: "Advanced",
    },
    {
      icon: "/images/icons/typescript-icon.svg",
      text: "TypeScript",
      level: "Intermediate",
    },
    {
      icon: "/images/icons/React-icon.svg.png",
      text: "React.js",
      level: "Advanced",
    },
    {
      icon: "/images/icons/React-icon.svg.png",
      text: "React Native",
      level: "Intermediate",
    },
  ];
  const backend = [
    {
      icon: "/images/icons/icons8-nodejs-48.png",
      text: "Node.js",
      level: "Advanced",
    },
    {
      icon: "/images/icons/express.png",
      text: "Express.js",
      level: "Advanced",
    },
    {
      icon: "/images/icons/mongodb.svg",
      text: "MongoDB",
      level: "Advanced",
    },
    {
      icon: "/images/icons/postgre.png",
      text: "PostgreSQL",
      level: "Advanced",
    },
    {
      icon: "/images/icons/icons8-prisma-orm-50.png",
      text: "PRISMA",
      level: "Advanced",
    },
    {
      icon: "/images/icons/firebase.png",
      text: "Firebase",
      level: "Advanced",
    },
  ];
  const technologies = [
    {
      icon: "/images/icons/icons8-git-60.png",
      text: "Git",
      level: "Advanced",
    },
  ];
  return (
    <div className="Skills">
      <div className="frontend">
        <h4>Frontend</h4>
        <div className="skills-div">
          {frontend.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="icon">
                <img src={skill.icon} />
              </div>
              <div className="text">{skill.text}</div>
              <div className="level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="backend">
        <h4>Backend</h4>
        <div className="skills-div">
          {backend.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="icon">
                <img src={skill.icon} />
              </div>
              <div className="text">{skill.text}</div>
              <div className="level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="technologies">
        <h4>Technologies</h4>
        <div className="skills-div">
          {technologies.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="icon">
                <img src={skill.icon} />
              </div>
              <div className="text">{skill.text}</div>
              <div className="level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
