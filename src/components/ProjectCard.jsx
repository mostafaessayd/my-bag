import { Link } from "react-router-dom";

function ProjectCard() {
  return (
    <div className="project-card">
      <h2>Add Two Numbers</h2>

      <p>
        A simple project that adds two numbers.
      </p>

      <Link to="/project/add">
        Open Project
      </Link>
    </div>
  );
}

export default ProjectCard;