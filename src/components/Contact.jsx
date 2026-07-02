import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';
import { LinkedInIcon, GitHubIcon, MailIcon } from './Icons.jsx';
import { fadeUp, stagger, viewportOnce } from './motion.js';

const CARDS = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: '/in/felipe-lau',
    href: profile.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: profile.githubUser,
    href: profile.github,
    Icon: GitHubIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="hero__glow contact__glow" />
      <div className="container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p className="section__eyebrow" variants={fadeUp}>
            05 · Contato
          </motion.p>
          <motion.h2 className="section__title" variants={fadeUp}>
            Vamos conversar
          </motion.h2>
          <motion.p className="contact__desc" variants={fadeUp}>
            Aberto a novas oportunidades e conexões na área de Qualidade de
            Software. Me chama por qualquer um dos canais abaixo.
          </motion.p>

          <motion.div className="contact__cards" variants={fadeUp}>
            {CARDS.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                className="contact__card"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon size={22} />
                <div>
                  <span className="contact__label">{label}</span>
                  <span className="contact__value">{value}</span>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
