import { useRef } from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/profile.js';
import { GroupIcon } from './Icons.jsx';
import { fadeUp, stagger, viewportOnce } from './motion.js';

const TILT_MAX = 6;

function TiltCard({ children }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${px * TILT_MAX}deg) rotateX(${-py * TILT_MAX}deg) translateY(-2px)`;
  }

  function onLeave() {
    ref.current.style.transform = '';
  }

  return (
    <div ref={ref} className="skills__group" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p className="section__eyebrow" variants={fadeUp}>
            03 · Skills
          </motion.p>
          <motion.h2 className="section__title" variants={fadeUp}>
            Competências técnicas
          </motion.h2>

          <div className="skills__grid">
            {skillGroups.map((group) => (
              <motion.div variants={fadeUp} key={group.title}>
                <TiltCard>
                  <div className="skills__head">
                    <span className="skills__icon">
                      <GroupIcon name={group.icon} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="tags">
                    {group.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
