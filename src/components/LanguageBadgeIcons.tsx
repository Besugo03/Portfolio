import type { ReactNode } from "react";
import {
  IconCode,
  IconCoffee,
  IconBrandPython,
  IconBrandReact,
  IconInfinity,
  IconCpu,
} from "@tabler/icons-react";

interface LanguageBadgeInfo {
  label: string;
  color: string;
  icon: ReactNode;
}

/**
 * Drop new entries here to make a new badge available in App.tsx.
 * The key is what you pass in `programmingLanguages={[...]}` (it is matched case-insensitively).
 * For `icon` you can use any icon from @tabler/icons-react, or one of your own files:
 *   import TypescriptLogo from "../typescript.svg";
 *   icon: <Image src={TypescriptLogo} w={"1rem"} h={"1rem"} />,
 */
export const languageBadges: Record<string, LanguageBadgeInfo> = {
  java: { label: "Java", color: "orange", icon: <IconCoffee /> },
  python: { label: "Python", color: "blue", icon: <IconBrandPython /> },
  react: { label: "React", color: "cyan", icon: <IconBrandReact /> },
  arduino: { label: "Arduino", color: "teal", icon: <IconInfinity /> },
  embedded: { label: "Embedded", color: "green", icon: <IconCpu /> },
};

export function getLanguageBadge(language: string): LanguageBadgeInfo {
  return (
    languageBadges[language.toLowerCase()] ?? {
      label: language,
      color: "gray",
      icon: <IconCode />,
    }
  );
}
