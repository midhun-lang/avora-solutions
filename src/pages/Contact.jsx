
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Check,
  RotateCcw,
} from "lucide-react";

const BUSINESS_EMAIL = "avorasolutions24@gmail.com"; // Replace with your business email address

const services = [
  "Website Development",
  "Web Application Development",
  "Graphic Design",
  "Branding & Identity",
  "Customized Digital Solutions",
  "Other",
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function Contact() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: services.includes(requestedService)
      ? requestedService
      : "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (BUSINESS_EMAIL === "YOUR_EMAIL_HERE") {
      setError("Business email is not configured yet.");
      return;
    }

    const subject = encodeURIComponent(
      `New Enquiry - ${form.service}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", service: "", message: "" });
    setSubmitted(false);
    setError("");
  };

  return (
    <main className="avora-contact">

      <section className="contact-hero">
        <motion.p
          className="contact-eyebrow"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          LET'S START SOMETHING
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.12 }}
        >
          HAVE AN IDEA?
          <br />
          <span>LET'S TALK.</span>
        </motion.h1>

        <motion.p
          className="contact-description"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.22 }}
        >
          Every great project begins with a conversation.
          Tell us what you're imagining. We'll help you
          bring it to life.
        </motion.p>
      </section>

      <section className="contact-main">

        <motion.div
          className="contact-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <p className="contact-label">GET IN TOUCH</p>

          <h2>Let's make something meaningful.</h2>

          <p className="contact-info-description">
            Whether you have a clear plan or just an
            initial idea, we're ready to hear from you.
          </p>

          <div className="contact-details">
            {[
              {
                icon: Mail,
                title: "EMAIL",
                description: "Let's connect through email",
              },
              {
                icon: MapPin,
                title: "LOCATION",
                description: "Thiruvananthapuram, Kerala, India",
              },
              {
                icon: MessageCircle,
                title: "PROJECT ENQUIRIES",
                description: "Websites, applications and digital design",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="contact-detail"
                  key={item.title}
                  variants={fadeUp}
                  custom={index}
                  transition={{ delay: index * 0.12 }}
                >
                  <Icon size={19} />
                  <div>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="contact-note">
            GOOD THINGS START WITH A SIMPLE HELLO.
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                className="contact-success"
                key="success"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.55 }}
              >
                <div className="success-icon">
                  <Check size={30} />
                </div>

                <p className="contact-label">
                  ENQUIRY INITIATED
                </p>

                <h2>Thank you for enquiring.</h2>

                <p className="success-description">
                  We appreciate your interest in AVORA Solutions.
                  Your next big idea deserves to become reality.
                </p>

                <div className="success-divider" />

                <p className="success-small">
                  Your email application should have opened
                  with your enquiry prepared. Please send
                  the email to complete your enquiry.
                </p>

                <motion.button
                  type="button"
                  className="contact-submit"
                  onClick={handleReset}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <RotateCcw size={16} />
                  Send Another Enquiry
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                className="contact-form-new"
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <p className="contact-label">SEND AN ENQUIRY</p>

                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="contact-service">What do you need?</label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <label htmlFor="contact-message">
                  Tell us about your idea
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Describe your project..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                {error && (
                  <p className="contact-error">{error}</p>
                )}

                <motion.button
                  type="submit"
                  className="contact-submit"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Enquiry
                  <ArrowUpRight size={18} />
                </motion.button>

                <p className="contact-form-note">
                  Your email application will open with your
                  enquiry prepared.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </section>

      <footer className="contact-bottom">
        <span>AVORA SOLUTIONS</span>
        <span>IDEAS INTO REALITY.</span>
      </footer>

    </main>
  );
}

export default Contact;
