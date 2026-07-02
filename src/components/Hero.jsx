import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';
import { useTypewriter } from '../hooks/useTypewriter.js';
import { LinkedInIcon, GitHubIcon, MailIcon } from './Icons.jsx';
import { fadeUp, stagger } from './motion.js';

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section className="hero" id="top">
      <div className="hero__bg-grid" />
      <div className="hero__glow" />

      <motion.div
        className="container hero__inner"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero__badge" variants={fadeUp}>
          <span className="hero__badge-dot" />
          Disponível para novas conexões
        </motion.div>

        <motion.p className="hero__eyebrow" variants={fadeUp}>
          Olá, meu nome é
        </motion.p>

        <motion.h1 className="hero__name" variants={fadeUp}>
          {profile.name}
        </motion.h1>

        <motion.h2 className="hero__role" variants={fadeUp}>
          <span className="hero__typed">{typed}</span>
          <span className="cursor-blink">|</span>
        </motion.h2>

        <motion.p className="hero__desc" variants={fadeUp}>
          Pós-graduado em Engenharia da Qualidade de Software, atuo garantindo
          que produtos digitais funcionem como prometido — planejando
          estratégias de teste e automatizando fluxos web, API e mobile com{' '}
          <strong>Cypress</strong>, <strong>Playwright</strong> e{' '}
          <strong>Appium</strong>.
        </motion.p>

        <motion.div className="hero__actions" variants={fadeUp}>
          <a href="#experiencia" className="btn btn--primary">
            Ver experiência
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            GitHub
          </a>
        </motion.div>

        <motion.div className="hero__socials" variants={fadeUp}>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </motion.div>
      </motion.div>

      <a href="#sobre" className="scroll-indicator" aria-label="Rolar para baixo">
        <span></span>
      </a>
    </section>
  );
}
