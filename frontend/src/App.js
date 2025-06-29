import React from 'react';
import WeeklyLogPage from './components/WeeklyLogPage';

function App() {
  return (
    <WeeklyLogPage>
      {/* Add next children after */}
      {/* explain code: flow render
        1. React sẽ truyền nội dung bên trong <div>...</div> thành prop `children` cho component Weekly log page
        2. Trong WeeklyLogPage.js, react sẽ render nội dung này vào vị trí `{children}` trong component
        3. Kết quả UI sẽ hiển thị nội dung này bên trong WeeklyLogPage
       */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: 200, color: '#bfa6a0' }}>
        <h2>Weekly Log UI Placeholder</h2>
        <p>Next: Add sidebar, month tabs, and notebook sections...</p>
      </div>
    </WeeklyLogPage>
  );
}

export default App; 