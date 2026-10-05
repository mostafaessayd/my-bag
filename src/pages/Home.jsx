import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <main className="home">
      <h1>My Projects</h1>

      <div className="projects">
        <ProjectCard />
      </div>
    </main>
  );
}

export default Home;