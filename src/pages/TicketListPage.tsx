import TicketCard from "../components/TicketCard";

import type { Ticket } from "../types/ticket";

type Props = {
  tickets: Ticket[];
  onDelete: (id: number) => void;
  onEdit: (ticket: Ticket) => void;
};

function TicketListPage({
  tickets,
  onDelete,
  onEdit,
}: Props) {
  return (
    <section className="card">
      <h2>My Tickets</h2>

      <p className="card-sub">
        Showing all tickets
      </p>

      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}

export default TicketListPage;