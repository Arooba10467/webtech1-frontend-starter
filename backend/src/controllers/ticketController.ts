import { Request, Response } from "express";
import Ticket from "../models/Ticket";

// GET all tickets
export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tickets" });
  }
};

// POST ticket
export const createTicket = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket" });
  }
};

// DELETE ticket
export const deleteTicket = async (req: Request, res: Response) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.json({ message: "Ticket deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting ticket" });
  }
};
// update
export const updateTicket = async (req: Request, res: Response) => {
  try {
    const updated = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating ticket" });
  }
};