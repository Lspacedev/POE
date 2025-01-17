function Projects() {
  const projects = [
    {
      image: "/images/projects/hotel.png",
      urls: [
        {
          url_name: "Client",
          url: "https://github.com/Lspacedev/hotel-booking-app",
        },
        {
          url_name: "Admin",
          url: "https://github.com/Lspacedev/hotel-booking-app-admin",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Hotel Booking App",
      description:
        "Hotel Booking App allows admins to create and manage hotel rooms(admin site), as well as allowing clients to book hotel rooms(client site).",
    },
    {
      image: "/images/projects/recipe.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/online-recipe-app",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/recipe-app-api",
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
      image: "/images/projects/shopping.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/shopping-list-app",
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
          url: "https://github.com/Lspacedev/node-employee-app",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/node-employee-app-backend",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Employee App",
      description: "Employee App allows users to create and manage employees",
    },
    {
      image: "/images/projects/weather.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/react-weather-app",
        },
      ],
      project_name: "Weather App",
      description: "A react weather app, where users can search locations",
    },
    {
      image: "/images/projects/todo.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/todo-list-app",
        },
      ],
      project_name: "To Do App",
      description: "A simple todo app, where users can set a task due date",
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

export default Projects;
