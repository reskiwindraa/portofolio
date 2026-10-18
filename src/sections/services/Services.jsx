
import { services } from "../../data/services";
import ScrollReveal from "../../components/common/ScrollReveal";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="mx-auto w-full border-y border-[#FFD6E0] px-10 lg:px-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ScrollReveal
            key={service.number}
            delay={index * 100}
          >
            <ServiceCard service={service} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
