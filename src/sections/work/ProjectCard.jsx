import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  project,
  index,
  darkMode,
}) {
  const theme = darkMode
    ? project.theme.dark
    : project.theme.light;

  return (
    <article
      className="
        group
        grid
        gap-4
        overflow-hidden
        rounded-[20px]
        p-4
        transition-all
        duration-700
        hover:-translate-y-2
        hover:shadow-2xl
        lg:grid-cols-[1.1fr_0.9fr]
        lg:p-5
      "
      style={{
        backgroundColor: theme.background,
      }}
    >
      {/* IMAGE */}
      <div
        className="
          group/image
          overflow-hidden
          rounded-[9px]
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
            transition-transform
            duration-1000
            ease-out
            group-hover/image:scale-110
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          flex
          flex-col
          justify-center
          py-3
          lg:pr-5
        "
        style={{
          color: theme.accent,
        }}
      >
        <span
          className="
            mb-2
            font-mono
            text-[11px]
            opacity-60
          "
        >
          0{index + 1}
        </span>

        <h3
          className="
            text-[19px]
            font-bold
            transition-transform
            duration-500
            group-hover:translate-x-2
            lg:text-[24px]
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-2
            text-[13px]
            leading-[1.6]
            lg:text-[14px]
          "
        >
          {project.description}
        </p>

        <ul
          className="
            mt-3
            space-y-1.5
            text-[12px]
            leading-[1.6]
            lg:text-[13px]
          "
        >
          {project.items.map((item, itemIndex) => (
            <li
              key={item}
              className="
                transition-transform
                duration-300
                hover:translate-x-2
              "
              style={{
                transitionDelay: `${itemIndex * 30}ms`,
              }}
            >
              • {item}
            </li>
          ))}
        </ul>

        <a
          href={project.href || "#"}
          className="
            group/link
            mt-5
            flex
            w-fit
            items-center
            gap-1
            text-[13px]
            font-semibold
          "
        >
          View Project

          <ArrowUpRight
            size={13}
            className="
              transition-all
              duration-300
              group-hover/link:translate-x-1
              group-hover/link:-translate-y-1
            "
          />
        </a>
      </div>
    </article>
  );
}