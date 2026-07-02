import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { about } from '../data/profile.js';
import { fadeUp, stagger, viewportOnce } from './motion.js';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="stat__number">
      {display}
      {suffix && <span className="stat__plus">{suffix}</span>}
    </span>
  );
}

export default function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p className="section__eyebrow" variants={fadeUp}>
            01 · Sobre
          </motion.p>
          <motion.h2 className="section__title" variants={fadeUp}>
            Quem é Felipe
          </motion.h2>

          <div className="about__grid">
            {about.paragraphs.map((text, i) => (
              <motion.p className="about__text" variants={fadeUp} key={i}>
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div className="stats" variants={fadeUp}>
            {about.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="stat__label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
