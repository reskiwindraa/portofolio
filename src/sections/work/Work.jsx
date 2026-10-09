import { projects } from "../../data/projects";
import ScrollReveal from "../../components/common/ScrollReveal";
import ProjectCard from "./ProjectCard";

export default function Work({ darkMode }) {
  return (
    <section
      id="work"
      className="
        mx-auto
        max-w-[1180px]
        px-5
        pt-12
        lg:px-0
        lg:pt-20
      "
    >
      <ScrollReveal>
        <h2
          className="
            mb-3
            text-[16px]
            font-bold
            dark:text-white
            lg:text-[18px]
          "
        >
          Work
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 100}
          >
            <ProjectCard
              project={project}
              index={index}
              darkMode={darkMode}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}