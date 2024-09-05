// App.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';
import '../../app.css'; // Assuming you have CSS styles defined here

gsap.registerPlugin(Draggable);

const DraggableComp = () => {
  const timelineRef = useRef(null);
  const scrollerRef = useRef(null);
  const containerRef = useRef(null);

  console.log(timelineRef.current);

  // useEffect(() => {
  //   const timeline = timelineRef.current;
  //   const scroller = scrollerRef.current;
  //   const container = containerRef.current;

  //   const timelineWidth = timeline.offsetWidth;
  //   const scrollerWidth = scroller.offsetWidth;
  //   const gap = parseInt(window.getComputedStyle(document.body).fontSize);
  //   const maxDragX = timelineWidth - scrollerWidth - 2 * gap;

  //   // Create markers
  //   for (let i = 0; i < 100; i++) {
  //     const marker = document.createElement('div');
  //     marker.classList.add('marker');
  //     timeline.appendChild(marker);
  //   }

  //   Draggable.create(scroller, {
  //     type: 'x',
  //     bounds: {
  //       minX: gap,
  //       maxX: timelineWidth - scrollerWidth - gap,
  //     },
  //     onDrag: function () {
  //       const progress = (this.x - gap) / maxDragX;
  //       const containerX = -400 * (timelineWidth / 100) * progress;
  //       gsap.to(container, {
  //         x: containerX,
  //         duration: 1,
  //         ease: 'power3.out',
  //       });
  //     },
  //   });
  // }, []);

  return (
    <div>
      <div className="container" ref={containerRef}>
      </div>
      <div className="timeline" ref={timelineRef}>
        <div className="scroller" ref={scrollerRef}><p>[<span>Drag</span>]</p></div>
      </div>
    </div>
  );
};

export default DraggableComp;
