import React, { useEffect, useState } from 'react';
import { getDailyLogs, createDailyLog, updateDailyLog, deleteDailyLog } from '../services/dailyLogService';

const emptyLog = { date: '', content: '', tags: '', priority: 'medium' };

export default function DailyLogList() {
	// useState is a function that allows you to declare a state variable and a function to update it within
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState(emptyLog);
  const [editingId, setEditingId] = useState(null);

  const fetchLogs = async () => {
    const res = await getDailyLogs();
    setLogs(res.data);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editingId) {
      await updateDailyLog(editingId, { ...form, tags: form.tags.split(',').map(t => t.trim()) });
    } else {
      await createDailyLog({ ...form, tags: form.tags.split(',').map(t => t.trim()) });
    }
    setForm(emptyLog);
    setEditingId(null);
    fetchLogs();
  };

  const handleEdit = log => {
    setForm({ ...log, tags: log.tags.join(', ') });
    setEditingId(log._id);
  };

  const handleDelete = async id => {
    await deleteDailyLog(id);
    fetchLogs();
  };

  return (
    <div>
      <h2>Daily Logs</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="content" placeholder="Content" value={form.content} onChange={handleChange} required />
        <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button type="button" onClick={() => { setForm(emptyLog); setEditingId(null); }}>Cancel</button>}
      </form>
      <ul>
        {logs.map(log => (
          <li key={log._id} style={{ marginBottom: 10 }}>
            <b>{new Date(log.date).toLocaleDateString()}</b>: {log.content} [Tags: {log.tags.join(', ')}] [Priority: {log.priority}]
            <button onClick={() => handleEdit(log)} style={{ marginLeft: 10 }}>Edit</button>
            <button onClick={() => handleDelete(log._id)} style={{ marginLeft: 5 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
} 