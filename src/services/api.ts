const BASE_URL = "http://localhost:5000";

export const getTickets = async () => {
  const res = await fetch("http://localhost:5000/tickets");
  return res.json();
};

export const createTicket = async (ticket: any) => {
  const res = await fetch("http://localhost:5000/tickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });

  return res.json();
};

export const deleteTicket = async (id: string) => {
  const res = await fetch(`${BASE_URL}/tickets/${id}`, {
    method: "DELETE"
  });

  return res.json();
};

export const updateTicket = async (id: string, ticket: any) => {
  const res = await fetch(`${BASE_URL}/tickets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });

  return res.json();
};