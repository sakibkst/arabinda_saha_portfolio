import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SupervisionExplorer } from "@/components/explorer/SupervisionExplorer";
import { phdSupervision } from "@/data/supervision";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ph.D. Supervision",
  description: "Complete list of Doctor of Philosophy theses supervised.",
  path: "/supervision/phd",
});

export default function PhdSupervisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexure No. 09"
        title="Ph.D. Supervision"
        description="Doctor of Philosophy research works supervised in the Department of Accounting & Information Systems, Islamic University, Kushtia."
      />

      <Container className="py-16">
        <SupervisionExplorer items={phdSupervision} />
      </Container>
    </>
  );
}
