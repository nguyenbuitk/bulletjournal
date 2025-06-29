import axios from 'axios';

const API_URL = 'http://localhost:5000/api/daily-logs';
 
export const getDailyLogs = () => axios.get(API_URL);
export const createDailyLog = (data) => axios.post(API_URL, data);
export const updateDailyLog = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteDailyLog = (id) => axios.delete(`${API_URL}/${id}`); 