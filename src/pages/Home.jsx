import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <main className="home">
      <h1>My Projects</h1>

      <div className="projects">

        <ProjectCard
          title="Add Two Numbers"
          description="A simple project that adds two numbers."
          link="/project/add"
        />

        <ProjectCard
          title="Multiply & Subtract Two Numbers"
          description="A simple project that multiplies and subtracts two numbers."
          link="/project/multiply-subtract"
        />

        <ProjectCard
          title="Word Search"
          description="A simple project that multiplies and subtracts two numbers."
          link="/project/wordSearch"
        />

      </div>
    </main>
  );
}

export default Home;