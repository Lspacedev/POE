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
        "Admins can create and manage hotel rooms, while clients book hotel rooms",
      stack: ["React.js", "Firebase"],
      key_features: ["Firebase Authentication"],
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
      stack: ["React.js", "MongoDB"],
      key_features: ["CRUD, Jwt"],
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
      stack: ["React.js", "JSON Server"],
      key_features: ["CRUD, Auth"],
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
      stack: ["React.js", "Firebase", "Node.js"],
      key_features: ["CRUD, Firebase Admin Sdk"],
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
      stack: ["React.js", "Weather API"],
      key_features: ["View weather, Search locations"],
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
      stack: ["React.js", "LocalStorage"],
      key_features: ["CRUD"],
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
      stack: ["React Native", "Expo"],
      key_features: ["Record and save audio"],
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
      stack: ["React Native", "Expo", "SQLite"],
      key_features: ["CRUD"],
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
      stack: ["React Native", "Expo", "Node.js"],
      key_features: ["CRUD", "Fetch from API"],
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
        "Image Gallery App that uses SQLite as a database to store image metadata.",
      stack: ["React Native", "Expo"],
      key_features: ["Take images", "Save images"],
    },
  ];

  return (
    <div className="Projects">
      {projects.map((project, i) => (
        <div className="project" key={i}>
          <img src={project.image} />
          <h3>{project.project_name}</h3>
          <p>{project.description}</p>
          <h4>Stack</h4>

          <div className="stack">
            {project.stack.map((name, k) => (
              <p>{name}</p>
            ))}
          </div>
          <h4>Features</h4>

          <div className="key_features">
            {project.key_features.map((name, k) => (
              <p>{name}</p>
            ))}
          </div>
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
