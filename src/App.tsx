import { useEffect, useMemo, useState } from "react";

const QUIPS = [
  "Shipped it.",
  "Works on my machine.",
  "Definitely not a bug, it's a feature.",
  "Have you tried turning it off and on again?",
  "LGTM 🚀",
  "99 little bugs in the code…",
  "It compiles. Ship it.",
];

export default function App() {
  const [count, setCount] = useState(0);
  const [quip, setQuip] = useState(QUIPS[0]);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hue = useMemo(() => (count * 23) % 360, [count]);

  return (
    <main
      className="wrap"
      style={{
        background: `radial-gradient(1200px 600px at 20% 0%, hsl(${hue} 80% 22%), #0b0d12 60%)`,
      }}
    >
      <section className="card">
        <span className="badge">LIVE</span>
        <h1>
          test-project <span className="sparkle">✨</span>
        </h1>
        <p className="sub">
          A tiny Vite + React + TypeScript app, autodeployed to Netlify from GitHub.
        </p>

        <div className="row">
          <button
            className="btn"
            onClick={() => {
              setCount((c) => c + 1);
              setQuip(QUIPS[Math.floor(Math.random() * QUIPS.length)]);
            }}
          >
            Clicked {count} {count === 1 ? "time" : "times"}
          </button>
          <code className="clock">{now.toLocaleTimeString()}</code>
        </div>

        <p className="quip">“{quip}”</p>

        <footer>
          <a href="https://github.com/Seraphim-Labs/test-project" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <span>·</span>
          <span>built with Vite + React</span>
        </footer>
      </section>
    </main>
  );
}
