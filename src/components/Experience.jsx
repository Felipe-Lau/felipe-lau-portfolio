import { motion } from 'framer-motion';
import { experience } from '../data/profile.js';
import { formatPeriod, formatDuration, companyRange } from '../utils/dates.js';
import { fadeUp, fadeLeft, stagger, viewportOnce } from './motion.js';

export default function Experience() {
  return (
    <section className="section section--alt" id="experiencia">
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p className="section__eyebrow" variants={fadeUp}>
            02 · Trajetória
          </motion.p>
          <motion.h2 className="section__title" variants={fadeUp}>
            Experiência
          </motion.h2>
        </motion.div>

        <div className="timeline">
          {experience.map((job) => {
            const range = companyRange(job.roles);
            return (
              <motion.div
                className="timeline__item"
                key={job.company}
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <div className="timeline__head">
                    <h3>{job.company}</h3>
                    <span className="timeline__period">
                      {formatPeriod(range.start, range.end)} · {formatDuration(range.start, range.end)}
                    </span>
                  </div>

                  {job.roles.map((role, i) => (
                    <div className={i > 0 ? 'timeline__sub' : ''} key={role.title}>
                      <p className="timeline__role">
                        {role.title}{' '}
                        {job.roles.length > 1 && (
                          <span className="timeline__period">
                            {formatPeriod(role.start, role.end)} · {formatDuration(role.start, role.end)}
                          </span>
                        )}
                      </p>
                      <ul className="timeline__list">
                        {role.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
