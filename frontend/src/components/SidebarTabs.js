import React from 'react';
import './SidebarTabs.css';

const tabs = [
  { icon: '🏠', label: 'Home' },
  { icon: '🗓️', label: 'Calendar' },
  { icon: '📊', label: 'Stats' },
  { icon: '⭐', label: 'Favorites' },
  { icon: '⚙️', label: 'Settings' },
];

export default function SideBarTabs() {
    return (
        <div className="sidebar-tabs">
            {tabs.map((tab, idx) => (
                <div className="sidebar-tab" key={idx} title={tab.label}>
                    <span className = "sidebar-icon">{tab.icon}</span>
                </div>
            ))}
        </div>
    )
}
