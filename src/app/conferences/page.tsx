import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ConferencesExplorer } from "@/components/explorer/ConferencesExplorer";
import { conferences } from "@/data/conferences";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Conferences & Webinars",
  description: "International conferences and webinars attended as keynote speaker, resource person, or guest of honour.",
  path: "/conferences",
});

export default function ConferencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexure No. 35"
        title="Conferences & Webinars"
        description="A record of 30+ conferences and webinars (2019–2023), reflecting an active period of keynote addresses, resource-person sessions, and guest-of-honour appearances across India, the UK, and the UAE — including pre-pandemic in-person conference participation from 2015 and 2019."
      />

      <Container className="py-16">
        <ConferencesExplorer items={conferences} />
      </Container>
    </>
  );
}
