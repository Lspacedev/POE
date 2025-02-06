function GroupProjects() {
  const projects = [
    {
      image: "/images/projects/restaurant.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/restaurant-app-admin",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/restaurant-app-backend",
        },
        {
          url_name: "Live",
          url: "https://restaurant-app-admin.vercel.app",
        },
      ],
      project_name: "Restaurant Booking App",
      description:
        "Restaurant booking app where restaurants can add and manage their restaurants",
      members: ["Tshepo", "Reabetswe"],
      stack: ["Reactjs", "React Native", "Node", "MongoDb"],
      key_features: ["Authentication", "CRUD"],
      collab_exp: "Worker together through Slack and Trello",
    },
  ];

  return (
    <div className="GroupProjects">
      {projects.map((project, i) => (
        <div className="project" key={i}>
          <img src={project.image} />
          <h3>{project.project_name}</h3>
          <p>{project.description}</p>
          <h4>Members</h4>
          <div className="members">
            {project.members.map((name, k) => (
              <div>{name}</div>
            ))}
          </div>
          <h4>Stack</h4>

          <div className="stack">
            {project.stack.map((name, k) => (
              <div>{name}</div>
            ))}
          </div>
          <h4>Features</h4>

          <div className="key_features">
            {project.key_features.map((name, k) => (
              <div>{name}</div>
            ))}
          </div>
          <p>{project.collab_exp}</p>

          <div className="buttons">
            {project.urls.map((obj, k) => (
              <a href={obj.url} target="_blank">
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
