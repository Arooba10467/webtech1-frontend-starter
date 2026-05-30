import type { Ticket } from "../types/ticket";

type TicketCardProps = {
  ticket: Ticket;
  onDelete: (id: string) => void;
  onEdit: (ticket: Ticket) => void;
};

function TicketCard({
  ticket,
  onDelete,
  onEdit,
}: TicketCardProps) {
  console.log("TICKET:", ticket);
  return (
    <div className="ticket">
      <div>
        <strong>{ticket.subject}</strong>

        <p>{ticket.description}</p>

        <p>Status: {ticket.status}</p>

        <p>Date: {ticket.createdAt}</p>
      </div>

      <div>
        <span
          className={`priority ${ticket.priority.toLowerCase()}`}
        >
          {ticket.priority}
        </span>

        <div className="ticket-buttons">
          <button
            className="btn"
            onClick={() => onEdit(ticket)}
          >
            Edit
          </button>

          <button
            className="btn delete-btn"
            onClick={() =>
              ticket._id &&
              onDelete(ticket._id)
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;