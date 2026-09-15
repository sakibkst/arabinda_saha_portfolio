export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavLink[];
}

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Career", href: "/career" },
  {
    label: "Research",
    children: [
      { label: "Research Projects", href: "/research" },
      { label: "Publications", href: "/publications" },
      { label: "Books", href: "/books" },
    ],
  },
  {
    label: "Supervision",
    children: [
      { label: "M.Phil. Supervision", href: "/supervision/mphil" },
      { label: "Ph.D. Supervision", href: "/supervision/phd" },
      { label: "External Examinations", href: "/examinations" },
    ],
  },
  {
    label: "Engagement",
    children: [
      { label: "Seminars & Papers", href: "/seminars" },
      { label: "Conferences & Webinars", href: "/conferences" },
      { label: "Academic Service", href: "/academic-service" },
    ],
  },
  { label: "Archive", href: "/archive" },
  { label: "Contact", href: "/contact" },
];

// Flattened list used for the mobile menu and the footer sitemap.
export const flatNavLinks: NavLink[] = navItems.flatMap((item) =>
  item.children ? item.children : item.href ? [{ label: item.label, href: item.href }] : []
);
