import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <section id="projects">
      <a
        href="/project-ongoing"
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        aria-label={`Lihat project ${project.title}`}
        className="
  group
  relative
  flex
  h-full
  min-w-0
  w-full
  flex-col
  overflow-hidden
  border border-pink-100
  p-2
  transition-all
  duration-500
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-pink-400
  dark:bg-[#3A1F2B]
  lg:p-4
"
      >
        {/* IMAGE */}
        <div
          className="
          relative
          aspect-[1.4/1]
          w-full
          overflow-hidden
          bg-white
        "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
            block
            h-full
            w-full
            object-cover
            object-top
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
          />

          {/* OVERLAY */}
          <div
            className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            group-focus-visible:opacity-100
          "
          />

          {/* ARROW BUTTON */}
        </div>

        {/* CONTENT */}
        <div className="mt-5 flex flex-1 flex-col">
          <h3
            className="
    text-sm
    font-extrabold
    text-pink-400
    lg:text-xl
    line-clamp-2
    min-h-[2.5rem]
    lg:min-h-[3.5rem]
  "
          >
            {project.title}
          </h3>

          <p
            className="
    mt-1
    text-sm
    leading-relaxed
    text-neutral-500
    dark:text-gray-300
    lg:text-base
    line-clamp-3
    min-h-[4.5rem]
  "
          >
            {project.description}
          </p>
        </div>
      </a>
    </section>
  );
}
