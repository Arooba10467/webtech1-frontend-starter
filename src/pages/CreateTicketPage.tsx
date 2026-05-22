import TicketForm from "../components/TicketForm";

import type { Ticket } from "../types/ticket";

type Props = {
  onAddTicket: (ticket: Ticket) => void;

  editingTicket: Ticket | null;
};

function CreateTicketPage({
  onAddTicket,
  editingTicket,
}: Props) {
  return (
    <TicketForm
      onAddTicket={onAddTicket}
      editingTicket={editingTicket}
    />
  );
}

export default CreateTicketPage;