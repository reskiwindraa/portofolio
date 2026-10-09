import { services } from "../../data/services";
import ScrollReveal from "../../components/common/ScrollReveal";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 lg:px-0">
      <ScrollReveal>
        <h2 className="mb-3 text-4xl font-bold dark:text-white lg:text-4xl">
          Service
        </h2>
      </ScrollReveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ScrollReveal
            key={service.id}
            delay={index * 100}
          >
            <ServiceCard service={service} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}