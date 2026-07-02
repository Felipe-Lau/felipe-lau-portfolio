import { useEffect, useState } from 'react';

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_TIME = 1800;

export function useTypewriter(words) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = false;
    let timer;

    function tick() {
      const current = words[wordIndex];

      if (!deleting) {
        charIndex++;
        if (charIndex >= current.length) {
          setText(current);
          deleting = true;
          timer = setTimeout(tick, HOLD_TIME);
          return;
        }
      } else {
        charIndex--;
        if (charIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setText(current.slice(0, Math.max(charIndex, 0)));
      timer = setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
    }

    timer = setTimeout(tick, HOLD_TIME);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
