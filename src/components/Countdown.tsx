'use client';

import { useEffect, useState } from 'react';

const target = Date.UTC(2026, 10, 18, 9, 30, 0);

function getRemaining() {
  const difference = Math.max(0, target - Date.now());
  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export function Countdown() {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setRemaining(getRemaining());
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="countdown" aria-label="Countdown to TARANG 2.0">
      <p className="eyebrow">Until we gather</p>
      <div className="countdown-grid">
        {Object.entries(remaining).map(([label, value]) => (
          <div className="countdown-unit" key={label}>
            <strong>{String(value).padStart(2, '0')}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
