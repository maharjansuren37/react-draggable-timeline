// App.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';
import './app.css'; // Assuming you have CSS styles defined here
import img1 from './assets/1.jpg';

gsap.registerPlugin(Draggable);

const DraggableComp = () => {
  const timelineRef = useRef(null);
  const scrollerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const scroller = scrollerRef.current;
    const container = containerRef.current;

    const timelineWidth = timeline.offsetWidth;
    const scrollerWidth = scroller.offsetWidth;
    const gap = parseInt(window.getComputedStyle(document.body).fontSize);
    const maxDragX = timelineWidth - scrollerWidth - 2 * gap;

    // Create markers
    for (let i = 0; i < 100; i++) {
      const marker = document.createElement('div');
      marker.classList.add('marker');
      timeline.appendChild(marker);
    }

    Draggable.create(scroller, {
      type: 'x',
      bounds: {
        minX: gap,
        maxX: timelineWidth - scrollerWidth - gap,
      },
      onDrag: function () {
        const progress = (this.x - gap) / maxDragX;
        const containerX = -400 * (timelineWidth / 100) * progress;
        gsap.to(container, {
          x: containerX,
          duration: 1,
          ease: 'power3.out',
        });
      },
    });
  }, []);

  return (
    <div>
      <div className="container" ref={containerRef}>
      <img src={img1} />
        <section id="section-1">
          <h1>lorem lipsum</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi tempora eum. Quod voluptates recusandae, similique libero, sunt totam minus est quam vitae, explicabo obcaecati nostrum dolorum ipsam corrupti facere.</p>
        </section>
        <section id="section-2">
          <div><img src="/assets/1.jpg" alt="" /></div>
          <div><img src="/assets/2.jpg" alt="" /></div>
          <div><img src="/assets/3.jpg" alt="" /></div>
        </section>
        <section id="section-3">
          <div className="img"><img src="../../assets/splash-img/adrien-olichon-OMfHdfegWb8-unsplash.jpg" alt="" /></div>
          <div className="img"><img src="../../assets/splash-img/samsung-memory-yDfEf2xrM7I-unsplash.jpg" alt="" /></div>
          <div className="img"><img src="../../assets/splash-img/the-prototype-8QSenw7z7yI-unsplash.jpg" alt="" /></div>
        </section>
        <section id="section-4">
          <h1>lorem lipsum</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi tempora eum. Quod voluptates recusandae, similique libero, sunt totam minus est quam vitae, explicabo obcaecati nostrum dolorum ipsam corrupti facere.</p>
        </section>
        <section id="section-5">
          <div className="img"><img src="../../assets/splash-img/adrien-olichon-OMfHdfegWb8-unsplash.jpg" alt="" /></div>
          <div className="img"><img src="../../assets/splash-img/samsung-memory-yDfEf2xrM7I-unsplash.jpg" alt="" /></div>
          <div className="img"><img src="../../assets/splash-img/the-prototype-8QSenw7z7yI-unsplash.jpg" alt="" /></div>
        </section>
      </div>

      <div className="timeline" ref={timelineRef}>
        <div className="scroller" ref={scrollerRef}><p>[<span>Drag</span>]</p></div>
      </div>
    </div>
  );
};

export default DraggableComp;
