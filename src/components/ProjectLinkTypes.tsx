import type { ReactNode } from "react";
import {
  IconArticle,
  IconBrandGithub,
  IconBrandYoutube,
} from "@tabler/icons-react";

export type ProjectLinkKind = "github" | "youtube" | "blog";

export interface ProjectLink {
  kind: ProjectLinkKind;
  url: string;
  /** Optional: overrides the default English text on the button. */
  label?: string;
  /** Optional: overrides the default Italian text on the button. */
  labelIT?: string;
}

interface ProjectLinkInfo {
  label: string;
  labelIT: string;
  color: string;
  icon: ReactNode;
}

/**
 * Add new link kinds here (and to ProjectLinkKind above).
 * As with the badges in LanguageBadgeIcons.tsx, `icon` can be any @tabler/icons-react
 * icon or one of your own images wrapped in <Image />.
 */
export const projectLinkTypes: Record<ProjectLinkKind, ProjectLinkInfo> = {
  github: {
    label: "Go to the repository",
    labelIT: "Vai alla repository di Github",
    color: "black",
    icon: <IconBrandGithub />,
  },
  youtube: {
    label: "Watch the Demo",
    labelIT: "Guarda il video",
    color: "red",
    icon: <IconBrandYoutube />,
  },
  blog: {
    label: "Check out my blog for more",
    labelIT: "Leggi di piú sul blog",
    color: "black",
    icon: <IconArticle />,
  },
};
