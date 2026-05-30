import express from "express";
import {
  getTickets,
  createTicket,
  deleteTicket,
} from "../controllers/ticketController";

const router = express.Router();

router.get("/", getTickets);
router.post("/", createTicket);
router.delete("/:id", deleteTicket);

export default router;