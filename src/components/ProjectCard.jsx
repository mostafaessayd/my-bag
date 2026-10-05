import { Link } from "react-router-dom";

function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>

      <p>{description}</p>

      <Link to={link}>
        Open Project
      </Link>
    </div>
  );
}

export default ProjectCard;