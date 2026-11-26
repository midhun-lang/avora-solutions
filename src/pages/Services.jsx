
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive and professional websites that help businesses establish a distinctive digital presence.",
    category: "WEB DESIGN & DEVELOPMENT",
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Powerful, functional web applications designed to solve real-world problems and simplify business operations.",
    category: "DIGITAL PRODUCTS",
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Creative digital designs, promotional materials and visual content that communicate your brand with clarity.",
    category: "VISUAL COMMUNICATION",
  },
  {
    number: "04",
    title: "Branding & Identity",
    description:
      "Distinctive visual identities that give businesses a consistent, recognisable and memorable presence.",
    category: "BRAND EXPERIENCE",
  },
  {
    number: "05",
    title: "Customized Digital Solutions",
    description:
      "Thoughtful technology solutions shaped around your ideas, requirements and business goals.",
    category: "CUSTOM SOLUTIONS",
  },
];

function Services() {
  return (
    <main className="luxury-services">

      {/* PAGE HERO */}
      <section className="luxury-services-hero">
        <Reveal>
          <span className="cinematic-label">
            AVORA / OUR CAPABILITIES
          </span>

          <h1>
            WHAT WE
            <br />
            <span>BRING TO LIFE.</span>
          </h1>

          <div className="luxury-services-intro">
            <p>
              From digital experiences to creative identities,
              we combine technology and thoughtful design
              to turn possibilities into reality.
            </p>

            <span className="services-count">
              05 <small>CORE SERVICES</small>
            </span>
          </div>
        </Reveal>
      </section>

      {/* SERVICE LIST */}
      <section className="luxury-services-list">

        <div className="luxury-services-heading">
          <span>01 — 05</span>
          <span>OUR EXPERTISE</span>
          <span>EXPLORE</span>
        </div>

        {services.map((service, index) => (
          <Reveal key={service.number} delay={index * 0.06}>
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="luxury-service-row"
            >
              <span className="luxury-service-number">
                {service.number}
              </span>

              <div className="luxury-service-content">
                <span className="luxury-service-category">
                  {service.category}
                </span>

                <h2>{service.title}</h2>

                <p>{service.description}</p>
              </div>

              <span className="luxury-service-action">
                <ArrowUpRight size={23} />
              </span>
            </Link>
          </Reveal>
        ))}

      </section>

      {/* CTA */}
      <section className="luxury-services-cta">
        <Reveal>
          <span className="cinematic-label">
            HAVE AN IDEA?
          </span>

          <h2>
            LET'S MAKE
            <br />
            <span>IT HAPPEN.</span>
          </h2>

          <p>
            Every meaningful project starts with a conversation.
            Tell us what you're imagining.
          </p>

          <Link to="/contact" className="cinematic-link">
            START A PROJECT
            <span><ArrowUpRight size={19} /></span>
          </Link>
        </Reveal>
      </section>

    </main>
  );
}

export default Services;
