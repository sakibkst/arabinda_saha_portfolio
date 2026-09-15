import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SupervisionExplorer } from "@/components/explorer/SupervisionExplorer";
import { mphilSupervision } from "@/data/supervision";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "M.Phil. Supervision",
  description: "Complete list of Master of Philosophy theses supervised.",
  path: "/supervision/mphil",
});

export default function MPhilSupervisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexure No. 08"
        title="M.Phil. Supervision"
        description="Master of Philosophy research works supervised in the Department of Accounting & Information Systems, Islamic University, Kushtia. Serial numbers follow the source CV exactly, including its numbering gap (No. 11 does not appear in the original document)."
      />

      <Container className="py-16">
        <SupervisionExplorer items={mphilSupervision} />
      </Container>
    </>
  );
}
