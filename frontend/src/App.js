import React from 'react';
import WeeklyLogPage from './components/WeeklyLogPage';

function App() {
  return (
    <WeeklyLogPage>
      {/* Add next children after */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: 200, color: '#bfa6a0' }}>
        <h2>Weekly Log UI Placeholder</h2>
        <p>Next: Add sidebar, month tabs, and notebook sections...</p>
      </div>
    </WeeklyLogPage>
  );
}

export default App; 