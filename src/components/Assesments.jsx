function Assessments() {
  const projects = [
    {
      image: "/images/projects/hotel.png",
      urls: [
        {
          url_name: "Frontend",
          url: "",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "UI Challenge",
      description: "Frontend UI challenge",
    },
  ];

  return (
    <div className="Assessments">
      {projects.map((project, i) => (
        <div className="project" key={i}>
          <img src={project.image} />
          <h3>{project.project_name}</h3>
          <p>{project.description}</p>
          <div className="buttons">
            {project.urls.map((obj, k) => (
              <a href={obj.url}>
                <button key={k}>{obj.url_name}</button>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Assessments;
