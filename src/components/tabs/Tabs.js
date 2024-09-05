import React, { useState } from "react";
import './tabs.css';

export default function Tabs() {
    const [currentTab, setCurrentTab] = useState('tab1');

    const handleClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className="wrapper">
            <div className="buttons">
                <button className={`btn ${currentTab === 'tab1' ? 'active' : ""}`} id="tab1" onClick={handleClick}>Tab 1</button>
                <button className={`btn ${currentTab === 'tab2' ? 'active' : ""}`} id="tab2" onClick={handleClick}>Tab 2</button>
                <button className={`btn ${currentTab === 'tab3' ? 'active' : ""}`} id="tab3" onClick={handleClick}>Tab 3</button>
            </div>
            <div className="contents">
                <div className={`content ${currentTab === 'tab1' ? 'active' : ""}`}>lorem ipsume 1</div>
                <div className={`content ${currentTab === 'tab2' ? 'active' : ""}`}>lorem ipsume 2</div>
                <div className={`content ${currentTab === 'tab3' ? 'active' : ""}`}>lorem ipsume 3</div>
            </div>
        </div>
    )
}