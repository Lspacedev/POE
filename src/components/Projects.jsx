function Projects() {
  const projects = [
    {
      image: "/images/projects/hotel.png",
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
      project_name: "Hotel Booking App",
      description:
        "Hotel Booking App allows admins to create and manage hotel rooms through the admin site, as well as allowing clients to book hotel rooms through the client site.",
    },
    {
      image: "/images/projects/shop.png",
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
      project_name: "Recipes App",
      description: "Recipe App allows users to create and manage recipes",
    },
    {
      image: "/images/projects/shop.png",
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
      project_name: "Shopping List App",
      description: "Allows users to create and manage shopping lists",
    },
    {
      image: "/images/projects/employee.png",
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
      project_name: "Employee App",
      description: "Employee App allows users to create and manage employees",
    },
  ];

  return (
    <div className="Projects">
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

export default Projects;
