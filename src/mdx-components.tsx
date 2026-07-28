import {
  useMDXComponents as getThemeComponents,
} from "nextra-theme-docs";
import type { MDXComponents } from "mdx/types";
import { DocsImage } from "@/src/components/docs/docs-image";
import { FeatureCard } from "@/src/components/docs/feature-card";
import { RoleTable } from "@/src/components/docs/role-table";
import { StepCard } from "@/src/components/docs/step-card";

const themeComponents = getThemeComponents();

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    ...themeComponents,
    FeatureCard,
    StepCard,
    RoleTable,
    DocsImage,
    ...components,
  };
}
