export type Plan = {
    id: "corporate" | "ecommerce" | "custom";
    name: string;
    tagline: string;
    priceFrom: number;
    delivery: string;
    bestFor: string;
    highlight?: boolean;
    features: string[];
};

export const plans: Plan[] = [
    {
        id: "corporate",
        name: "Corporate Website",
        tagline: "A polished company site that converts.",
        priceFrom: 1200,
        delivery: "7–12 days",
        bestFor: "Agencies, studios, consultants",
        features: [
            "Up to 6 pages (Home, About, Services, Work, Blog, Contact)",
            "Responsive UI + performance-first build",
            "SEO essentials + analytics setup",
            "CMS-ready structure (optional)",
            "2 rounds of revisions",
        ],
    },
    {
        id: "ecommerce",
        name: "E-commerce Store",
        tagline: "Sell fast with a modern storefront.",
        priceFrom: 2800,
        delivery: "14–25 days",
        bestFor: "Brands, shops, product teams",
        highlight: true,
        features: [
            "Product listing + product page templates",
            "Cart & checkout integration (Stripe-ready)",
            "Collections, search, filters",
            "Admin/CMS integration option",
            "3 rounds of revisions",
        ],
    },
    {
        id: "custom",
        name: "Custom Web App",
        tagline: "A tailored build for your workflow.",
        priceFrom: 3500,
        delivery: "Depends on scope",
        bestFor: "Startups & internal tools",
        features: [
            "Custom UX + component system",
            "Auth, dashboards, integrations",
            "Scalable architecture (Next.js app router)",
            "Testing & deployment guidance",
            "Dedicated support window",
        ],
    },
];
