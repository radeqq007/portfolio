import type { ProjectCardProps } from "../components/ProjectCard";
import oberry from "@/assets/projects/oberry.svg";
import sunbird from "@/assets/projects/sunbird.svg";
import duvet from "@/assets/projects/duvet.png";

export const projects: ProjectCardProps[] = [
  {
    title: "oBerry",
    content:
      "Modern, reactive, jQuery-like DOM library. Lightweight (4kB gzipped), TypeScript-first, no build setup required. Provides fine-grained signal-based reactivity, a chainable DOM API, and Web Component-based reusable components.",
    badges: [
      { text: "Source code", href: "https://github.com/oberryjs/oberry" },
      { text: "Docs", href: "https://oberry.pages.dev" },
    ],
    imgSrc: oberry,
  },
  {
    title: "Sunbird",
    content:
      "Sunbird is dynamically-typed, interpreted programming language that focuses on ease of use and simplicity.",
    badges: [{ text: "Source code", href: "https://github.com/radeqq007/sunbird" }],
    imgSrc: sunbird,
  },
  {
    title: "Duvet",
    content: "Duvet is a fast, keyboard-driven file explorer that lives entirely in your terminal. If you use Vim, you already know how to navigate it. Browse directories, preview files with syntax highlighting, manage bookmarks, run shell commands, and see git status — all without leaving the terminal.",
    badges: [{ text: "Source code", href: "https://github.com/radeqq007/duvet" }],
    imgSrc: duvet,
  }
];


