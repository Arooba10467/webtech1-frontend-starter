import { useState } from "react";
import TicketCard from "../components/TicketCard";
import type { Ticket } from "../types/ticket";

type Props = {
  tickets: Ticket[];
  onDelete: (id: string) => void;
  onEdit: (ticket: Ticket) => void;
};

function TicketListPage({
  tickets,
  onDelete,
  onEdit,
}: Props) { 

   const [searchTerm, setSearchTerm] = useState("");

    const filteredTickets = tickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="card">
      <h2>My Tickets</h2>

      <p className="card-sub">
        Showing all tickets
      </p>
    
       <input
        type="text"
        placeholder="Search tickets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />

        {filteredTickets.length === 0 ? (
        <p style={{ marginTop: "10px" }}>
          No tickets found 😢
        </p>
      ) : (
        // ✅ STEP 5: show filtered tickets
        filteredTickets.map((ticket) => (
          <TicketCard
            key={ticket._id}
            ticket={ticket}
            onDelete={onDelete}
            onEdit={onEdit}
        />
      ))
    )}

    </section>
  );
}

export default TicketListPage;