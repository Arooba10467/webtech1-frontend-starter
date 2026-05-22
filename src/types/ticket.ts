export type TicketPriority = "low" | "medium" | "high";

export type TicketStatus = "Open" | "In Progress" | "Closed";

export type Ticket = {
  id: number;
  subject: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
};