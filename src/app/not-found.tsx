import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-navy">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-foreground-muted">
        The page you are looking for doesn&rsquo;t exist. Try the homepage or search the
        academic archive instead.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-navy px-5 py-3 text-sm font-medium text-white transition hover:bg-navy-deep"
      >
        Back to Home
      </Link>
    </Container>
  );
}
