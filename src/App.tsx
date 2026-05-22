import {
  Routes,
  Route,
  useNavigate,
} 
from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import TicketListPage from "./pages/TicketListPage";
import CreateTicketPage from "./pages/CreateTicketPage";

import { initialTickets } from "./data/mockTicket";

import type { Ticket } from "./types/ticket";

function App() {
  const navigate = useNavigate();
  const [tickets, setTickets] =
    useState<Ticket[]>(initialTickets);

  const [editingTicket, setEditingTicket] =
    useState<Ticket | null>(null);

  const handleDelete = (id: number) => {
    setTickets(
      tickets.filter(
        (ticket) => ticket.id !== id
      )
    );
  };

  const handleEdit = (ticket: Ticket) => {
  setEditingTicket(ticket);

  navigate("/create");
  };

  const handleAddOrUpdateTicket = (
    ticketData: Ticket
  ) => {
    const existingTicket = tickets.find(
      (ticket) =>
        ticket.id === ticketData.id
    );

    if (existingTicket) {
      setTickets(
        tickets.map((ticket) =>
          ticket.id === ticketData.id
            ? ticketData
            : ticket
        )
      );

      setEditingTicket(null);
    } else {
      setTickets([
        ...tickets,
        ticketData,
      ]);
    }
  };

  return (
    <>
      <Header />

      <Navbar />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <TicketListPage
                tickets={tickets}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            }
          />

          <Route
            path="/create"
            element={
              <CreateTicketPage
                onAddTicket={
                  handleAddOrUpdateTicket
                }
                editingTicket={
                  editingTicket
                }
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;