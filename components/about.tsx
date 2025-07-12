"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
<SectionHeading>About Me</SectionHeading>
<p className="mb-3">
  I’m a Data Scientist and Software Engineer with a Master’s in Computer Science from Arizona State University (ASU), graduated in May 2025. My work spans machine learning, LLM systems, and backend engineering, bridging research with practical, scalable implementation. I'm currently exploring full-time opportunities in data science, ML engineering, or backend-focused roles.
</p>
<p className="mb-3">
  At ASU Enterprise Partners, I led projects that drove impact across marketing and fundraising: building attribution models with GA4 + BigQuery, clustering 100K+ alumni using K-means with Mahalanobis distance, and deploying donor propensity models in SageMaker with 10% lift in predictive accuracy.
</p>
<p className="mb-3">
  I also build agent-driven AI systems that push boundaries, from a LangGraph-based NPC simulator with real-time FAISS memory and C++ integration in Unreal Engine, to a multi-agent prompt debugger using AutoGen and Groq/OpenAI APIs. I love solving problems that blend data, distributed systems, and intelligent reasoning.
</p>


    </motion.section>
  );
}
