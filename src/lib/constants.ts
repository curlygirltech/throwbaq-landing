import type { Stat, PainPoint, Step, ValuePropCard, FAQItem } from "@/types";

export const STATS: Stat[] = [
  {
    value: "$78",
    label: "average money lost per skipped return",
    source: "CardRates Consumer Survey, 2024",
  },
  {
    value: "69%",
    label: "of people keep items they don't want because returning is too much hassle",
    source: "Shorr Packaging, 2025 (n=2,013)",
  },
  {
    value: "44%",
    label: "of shoppers have missed a return window entirely",
    source: "LendingTree Consumer Survey, 2025",
  },
];

export const PAIN_POINTS: PainPoint[] = [
  {
    emoji: "\u{1F4E6}",
    title: "Find the box, find the tape",
    description: "Hunting for packaging you threw away three weeks ago.",
  },
  {
    emoji: "\u{1F5A8}\u{FE0F}",
    title: "Print the label",
    description: "Your printer is out of ink. It always is.",
  },
  {
    emoji: "\u{1F697}",
    title: "Drive to the drop-off",
    description: "The UPS Store closes at 6. You leave work at 5:30.",
  },
  {
    emoji: "\u{23F3}",
    title: "Wait for the refund",
    description: "Then refresh your bank app for the next 10 days.",
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Request a Return",
    description:
      "Snap a photo of your item, select the retailer, and choose your return method. 30 seconds, tops.",
  },
  {
    number: 2,
    title: "A Runner Claims It",
    description:
      "A verified local runner picks up your item from your door. No packaging, no labels — we handle everything.",
  },
  {
    number: 3,
    title: "Get Your Refund",
    description:
      "Track your return in real-time with photo proof at every step. Your refund processes as normal.",
  },
];

export const VALUE_PROPS: ValuePropCard[] = [
  {
    tag: "For Shoppers",
    heading: "Your returns, off your plate.",
    features: [
      { text: "Doorstep pickup — skip the post office" },
      { text: "No boxing, no labeling, no printer needed" },
      { text: "Real-time tracking with photo proof" },
      { text: "Works with any online retailer" },
      { text: "Same-day pickup available" },
    ],
    cta: "Join as a Shopper \u2192",
    variant: "light",
  },
  {
    tag: "For Runners",
    heading: "Earn money on your schedule.",
    features: [
      { text: "Flexible gig — work when you want" },
      { text: "Stack multiple returns per route" },
      { text: "Simple tasks: pick up, drop off, done" },
      { text: "No special equipment required" },
      { text: "Be part of something early" },
    ],
    cta: "Become a Runner \u2192",
    variant: "dark",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "How much does Throwbaq cost?",
    answer:
      "We\u2019re still finalizing pricing to make sure it works for both shoppers and runners. Join the waitlist to get early access pricing when we launch.",
  },
  {
    question: "How do I know my items are safe?",
    answer:
      "Every runner is verified with a background check. All pickups and drop-offs are documented with timestamped photos, GPS tracking, and receipt confirmation. We\u2019re building trust into every step.",
  },
  {
    question: "What retailers do you support?",
    answer:
      "If a retailer accepts returns by mail or in-store, we can handle it. At launch, we\u2019ll focus on the most popular retailers \u2014 Amazon, Target, Walmart, Nordstrom, and more.",
  },
  {
    question: "How do I become a runner?",
    answer:
      "Sign up on the waitlist as a runner. When we launch in your area, you\u2019ll go through a quick onboarding process including a background check, and then you can start claiming return jobs on your schedule.",
  },
  {
    question: "When is Throwbaq launching?",
    answer:
      "We\u2019re currently building and testing. Join the waitlist to get early access and follow our socials to watch every step of the journey.",
  },
];

export const SOCIAL_LINKS = [
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter/X", href: "#" },
];

export const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];
