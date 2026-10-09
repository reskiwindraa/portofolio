export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      className="
        group min-h-[270px]
        h-full
        rounded-3xl
        border border-[#FFD6E0]
        p-6
        transition-all duration-500
        hover:-translate-y-3
        hover:scale-[1.02]
        hover:shadow-2xl
       
      "
    >
      <span className="font-mono text-sm text-gray-400 dark:text-neutral-500">
        {service.number}
      </span>

      <div className="mt-3 flex h-[70px] items-center">
        <Icon
          size={58}
          strokeWidth={1.5}
          className="text-blue-400"
        />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-950 dark:text-white lg:text-lg">
        {service.title}
      </h3>

      <p className="mt-2 text-sm font-medium leading-[1.5] text-gray-950 dark:text-white lg:text-lg">
        {service.description}
      </p>

      <p className="mt-2 text-sm ading-[1.6] text-neutral-500 text-gray-950 dark:text-neutral-300">
        {service.detail}
      </p>
    </article>
  );
}