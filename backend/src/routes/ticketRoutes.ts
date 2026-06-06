import express from "express";
import {
  getTickets,
  createTicket,
  deleteTicket,
  updateTicket, 
} from "../controllers/ticketController";

const router = express.Router();

router.get("/", getTickets);
router.post("/", createTicket);
router.delete("/:id", deleteTicket);
router.put("/:id", updateTicket);

export default router;