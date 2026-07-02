import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </span>
        <a href="#top" className="footer__top">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
