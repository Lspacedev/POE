import { IoLogoGithub } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

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
      role: "Backend and Admin Dashboard",
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
          <div>
            <h4>Role: </h4> <p>{project.role}</p>
          </div>
          <h4>Members</h4>
          <div className="members">
            {project.members.map((name, k) => (
              <div key={k}>{name}</div>
            ))}
          </div>
          <h4>Stack</h4>

          <div className="stack">
            {project.stack.map((name, k) => (
              <p key={k}>{name}</p>
            ))}
          </div>
          <h4>Features</h4>

          <div className="key_features">
            {project.key_features.map((name, k) => (
              <p key={k}>{name}</p>
            ))}
          </div>
          <p>{project.collab_exp}</p>

          <div className="buttons">
            {project.urls.map((obj, k) => (
              <a href={obj.url} target="_blank" key={k}>
                <button>
                  {obj.url_name === "Frontend" ||
                  obj.url_name === "Client" ||
                  obj.url_name === "Author" ||
                  obj.url_name === "Admin" ||
                  obj.url_name === "Backend" ? (
                    <IoLogoGithub />
                  ) : (
                    <GoArrowUpRight />
                  )}
                  <div>{obj.url_name}</div>
                </button>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroupProjects;
