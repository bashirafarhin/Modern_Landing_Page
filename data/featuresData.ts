export type FeatureData = {
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
  imgUrl: string;
};

export const featuresData: FeatureData[] = [
  {
    imgUrl: "/features/f1.png",
    title: "Customizable UI",
    description:
      "Flexible components with theme support and accessibility built in.",
    features: ["Tailwind-based design", "Dark mode ready", "Easily themeable"],
  },
  {
    imgUrl: "/features/f2.jpg",
    title: "Blazing Fast API",
    description:
      "Built with performance in mind using modern web standards and scalable architecture.",
    features: ["Instant response", "Rate limiting", "REST + GraphQL"],
    reverse: true,
  },
  {
    imgUrl: "/features/f3.jpg",
    title: "Security First",
    description:
      "End-to-end encryption and best practices ensure data integrity.",
    features: ["JWT + OAuth", "Rate limiters", "Audit logs"],
  },
  {
    imgUrl: "/features/f4.jpg",
    title: "Real-Time Analytics",
    description:
      "Track user activity and system performance with up-to-the-minute metrics.",
    features: ["Live dashboards", "Custom reports", "Performance alerts"],
    reverse: true,
  },
  {
    imgUrl: "/features/f5.jpg",
    title: "Team Collaboration",
    description:
      "Seamless collaboration with shared workspaces and role-based access.",
    features: [
      "Multi-user editing",
      "Commenting system",
      "Permissions control",
    ],
  },
  {
    imgUrl: "/features/f6.jpg",
    title: "Scalable Infrastructure",
    description:
      "Built to scale effortlessly from startups to enterprise-level traffic.",
    features: ["Auto-scaling", "Cloud-native architecture", "Global CDN"],
    reverse: true,
  },
];
