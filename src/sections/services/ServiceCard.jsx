export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      className="
        group min-h-[270px]
        h-full
        border-r border-l border-[#FFD6E0]
        p-6
        transition-all duration-500
       
      "
    >
      <span className="font-mono text-sm text-gray-400 dark:text-neutral-500">
        {service.number}
      </span>

      <div className="mt-3 flex items-center">
        <img
          src={service.icon}
          alt={`${service.title} icon`}
          className="h-10 w-10 object-contain"
        />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-950 dark:text-white lg:text-lg">
        {service.title}
      </h3>

      <p className="mt-2 text-md font-light text-neutral-500 text-gray-950 dark:text-neutral-300">
        {service.detail}
      </p>
    </article>
  );
}