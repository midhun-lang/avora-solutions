
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";


const services = [
  {
    number: "01",
    title: "Website Development",
    description: "Modern, responsive websites built for your business.",
    service: "Website Development",
  },
  {
    number: "02",
    title: "Web Application Development",
    description: "Powerful web applications designed around real needs.",
    service: "Web Application Development",
  },
  {
    number: "03",
    title: "Graphic Design",
    description: "Visual content that communicates your brand.",
    service: "Graphic Design",
  },
  {
    number: "04",
    title: "Branding & Identity",
    description: "Distinctive brand identities that make an impression.",
    service: "Branding & Identity",
  },
  {
    number: "05",
    title: "Customized Digital Solutions",
    description: "Practical digital solutions tailored to your goals.",
    service: "Customized Digital Solutions",
  },
];

function Home() {
  return (
    <main className="cinematic-home">

      {/* HERO */}
      <section className="cinematic-hero">

        <div className="hero-grain" />
        <div className="hero-orb" />

        <div className="cinematic-hero-inner">

          <motion.div
            className="cinematic-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow-line" />
            INDEPENDENT DIGITAL SOLUTIONS STUDIO
          </motion.div>

          <motion.h1
            className="cinematic-title"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            IDEAS INTO
            <br />
            <span>EXTRAORDINARY.</span>
          </motion.h1>

          <motion.div
            className="cinematic-hero-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p>
              We bring technology and creativity together
              to transform ambitious ideas into meaningful
              digital experiences.
            </p>

            <Link to="/contact" className="cinematic-link">
              START A PROJECT
              <span><ArrowUpRight size={19} /></span>
            </Link>
          </motion.div>

          <div className="hero-index">
            <span>AVORA® — 2026</span>
            <span>SCROLL TO EXPLORE <ArrowDown size={14} /></span>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="cinematic-intro">
        <Reveal>
          <span className="cinematic-label">01 / OUR APPROACH</span>

          <h2>
            Not just digital.
            <br />
            <span>Intentionally different.</span>
          </h2>

          <div className="intro-description">
            <p>
              At AVORA, we believe good technology should do
              more than function. It should inspire, connect
              and create meaningful experiences.
            </p>

            <Link to="/about" className="text-link">
              DISCOVER AVORA <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="cinematic-services">
        <Reveal>
          <div className="cinematic-section-heading">
            <div>
              <span className="cinematic-label">02 / WHAT WE DO</span>
              <h2>Our capabilities.</h2>
            </div>

            <Link to="/services" className="text-link">
              ALL SERVICES <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="cinematic-service-list">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.1}>
              <Link
                to={`/contact?service=${encodeURIComponent(
                  service.title === "Creative & Branding"
                    ? "Graphic Design"
                    : service.title
                )}`}
                className="cinematic-service"
              >
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-information">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <ArrowUpRight className="service-arrow" size={24} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="cinematic-statement">
        <Reveal>
          <span className="cinematic-label">03 / THE AVORA MINDSET</span>

          <h2>
            THINK BEYOND
            <br />
            <span>WHAT EXISTS.</span>
          </h2>

          <p>
            Every great solution begins with a different way of thinking.
          </p>
        </Reveal>
      </section>

      {/* CONTACT CTA */}
      <section className="cinematic-contact">
        <Reveal>
          <span className="cinematic-label">HAVE SOMETHING IN MIND?</span>

          <h2>
            Let's create
            <br />
            <span>what's next.</span>
          </h2>

          <Link to="/contact" className="cinematic-link">
            LET'S TALK
            <span><ArrowUpRight size={19} /></span>
          </Link>
        </Reveal>
      </section>

    </main>
  );
}

export default Home;
