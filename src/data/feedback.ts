export interface Feedback {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const FEEDBACK: Feedback[] = [
  {
    name: "Hamza R.",
    role: "Engineering Lead, Bitcoin Trading Platform",
    quote:
      "Picked up ledger and reconciliation logic faster than most hires with formal CS backgrounds. Asks the right questions before writing code, not after.",
    rating: 5,
  },
  {
    name: "Sara K.",
    role: "Product Designer, Collaborator on PRAQEN",
    quote:
      "Turned a messy notification spec into a real system — preferences, push, real-time UI — without losing sight of how it should actually feel to use.",
    rating: 5,
  },
  {
    name: "Bilal M.",
    role: "Fellow Indie Developer",
    quote:
      "Debugs like someone who assumes the bug is his own logic first, not the framework's. That instinct alone puts him ahead of a lot of MERN devs I know.",
    rating: 5,
  },
];
