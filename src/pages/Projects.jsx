import useProjectsData from "../hooks/useProjectsData";
import Container from "./../components/common/Container";
import ProjectsSwiper from "./../components/Projects/ProjectsSwiper";
const ProjectsPage = () => {
  const { projectsData } = useProjectsData();
  return (
    <section className="projects-content">
      <Container>
        <ProjectsSwiper projectsData={projectsData} />
      </Container>
    </section>
  );
};
export default ProjectsPage;
