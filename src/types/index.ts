export type Role = "shopper" | "runner";

export interface Stat {
  value: string;
  label: string;
  source: string;
}

export interface PainPoint {
  emoji: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Feature {
  text: string;
}

export interface ValuePropCard {
  tag: string;
  heading: string;
  features: Feature[];
  cta: string;
  variant: "light" | "dark";
}

export interface FAQItem {
  question: string;
  answer: string;
}