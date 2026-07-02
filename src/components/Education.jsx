import { motion } from 'framer-motion';
import { education } from '../data/profile.js';
import { fadeUp, stagger, viewportOnce } from './motion.js';

export default function Education() {
  return (
    <section className="section section--alt" id="formacao">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p className="section__eyebrow" variants={fadeUp}>
            04 · Formação
          </motion.p>
          <motion.h2 className="section__title" variants={fadeUp}>
            Formação acadêmica
          </motion.h2>

          <div className="education">
            {education.map((item) => (
              <motion.div className="education__item" variants={fadeUp} key={item.degree}>
                <div className="education__mark" />
                <div>
                  <h3>{item.degree}</h3>
                  <p className="education__school">{item.school}</p>
                  <p className="education__period">{item.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
