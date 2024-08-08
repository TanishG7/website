import React from 'react';
import '../styles/Sidebar.css';
import Cursor from './Cursor';
import Timeline from './Timeline';

const Sidebar = ({ isOpen, onClose, timeline }) => {
  return (
    <>
      <Cursor />
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="clsbutton" onClick={onClose}>X</button>
        <h1>Detailed Timeline</h1>
        <Timeline events={timeline} />
      </div>
    </>
  );
};

export default Sidebar;
