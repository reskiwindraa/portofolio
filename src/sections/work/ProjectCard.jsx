import { ArrowRight } from "lucide-react";
import Button from "../../components/common/Button";

export default function ProjectCard({ project }) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        bg-[#FFD3E0]
        p-2
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        dark:bg-[#3A1F2B]
        lg:rounded-4xl
        lg:p-4
      "
    >
      {/* IMAGE */}
      <div
        className="
          group/image
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
            duration-1000
            ease-out
            group-hover/image:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="mt-5 flex flex-1 flex-col">
        <h3
          className="
            text-sm
            font-extrabold
            text-[#101828]
            dark:text-white
            lg:text-xl
          "
        >
          {project.title}
        </h3>

        <p
          className="
            text-sm
            text-gray-600
            dark:text-gray-300
            lg:text-sm
            "
            >
          {project.description}
        </p>

        {/* garis pemisah + link */}
        <div className="">
          <div className="border-t-2 border-[#FF9FBF] dark:border-pink-400/40">
            <Button href="#" variant="link" size="md" arrow>See details</Button>
          </div>
        </div>
      </div>
    </article>
  );
}