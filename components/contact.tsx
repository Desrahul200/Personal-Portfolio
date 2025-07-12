"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-[-2rem]">
        Please contact me directly at {"  "}
        <a className="underline" href="mailto:desrahul.200@gmail.com">
          desrahul.200@gmail.com
        </a>{" "}
        or{" "}
        <a
          className="underline"
          href="https://www.linkedin.com/in/desrahul200/"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
    </motion.section>
  );
}
