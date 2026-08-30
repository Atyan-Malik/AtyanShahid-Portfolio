import React, { useState } from "react";
import GlowButton from "@/components/ui/GlowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "923193844891";

    const text = `Hello, my name is ${formData.name}.
My email is ${formData.email}.
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* =========================
              LEFT — CONTACT INFO
          ========================== */}
          <div>
            <SectionHeading
              eyebrow="// open a connection"
              title="Contact with me."
            />

            <p className="mt-6 max-w-xl font-mono text-sm leading-7 text-ink-dim">
              I'm always open to new projects, collaborations, and job
              opportunities. Whether you have an idea you'd like to bring to
              life or just want to discuss something creative — feel free to
              reach out!
            </p>

            <div className="mt-8 space-y-5">
              {/* Location */}
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-panel-2 text-cyan">
                  <MapPin className="h-5 w-5" />
                </span>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                    location
                  </p>

                  <p className="mt-1 font-mono text-sm text-ink">
                    Multan - Pakistan
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-panel-2 text-cyan">
                  <Mail className="h-5 w-5" />
                </span>

                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                    email
                  </p>

                  <p className="mt-1 break-all font-mono text-sm text-ink">
                    atyanshahid@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-panel-2 text-cyan">
                  <Phone className="h-5 w-5" />
                </span>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                    phone
                  </p>

                  <p className="mt-1 font-mono text-sm text-ink">
                    +92 319 3844891
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT — CONTACT FORM
          ========================== */}
          <form
            onSubmit={submitHandler}
            className="panel clip-corner space-y-5 p-6 sm:p-8"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-faint">
                name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                value={formData.name}
                required
                className="w-full border border-line bg-panel-2 px-4 py-3 font-mono text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cyan"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-faint">
                email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={formData.email}
                required
                className="w-full border border-line bg-panel-2 px-4 py-3 font-mono text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cyan"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-faint">
                message
              </label>

              <textarea
                rows={7}
                id="message"
                name="message"
                placeholder="What are we building?"
                onChange={handleChange}
                value={formData.message}
                required
                className="w-full resize-none border border-line bg-panel-2 px-4 py-3 font-mono text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cyan"
              />
            </div>

            {/* Submit */}
            <GlowButton
              type="submit"
              className="w-full justify-center sm:w-auto"
            >
              Send message
              <Send className="h-4 w-4" />
            </GlowButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
