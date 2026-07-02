import { marqueeItems } from '../data/profile.js';

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={i} className="marquee__item">
            {item} <span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
