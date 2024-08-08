import React, { useState, useRef } from 'react';
import '../styles/Slider.css';
import decor from '../assets/decor.jpeg'

const Slider = () => {
  const sliderRef = useRef(null);
  const formRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [left, setLeft] = useState(0);

  const onMouseDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const onMouseUp = () => {
    setMouseDownAt(0);
    sliderRef.current.style.userSelect = 'unset';
    sliderRef.current.style.cursor = 'unset';
    formRef.current.style.pointerEvents = 'unset';
    formRef.current.classList.remove('left');
    formRef.current.classList.remove('right');
  };

  const onMouseMove = (e) => {
    if (mouseDownAt === 0) return;

    sliderRef.current.style.userSelect = 'none';
    sliderRef.current.style.cursor = 'grab';
    formRef.current.style.pointerEvents = 'none';

    if (e.clientX > mouseDownAt) {
      formRef.current.classList.add('left');
      formRef.current.classList.remove('right');
    } else if (e.clientX < mouseDownAt) {
      formRef.current.classList.remove('left');
      formRef.current.classList.add('right');
    }

    const speed = 3;
    let leftTemporary = left + (e.clientX - mouseDownAt) / speed;
    let leftLimit = formRef.current.offsetWidth - sliderRef.current.offsetWidth / 2;

    if (leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit) {
      formRef.current.style.setProperty('--left', leftTemporary + 'px');
      setLeft(leftTemporary);
      setMouseDownAt(e.clientX);
    }
  };

  return (
    <div className="slider" ref={sliderRef} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
      <div className="title">Collection Photo</div>
      <div className="form" ref={formRef} style={{ '--left': '0px' }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="item" key={index}>
            <div className="content">
              <img src={`img/${index + 1}.jpg`} alt={`Image ${index + 1}`} />
              <div className="des">
                <div>Image {index + 1}</div>
                <button>more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
