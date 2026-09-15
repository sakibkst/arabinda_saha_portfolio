import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { QuickStats } from "@/components/home/QuickStats";
import { OverviewGrid } from "@/components/home/OverviewGrid";
import { ResearchFocus } from "@/components/home/ResearchFocus";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/academic/Timeline";
import { timeline } from "@/data/timeline";

export default function HomePage() {
  const previewTimeline = timeline.slice(-6);

  return (
    <>
      <Hero />
      <QuickStats />
      <OverviewGrid />
      <ResearchFocus />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Career at a Glance"
              title="Recent milestones"
              description="A short preview of the full academic timeline."
            />
            <Link
              href="/career"
              className="flex items-center gap-1.5 text-sm font-medium text-gold hover:underline"
            >
              View full career timeline <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <Timeline events={previewTimeline} />
          </div>
        </Container>
      </section>
    </>
  );
}
