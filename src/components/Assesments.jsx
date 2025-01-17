function Assessments() {
  const projects = [
    {
      image: "/images/projects/ui.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/lyf",
        },
      ],
      project_name: "UI Challenge",
      description:
        "Frontend UI challenge, recreate a website from a given design.",
    },
    {
      image: "/images/projects/marketplace.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/marketplace-app-frontend",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/marketplace-app-backend",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Marketplace App",
      description: "A marketplace app",
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

export default Assessments;
