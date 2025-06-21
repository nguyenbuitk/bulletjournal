import DailyLog from "../models/DailyLog.js";

export const createDailyLog = async (req, res) => {
  try {
    const log = new DailyLog(req.body);
    console.log(log);
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getDailyLog = async (req, res) => {
  try {
    const log = await DailyLog.find();
    res.json(log);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const updateDailyLog = async (req, res) => {
  try {
    const log = await DailyLog.findByIdAndUpdate(req.params.id, req.body);
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteDailyLog = async (req, res) => {
  try {
    await DailyLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Delete' });
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}