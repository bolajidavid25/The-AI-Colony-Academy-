"use client";

import { FormEvent, useState } from "react";

import contactImage from "../assets/contact-us/cc97ef357630371ae2c804823d06fa82c4e062b7.jpg";

type ContactFormState = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: ContactFormState = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

const fieldClassName =
  "w-full rounded-lg border-0 bg-white px-4 py-3.5 text-sm text-[#0A0A0A] outline-none";

const portraitWindows = [
  {
    leftClass: "left-0",
    innerLeftClass: "left-0",
  },
  {
    leftClass: "left-[101px] sm:left-[141px]",
    innerLeftClass: "left-[-101px] sm:left-[-141px]",
  },
  {
    leftClass: "left-[202px] sm:left-[282px]",
    innerLeftClass: "left-[-202px] sm:left-[-282px]",
  },
];

function ContactPortrait() {
  return (
    <div
      className="relative z-10000000 mx-auto w-[302px] h-[320px] sm:w-[422px] sm:h-[460px] lg:ml-auto"
      role="img"
      aria-label="Support representative"
    >
      {portraitWindows.map((window, index) => (
        <div
          key={index}
          className={`absolute top-0 overflow-hidden rounded-full w-[100px] h-[320px] sm:w-[140px] sm:h-[460px] ${window.leftClass}`}
        >
          <div
            className={`absolute top-0 w-[302px] h-[320px] sm:w-[422px] sm:h-[460px] ${window.innerLeftClass}`}
            style={{
              backgroundImage: `url(${contactImage.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "270%",
              backgroundPosition: "left 78% top 10%",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%]"
            style={{
              background:
                "linear-gradient(to top, #002B1F 0%, rgba(0, 43, 31, 0.65) 60%, transparent 100%)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function ContactUs() {
  const [form, setForm] = useState<ContactFormState>(initialState);

  function handleChange(field: keyof ContactFormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Contact form:", form);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full bg-[#F9FAFB] px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1260px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="contact-heading"
            className="text-4xl font-bold tracking-[-1.2px] text-[#002B1F] lg:text-[42px]"
          >
            Contact Us
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#9CA3AF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#374151]">
                Full Name
              </span>
              <input
                type="text"
                name="fullName"
                required
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className={fieldClassName}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#374151]">
                Email Address
              </span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={fieldClassName}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#374151]">
                Subject
              </span>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                className={fieldClassName}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#374151]">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`${fieldClassName} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-[#00B98A] py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>

        <ContactPortrait />
      </div>
    </section>
  );
}
