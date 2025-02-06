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
    {
      image: "/images/projects/AR.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/audio-recorder",
        },
      ],
      project_name: "Audio Recorder",
      description:
        "A simple audio recorder app, where users can record and manage audio.",
    },
    {
      image: "/images/projects/shop.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/shop-list-app",
        },
      ],
      project_name: "Shopping list App",
      description:
        "Shopping List App that uses SQLite as a database to store lists and list items.",
    },
    {
      image: "/images/projects/recipes.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/recipe-app",
        },
      ],
      project_name: "Recipe App",
      description: "Recipe App allows users to create and manage recipes.",
    },
    {
      image: "/images/projects/gallery.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/image-gallery-app",
        },
      ],
      project_name: "Image Gallery App",
      description:
        "Image Gallery App, with camera, using SQLite as a database to store image metadata.",
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
