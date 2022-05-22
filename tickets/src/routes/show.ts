import express, { Request, Response } from 'express';
import { NotFoundError } from '@vitatickets/common';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response