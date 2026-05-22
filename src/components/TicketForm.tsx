import { useEffect, useState } from "react";

import type {
  Ticket,
  TicketPriority,
  TicketStatus,
} from "../types/ticket";

type TicketFormProps = {
  onAddTicket: (
    ticket: Ticket
  ) => void;

  editingTicket: Ticket | null;
};

function TicketForm({
  onAddTicket,
  editingTicket,
}: TicketFormProps) {
  const [subject, setSubject] =
    useState<string>("");

  const [description, setDescription] =
    useState<string>("");

  const [priority, setPriority] =
    useState<TicketPriority>("low");

  const [status, setStatus] =
    useState<TicketStatus>("Open");

  const [error, setError] =
    useState<string>("");

  useEffect(() => {
    if (editingTicket) {
      setSubject(editingTicket.subject);

      setDescription(
        editingTicket.description
      );

      setPriority(editingTicket.priority);

      setStatus(editingTicket.status);
    }
  }, [editingTicket]);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (subject.trim() === "") {
      setError(
        "Ticket subject is required."
      );

      return;
    }

    setError("");

    const ticketData: Ticket = {
      id: editingTicket
        ? editingTicket.id
        : Date.now(),

      subject,
      description,
      priority,
      status,

      createdAt: editingTicket
        ? editingTicket.createdAt
        : new Date()
            .toISOString()
            .split("T")[0],
    };

    onAddTicket(ticketData);

    setSubject("");
    setDescription("");
    setPriority("low");
    setStatus("Open");
  };

  return (
    <section className="card">
      <h2>
        {editingTicket
          ? "Edit Ticket"
          : "Create Ticket"}
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Subject</label>

        <input
          type="text"
          className="input"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        />

        <label>Description</label>

        <textarea
          className="input"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <label>Priority</label>

        <select
          className="input"
          value={priority}
          onChange={(e) =>
            setPriority(
              e.target.value as TicketPriority
            )
          }
        >
          <option value="Low">Low</option>

          <option value="Medium">
            Medium
          </option>

          <option value="High">High</option>
        </select>

        <label>Status</label>

        <select
          className="input"
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value as TicketStatus
            )
          }
        >
          <option value="Open">Open</option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="Closed">
            Closed
          </option>
        </select>

        <p className="error">{error}</p>

        <div className="form-buttons">
          <button
            type="submit"
            className="btn"
          >
            {editingTicket
              ? "Update Ticket"
              : "Create Ticket"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default TicketForm;