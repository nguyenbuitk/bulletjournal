import React from 'react';
import DailyLogList from './components/DailyLogList';

function App() {
  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Bullet Journal</h1>
      <DailyLogList />
    </div>
  );
}

export default App; 