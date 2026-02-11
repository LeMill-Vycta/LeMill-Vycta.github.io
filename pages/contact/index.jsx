import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

import Bulb from "../../components/Bulb";
import { Button } from "../../components/ui/moving-border";
import { fadeIn } from "../../variants";

const SparklesCore = dynamic(
  () => import("../../components/ui/sparkles").then((mod) => mod.SparklesCore),
  { ssr: false }
);

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formValues, setFormValues] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [newsletter, setNewsletter] = useState(false);

  const buttonText = useMemo(() => {
    if (status === "sending") {
      return "Sending...";
    }

    if (status === "success") {
      return "Sent";
    }

    return "Let's Talk";
  }, [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    setStatus("sending");
    const mailSubject = encodeURIComponent(formValues.subject || "Portfolio inquiry");
    const mailBody = encodeURIComponent(
      [
        `Name: ${formValues.name}`,
        `Email: ${formValues.email}`,
        `Newsletter: ${newsletter ? "Yes" : "No"}`,
        "",
        "Message:",
        formValues.message,
      ].join("\n")
    );

    try {
      window.location.href = `mailto:contact@vyctalemill.com?subject=${mailSubject}&body=${mailBody}`;

      setStatus("success");
      setFormValues(initialForm);
      setNewsletter(false);
      toast.success("Email draft opened in your mail app.");

      window.setTimeout(() => {
        setStatus("idle");
      }, 2200);
    } catch (error) {
      setStatus("idle");
      toast.error("Could not open your mail app. Please email contact@vyctalemill.com.");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-0 pb-14 pt-32 md:pt-36">
      <div className="container mx-auto">
        <div className="grid gap-6 xl:grid-cols-[1fr,1.3fr] xl:items-start">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="section-shell rounded-[2rem]"
          >
            <span className="accent-chip">Contact</span>
            <h1 className="h1 mt-6">
              Let&apos;s build something <span className="text-accent">world-class</span>.
            </h1>
            <p className="mb-5 text-sm md:text-base xl:text-lg">
              Share your goals, timeline, and product direction. I will respond with a clear approach and practical next
              steps.
            </p>

            <div className="grid gap-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Email</p>
                <p className="mt-1 text-white/90">contact@vyctalemill.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Location</p>
                <p className="mt-1 text-white/90">Remote-first. Collaborating globally.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Response Time</p>
                <p className="mt-1 text-white/90">Within 24 hours</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={handleSubmit}
            className="section-shell shell-dynamic relative overflow-hidden rounded-[2rem]"
            autoComplete="on"
          >
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <SparklesCore
                id="contact-sparkles"
                background="transparent"
                minSize={0.4}
                maxSize={1.4}
                particleDensity={70}
                className="h-full w-full"
                particleColor="#ffffff"
              />
            </div>

            <div className="relative z-10 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>

              <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  className="input"
                  placeholder="Project scope"
                  required
                />
              </label>

              <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                Message
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  className="textarea"
                  placeholder="Tell me what you are building and what success looks like."
                  required
                />
              </label>

              <label className="flex items-start gap-3 rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-xs text-white/80">
                <input
                  type="checkbox"
                  checked={newsletter}
                  onChange={(event) => setNewsletter(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-accent focus:ring-accent"
                />
                <span>
                  Send me occasional updates on design and technology trends. You can unsubscribe any time.
                </span>
              </label>

              <Button
                type="submit"
                disabled={status === "sending"}
                className="btn rounded-full border border-white/35 text-sm font-semibold uppercase tracking-[0.2em] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {buttonText}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
      <Bulb />
    </section>
  );
};

export default Contact;
