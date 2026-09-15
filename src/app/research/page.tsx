import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectsExplorer } from "@/components/explorer/ProjectsExplorer";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Research Projects",
  description: "Institutionally funded and directed research projects.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexure No. 07"
        title="Research Projects"
        description="Projects directed by the professor across his career, funded or approved by Islamic University and the Bangladesh University Grants Commission (BUGC)."
      />

      <Container className="py-16">
        <ProjectsExplorer items={projects} />
      </Container>
    </>
  );
}
