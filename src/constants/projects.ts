import type { Project } from "@/types";
import oBerry from "@/assets/oberry.svg"
import sunbird from "@/assets/sunbird.svg"
import duvet from "@/assets/duvet.svg"

export const projects: Project[] = [
  {
    title: "oBerry",
    description: "Modern, reactive, jQuery-like DOM library. Lightweight (4kB gzipped), TypeScript-first, no build setup required. Provides fine-grained signal-based reactivity, a chainable DOM API, and Web Component-based reusable components.",
    imgSrc: oBerry,
    links: {
      GitHub: "https://github.com/oberryjs/oBerry",
      Docs: "https://oberry.pages.dev",
    },
    badges: [
      "https://img.shields.io/github/license/oberryjs/oberry",
      "https://img.shields.io/npm/v/oberry.svg",
      "https://img.shields.io/npm/dm/oberry",
      "https://img.shields.io/bundlephobia/minzip/oberry",
      "https://codecov.io/gh/oberryjs/oBerry/graph/badge.svg?token=ZHWYE9FJLM",
      "https://img.shields.io/github/stars/oberryjs/oberry?style=social",
    ]
  },
  {
    title: "Sunbird",
    description: "Sunbird is dynamically-typed, interpreted programming language that focuses on ease of use and simplicity.",
    imgSrc: sunbird,
    links: {
      GitHub: "https://github.com/radeqq007/sunbird",
      Docs: "https://github.com/radeqq007/Sunbird/tree/main/docs",
    },
    badges: [
      "https://img.shields.io/github/go-mod/go-version/radeqq007/Sunbird",
      "https://github.com/radeqq007/Sunbird/actions/workflows/build.yml/badge.svg",
      "https://github.com/radeqq007/Sunbird/actions/workflows/tests.yml/badge.svg",
      "https://img.shields.io/github/last-commit/radeqq007/Sunbird",
      "https://img.shields.io/github/stars/radeqq007/sunbird?style=social",
    ]
  },
  {
    title: "Duvet",
    description: "Duvet is a fast, keyboard-driven file explorer that lives entirely in your terminal. If you use Vim, you already know how to navigate it. Browse directories, preview files with syntax highlighting, manage bookmarks, run shell commands, and see git status — all without leaving the terminal.",
    imgSrc: duvet,
    links: {
      GitHub: "https://github.com/radeqq007/duvet",
    },
    badges: [
      "https://img.shields.io/github/go-mod/go-version/radeqq007/duvet",
      "https://img.shields.io/github/license/radeqq007/duvet",
      "https://img.shields.io/github/last-commit/radeqq007/duvet",
      "https://img.shields.io/github/stars/radeqq007/duvet?style=social",
    ]
  }
]
