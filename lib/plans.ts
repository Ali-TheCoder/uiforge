export type Plan = {
    id: "corporate" | "ecommerce" | "custom" | "personal brand" | "landing page";
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
        id: "landing page",
        name: "Landing page",
        tagline: "A polished Landing page that converts.",
        priceFrom: 1200,
        delivery: "7–12 days",
        bestFor: "coachs, Agencies, studios, consultants",
        features: [
           " Custom Coding",
           " Conversion Optimization",
           " Strategic Copywriting",
           " Revisions until Loving",
           " 1 Month of FREE Support"
        ],
    },
    {
        id: "ecommerce",
        name: "E-commerce Store",
        tagline: "Sell fast with a modern storefront.",
        priceFrom: 2800,
        delivery: "14–25 days",
        bestFor: "Brands, shops, product teams",
        highlight: false,
        features: [
            "Product listing + product page templates",
            "Cart & checkout integration (Stripe-ready)",
            "Collections, search, filters",
            "Admin/CMS integration option",
            "3 rounds of revisions",
            "2 Months of FREE Support"
        ],
    },
    {
        id: "personal brand",
        name: "Personal Branding",
        tagline: "A tailored build for your personal brand.",
        priceFrom: 2000,
        delivery: "10–20 days",
        bestFor: "Business owners, Entrepreneurs",
        highlight: false,
        features: [
        "5-7 page included",   
        "Custom Coding",
        "Branding Strategy",
        "Strategic Copywriting",
        "Revisions until Loving",
        "2 Months of FREE Support"
        ],
    },
    {
        id: "custom",
        name: "Custom Web App",
        tagline: "A tailored build for your workflow.",
        priceFrom: 3000,
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
