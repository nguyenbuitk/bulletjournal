import React from 'react';
import './MonthTabs.css'

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export default function MonthTabs() {
    // This like HTML inside JS - JSX syntax. It returns the HTML structure your component will render
    return (
        <div className="month-tabs">
            {/* loops over the months array and return a <div> for each month.
            e.g.
                <div class="month-tabs">
                    <div class="month-tab" title="jan">jan</div>
                    <div class="month-tab" title="feb">feb</div>
                    <div class="month-tab" title="mar">mar</div>
                </div>
            */}
            {months.map((m, idx) => (
                <div className="month-tab" key={idx} title={m}>
                    {m}
                </div>
            ))}
        </div>
    )
}