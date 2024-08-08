import React, { useEffect, useState } from 'react';
import '../styles/Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  let timeout;

  useEffect(() => {
    const updatePosition = (x, y) => {
      setPosition({ x, y });
      setVisible(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);
    };

    const mouseMoveHandler = (e) => {
      const { clientX: x, clientY: y } = e;
      updatePosition(x, y);
    };

    const scrollHandler = () => {
      const x = position.x;
      const y = position.y + window.scrollY;
      updatePosition(x, y);
    };

    const mouseOutHandler = () => {
      setVisible(false);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('scroll', scrollHandler);
    document.addEventListener('mouseout', mouseOutHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('scroll', scrollHandler);
      document.removeEventListener('mouseout', mouseOutHandler);
    };
  }, [position.x, position.y]);

  const cursorStyle = {
    top: `${position.y}px`,
    left: `${position.x}px`,
    display: visible ? 'block' : 'none',
  };

  return <div className='cursor' style={cursorStyle}></div>;
};

export default Cursor;
