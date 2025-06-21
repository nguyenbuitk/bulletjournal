import express from 'express';
import { createDailyLog, getDailyLog, updateDailyLog, deleteDailyLog } from '../controllers/dailyLogController.js';
const router = express.Router();

// api/daily-logs
router.post('/', createDailyLog);
router.get('/', getDailyLog);
router.put('/:id', updateDailyLog);
router.delete('/:id', deleteDailyLog)

export default router;