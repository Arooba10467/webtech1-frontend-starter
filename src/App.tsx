import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import TicketListPage from "./pages/TicketListPage";
import CreateTicketPage from "./pages/CreateTicketPage";

import {
  getTickets,
  deleteTicket,
  createTicket,
} from "./services/api";

import type { Ticket } from "./types/ticket";

function App() {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);

  // GET ALL TICKETS (READ)
  const loadTickets = async () => {
    try {
      const data = await getTickets();
      setTickets(data);
    } catch (error) {
      console.error("Failed to load tickets:", error);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);

  // DELETE TICKET
  const handleDelete = async (id: string) => {
    try {
      await deleteTicket(id);
      loadTickets();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // EDIT (just opens form with data)
  const handleEdit = (ticket: Ticket) => {
    setEditingTicket(ticket);
    navigate("/create");
  };

  // CREATE / UPDATE TICKET
  const handleAddOrUpdateTicket = async (ticketData: Ticket) => {
    try {
      await createTicket(ticketData);
      setEditingTicket(null);
      navigate("/");
      loadTickets();
    } catch (error) {
      console.error("Save failed:", error);
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
                onAddTicket={handleAddOrUpdateTicket}
                editingTicket={editingTicket}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;