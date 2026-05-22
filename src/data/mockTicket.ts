import type { Ticket } from "../types/ticket";
export const initialTickets: Ticket[] = [
  {
    id: 1,
    subject: "Website Login Issue",
    description: "User authorization failed.",
    priority: "high",
    status: "Open",
    createdAt: "2026-03-26",
  },

  {
    id: 2,
    subject: "Error in loading page",
    description: "Dashboard becomes white after login.",
    priority: "medium",
    status: "In Progress",
    createdAt: "2026-03-27",
  },

  {
    id: 3,
    subject: "Reset password not working",
    description: "Password reset email never arrives.",
    priority: "low",
    status: "Open",
    createdAt: "2026-03-28",
  },

  {
    id: 4,
    subject: "Submit issue",
    description: "Submit button freezes sometimes.",
    priority: "medium",
    status: "Closed",
    createdAt: "2026-03-29",
  },

  {
    id: 5,
    subject: "App not working",
    description: "Website not opening for some users.",
    priority: "high",
    status: "Open",
    createdAt: "2026-03-30",
  },
];