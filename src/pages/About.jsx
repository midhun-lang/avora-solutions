
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Target,
  Lightbulb,
  Compass,
  Code2,
  Palette,
  Layers3,
} from "lucide-react";
import Reveal from "../components/Reveal";

const values = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Creativity",
    description:
      "We approach every idea with curiosity and explore thoughtful ways to transform concepts into meaningful digital experiences.",
  },
  {
    number: "02",
    icon: Target,
    title: "Purpose",
    description:
      "We focus on practical digital solutions that address real needs and create value for the people who use them.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Progress",
    description:
      "We believe in continuous learning, embracing new technologies and improving with every project we undertake.",
  },
];

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Website & Web Application Development",
  },
  {
    icon: Palette,
    number: "02",
    title: "Graphic Design & Branding",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Customized Digital Solutions",
  },
];

function About() {
  return (
    <main className="cinematic-about">

      {/* HERO */}
      <section className="about-cinematic-hero">
        <Reveal>
          <span className="cinematic-label">
            AVORA / THE STUDIO
          </span>

          <h1>
            MORE THAN
            <br />
            <span>TECHNOLOGY.</span>
          </h1>

          <div className="about-hero-bottom">
            <p>
              We are an emerging technology and creative
              digital solutions studio driven by ideas,
              thoughtful design and the possibilities of technology.
            </p>

            <span className="about-hero-index">
              INDEPENDENT
              <br />
              DIGITAL STUDIO / 2026
            </span>
          </div>
        </Reveal>
      </section>

      {/* INTRO */}
      <section className="about-cinematic-intro">
        <Reveal>
          <div className="about-cinematic-side">
            <span className="cinematic-label">
              01 / WHO WE ARE
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-cinematic-main">
            <h2>
              GOOD IDEAS
              <br />
              DESERVE TO BE
              <br />
              <span>BUILT.</span>
            </h2>

            <p>
              AVORA Solutions brings together technology,
              creativity and practical thinking to help
              individuals, startups and businesses strengthen
              their digital presence.
            </p>

            <p>
              From website development and web applications
              to graphic design and branding, we explore
              ways to transform ideas into useful, engaging
              and purposeful digital experiences.
            </p>
          </div>
        </Reveal>
      </section>

      {/* VISION AND MISSION */}
      <section className="about-cinematic-direction">
        <Reveal>
          <article className="about-direction-card">
            <div className="direction-top">
              <span>02 / OUR VISION</span>
              <Target size={23} strokeWidth={1.4} />
            </div>

            <h2>
              THINK
              <br />
              BEYOND
              <br />
              <span>WHAT EXISTS.</span>
            </h2>

            <p>
              To grow into a trusted technology company
              creating innovative digital solutions and
              making technology more accessible to businesses
              and people.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <article className="about-direction-card direction-secondary">
            <div className="direction-top">
              <span>03 / OUR MISSION</span>
              <Lightbulb size={23} strokeWidth={1.4} />
            </div>

            <h2>
              TURN
              <br />
              IDEAS INTO
              <br />
              <span>POSSIBILITIES.</span>
            </h2>

            <p>
              To combine creativity, technology and thoughtful
              execution to build practical solutions that
              help ideas move forward.
            </p>
          </article>
        </Reveal>
      </section>

      {/* VALUES */}
      <section className="about-cinematic-values">
        <Reveal>
          <div className="about-values-heading">
            <span className="cinematic-label">
              04 / WHAT DRIVES US
            </span>

            <h2>
              PRINCIPLES
              <br />
              THAT <span>MATTER.</span>
            </h2>

            <p>
              The foundation behind how we think,
              create and build.
            </p>
          </div>
        </Reveal>

        <div className="about-cinematic-values-list">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal key={value.number} delay={index * 0.08}>
                <article className="about-cinematic-value">
                  <span className="value-number">
                    {value.number}
                  </span>

                  <Icon size={25} strokeWidth={1.4} />

                  <div className="value-content">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>

                  <span className="value-symbol">↗</span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="about-cinematic-capabilities">
        <Reveal>
          <span className="cinematic-label">
            05 / WHAT WE FOCUS ON
          </span>

          <h2>
            TECHNOLOGY
            <br />
            MEETS <span>CREATIVITY.</span>
          </h2>

          <p className="capabilities-intro">
            Different capabilities. One direction:
            bringing meaningful digital ideas to life.
          </p>
        </Reveal>

        <div className="about-cinematic-capability-list">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.number} delay={index * 0.08}>
                <div className="about-cinematic-capability">
                  <span>{item.number}</span>
                  <Icon size={22} strokeWidth={1.5} />
                  <h3>{item.title}</h3>
                  <ArrowUpRight size={21} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cinematic-cta">
        <Reveal>
          <span className="cinematic-label">
            THE FUTURE STARTS WITH AN IDEA
          </span>

          <h2>
            LET'S CREATE
            <br />
            <span>WHAT'S NEXT.</span>
          </h2>

          <p>
            Have something in mind? We'd love to hear
            about it. Let's start a conversation.
          </p>

          <Link to="/contact" className="cinematic-link">
            LET'S TALK
            <span>
              <ArrowUpRight size={19} />
            </span>
          </Link>
        </Reveal>
      </section>

    </main>
  );
}

export default About;
