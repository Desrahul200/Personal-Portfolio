import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import NpcSimImg from "@/public/npc-sim.png";
import RetailSimImg from "@/public/retail-sim.png";
import AutoGenSuiteImg from "@/public/autogen-suite.png";
import YelpMiningImg from "@/public/yelp-mining.png";
import VaeVideoImg from "@/public/vae-video.png";
import LeafDiseaseImg from "@/public/leaf-disease.png";
import DrugDiscoveryImg from "@/public/drug-discovery.png";
import LiverDetectionImg from "@/public/liver-detection.png";
import BillingSystemImg from "@/public/billing-system.png";
import CarlaImg from "@/public/carla.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Scientist",
    location: "ASU Enterprise Partners, Scottsdale, AZ",
    description:
      "Working on marketing attribution models, donor analytics, and alumni segmentation using Python, R, BigQuery, and AWS. Focused on applied ML and end-to-end data pipelines for fundraising and learner engagement.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 – Present",
  },
  {
    title: "Master of Science in Computer Science",
    location: "Arizona State University, Tempe, AZ",
    description:
      "Graduated with a 3.90 GPA. Focused on Machine Learning, LLMs, GenAI, Data Engineering, and NLP. Built LangGraph, LangChain, and ML Ops-driven projects across academic and industry domains.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 – May 2025",
  },
  {
    title: "Bachelor of Technology in Information Technology",
    location: "K.J. Somaiya Institute of Technology, Mumbai, India",
    description:
      "Graduated with a 3.83 GPA. Gained foundational skills in software engineering, data science, and backend development through coursework and internships.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 – May 2023",
  },
] as const;


export const projectsData = [
  {
    title: "AI Agent–Driven NPC Simulator",
    description:
      "An emergent NPC system using LangGraph, FAISS, and Groq LLMs. Agents control dialogue, memory, emotion, and quest logic, enabling dynamic behavior and realistic interactions inside Unreal Engine.",
    tags: ["LangGraph", "FAISS", "FastAPI", "LLM", "Unreal Engine", "C++"],
    imageUrl: NpcSimImg,
    githubUrl: "https://github.com/Desrahul200/npc-langgraph-sim"
  },
  {
    title: "Multi-Agent Retail Optimization",
    description:
      "Retail simulator integrating five agents for demand forecasting, pricing, inventory, customer clustering, and simulation—all orchestrated in LangGraph with a real-time Streamlit UI.",
    tags: ["LangGraph", "Prophet", "Thompson Sampling", "UMAP", "KMeans", "Streamlit"],
    imageUrl: RetailSimImg,
    githubUrl: "https://github.com/Desrahul200/retail-multi-agent-optimizer"
  },
  {
    title: "LLM Prompt Evaluator – AutoGen Suite",
    description:
      "Built a modular LLM evaluation platform using AutoGen. Includes debugging, prompt improvement, fallback LLM routing, and a Streamlit UI for visualization and export.",
    tags: ["AutoGen", "Groq", "OpenAI", "Streamlit", "LangChain", "LLM"],
    imageUrl: AutoGenSuiteImg,
    githubUrl: "https://github.com/Desrahul200/Prompt-Evaluator"
  },
  {
    title: "LLM Sentiment & Topic Mining (Yelp Reviews)",
    description:
      "Fine-tuned BERT and RoBERTa for multi-class sentiment analysis (94.2% accuracy) and improved topic coherence using BERTopic + SentenceTransformer embeddings.",
    tags: ["RoBERTa", "BERT", "BERTopic", "SHAP", "FastAPI", "Yelp"],
    imageUrl: YelpMiningImg,
    githubUrl: "https://github.com/Desrahul200/llm-yelp-sentiment-topic-mining"
  },
  {
    title: "VAE Optimization for Video Generation",
    description:
      "Optimized a video-generating VAE pipeline with dynamic tiling and checkpointing. Reduced GPU memory usage by 30% while improving temporal coherence using OFC and SSIM.",
    tags: ["VAE", "Deep Learning", "Video Gen", "CUDA", "CogVideo", "PyTorch"],
    imageUrl: VaeVideoImg,
    githubUrl: "https://github.com/Desrahul200/VAE-Optimization-CogVideoX"
  },
  {
    title: "Harnessing DRL for Autonomous Driving in CARLA",
    description:
      "Built an adaptive self-driving agent using VAE + PPO in CARLA. Achieved 92.3% mean reward in dry and 78.5% in adverse conditions, showcasing lane-keeping and obstacle avoidance.",
    tags: ["CARLA", "Reinforcement Learning", "VAE", "PPO", "PyTorch"],
    imageUrl: CarlaImg,
    githubUrl: "https://github.com/Desrahul200/CSE574_FinalProject"
  },
  {
    title: "Plant Leaf Disease Detection (Published)",
    description:
      "Augmented datasets with GANs, trained YOLOv4-tiny (77% mAP), and deployed it via Flask API in a Java mobile app for real-time inference. Published in ICAST 2023.",
    tags: ["YOLOv4", "GAN", "Flask", "Computer Vision", "Mobile"],
    imageUrl: LeafDiseaseImg,
    githubUrl: "https://github.com/Desrahul200/Leaf-disease-detection-using-yolov4"
  },
  {
    title: "Drug Discovery – HDAC6 Compound Activity Prediction",
    description:
      "Predicted IC50 values for 250+ HDAC6 inhibitors using RDKit + PaDEL fingerprints and model selection on top 5 regressors, supporting early-stage compound screening.",
    tags: ["RDKit", "Drug Discovery", "Machine Learning", "Regression", "PaDEL"],
    imageUrl: DrugDiscoveryImg,
    githubUrl: "https://github.com/Desrahul200/Drug-Discovery"
  },
  {
    title: "Liver Disease Detection Benchmarking",
    description:
      "Evaluated Faster R-CNN, RetinaNet, YOLOv8, YOLOv7 on Roboflow100 dataset using Detectron2 + YOLO frameworks. Compared mAP, loss metrics, and classification accuracy.",
    tags: ["YOLOv8", "RetinaNet", "Faster R-CNN", "Detectron2", "Benchmarking"],
    imageUrl: LiverDetectionImg,
    githubUrl: "https://github.com/Desrahul200/Performance-evaluation-of-object-detection-models"
  },
  {
    title: "Electricity & LPG Billing System",
    description:
      "Java Swing GUI for managing customer billing with MySQL backend. Designed for offline/low-bandwidth usage in small-scale utility operations.",
    tags: ["Java", "Swing", "MySQL"],
    imageUrl: BillingSystemImg,
    githubUrl: "https://github.com/Desrahul200/Electricty_LPG_Billing_System"
  }
] as const;


export const skillsData = [
  // Programming Languages
  "Python",
  "Java",
  "C++",
  "R",
  "SQL",

  // Data Management & Big Data
  "BigQuery",
  "Snowflake",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Hadoop",
  "PySpark",
  "Spark SQL",
  "Airflow",

  // Machine Learning & AI
  "scikit-learn",
  "H2O",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "CNNs",
  "LLMs",
  "NLP",
  "LangChain",
  "ARIMA",

  // DevOps & Cloud
  "Git",
  "GitLab",
  "Docker",
  "Jenkins",
  "Kubernetes",
  "CI/CD",
  "AWS",
  "GCP",
  "Azure",
  "Databricks",
  "Linux",

  // Web & Visualization
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Django",
  "Spring Boot",
  "FastAPI",
  "Flask",
  "Streamlit",

  // BI & Visualization Tools
  "Excel",
  "Power BI",
  "Tableau",
  "Matplotlib",
  "Seaborn",
  "Plotly"
] as const;
