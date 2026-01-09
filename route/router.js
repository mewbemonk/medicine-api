import express, { Router } from 'express'
import api from '../api.js';

const router = Router();

router.get('/api',api)

export default router