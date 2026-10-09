import { projects } from "../../data/projects";
import ScrollReveal from "../../components/common/ScrollReveal";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section
      id="work"
      className="
        mx-auto
        max-w-[1180px]
        px-5
        py-12
        lg:px-0
        lg:py-20
      "
    >
      <ScrollReveal>
        <h2
          className="
            mb-8
            text-[40px]
            font-extrabold
            leading-none
            tracking-[-1.5px]
            text-[#101828]
            dark:text-white
            lg:text-4xl
          "
        >
          Projects
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-9">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={(index % 2) * 120}
          >
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}