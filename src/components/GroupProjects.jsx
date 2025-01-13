function GroupProjects() {
  const projects = [
    {
      image: "/images/projects/restaurant.png",
      urls: [
        {
          url_name: "Frontend",
          url: "",
        },
        {
          url_name: "Backend",
          url: "",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Restaurant Booking App",
      description:
        "Restaurant booking app where restaurants can add and manage their restaurants",
    },
  ];

  return (
    <div className="GroupProjects">
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

export default GroupProjects;
