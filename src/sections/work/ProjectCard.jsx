
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
        flex-col
        overflow-hidden
        rounded-2xl
        bg-[#FFF4F4]
        p-2
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-pink-400
        dark:bg-[#3A1F2B]
        lg:rounded-4xl
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
          rounded-2xl
          bg-white
          lg:rounded-[24px]
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
            transition-colors
            duration-300
            group-hover:text-pink-500
            dark:text-pink-300
            lg:text-xl
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
          "
        >
          {project.description}
        </p>
      </div>
    </a>
  </section>
);
}
