import React from 'react';
import './WeeklyLogPage.css';
import SidebarTabs from './SidebarTabs';
import MonthTabs from './MonthTabs';

export default function WeeklyLogPage({ children }) {
  /* explain code: what is children? it is a special prop in React
  1. Suppose you have component like this:
    <WeeklyLogPage>
        <div>Content goes here</div>
        <div>Another content</div>
    </WeeklyLogPage>

  2. Inside the WeeklyLogPage component, the `children` prop will be:
    <div>Content goes here</div>
    <div>Another content</div>
  */
  return (
    <div className="weekly-log-bg">
      <div className="weekly-log-notebook">
        <SidebarTabs />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
        <MonthTabs />
      </div>
    </div>
  );
}