export type TicketPriority = "low" | "medium" | "high";

export type TicketStatus =
  | "Open"
  | "In Progress"
  | "Closed";

export type Ticket = {
  _id?: string;

  subject: string;
  description: string;

  priority: TicketPriority;
  status: TicketStatus;

  createdAt?: string;
};