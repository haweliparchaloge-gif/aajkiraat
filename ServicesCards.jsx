// ServicesCards.jsx – drop into any React project

const services = [
  {
    id: 1,
    tag: "Testing",
    title: "Manual QA\nTesting",
    desc: "Thorough human-driven test cycles that catch edge cases no automation can predict. We validate every user flow.",
    accent: "#4f8ef7",
    bg: "linear-gradient(160deg,#1a1f3c 0%,#0f1630 100%)",
    border: "rgba(79,142,247,0.2)",
    glow: "rgba(79,142,247,0.35)",
    icon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    id: 2,
    tag: "Automation",
    title: "Automation\nTesting",
    desc: "Scalable test suites with Selenium, Playwright & Cypress — shipping faster with zero regressions.",
    accent: "#c084fc",
    bg: "linear-gradient(160deg,#1e1530 0%,#130d22 100%)",
    border: "rgba(147,51,234,0.2)",
    glow: "rgba(147,51,234,0.35)",
    icon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v4"/>
        <circle cx="8" cy="16" r="1" fill={c}/>
        <circle cx="16" cy="16" r="1" fill={c}/>
      </svg>
    ),
  },
  {
    id: 3,
    tag: "DevOps",
    title: "DevOps\nPipeline",
    desc: "CI/CD automation, container orchestration & infrastructure-as-code to accelerate your release velocity.",
    accent: "#fb923c",
    bg: "linear-gradient(160deg,#1f1500 0%,#150f00 100%)",
    border: "rgba(251,146,60,0.2)",
    glow: "rgba(251,146,60,0.35)",
    icon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z"/>
        <path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"/>
      </svg>
    ),
  },
  {
    id: 4,
    tag: "Content",
    title: "Content\nEngine",
    desc: "AI-powered pipelines that produce SEO-ready, brand-consistent copy at scale across every channel.",
    accent: "#34d399",
    bg: "linear-gradient(160deg,#0a1f18 0%,#041510 100%)",
    border: "rgba(52,211,153,0.2)",
    glow: "rgba(52,211,153,0.3)",
    icon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    id: 5,
    tag: "Cloud",
    title: "Cloud\nServices",
    desc: "AWS, GCP & Azure architecture, migration & cost optimisation — built for reliability at any scale.",
    accent: "#22d3ee",
    bg: "linear-gradient(160deg,#031b26 0%,#021218 100%)",
    border: "rgba(34,211,238,0.2)",
    glow: "rgba(34,211,238,0.3)",
    icon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
];

export default function ServicesCards() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        .svc-section * { box-sizing: border-box; font-family: 'Inter', sans-serif; }
        .svc-cards:has(.svc-card:hover) .svc-card { opacity: 0.35; filter: saturate(0.15) brightness(0.45); transform: scale(0.96); }
        .svc-cards:has(.svc-card:hover) .svc-card:hover { opacity: 1; filter: saturate(1) brightness(1); transform: translateY(-14px) scale(1.06); }
        .svc-card:hover .svc-icon { transform: rotate(-6deg) scale(1.15); }
        .svc-card:hover .svc-arrow { transform: translateX(5px); }
      `}</style>

      <section className="svc-section" style={{ background: "#0a0f1e", padding: "70px 24px", fontFamily: "'Inter',sans-serif" }}>
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#6c8ebf", marginBottom: "10px" }}>
          What We Do
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(26px,4vw,42px)", fontWeight: 800, color: "#fff", marginBottom: "6px", letterSpacing: "-0.5px" }}>
          Our <span style={{ color: "#4f8ef7" }}>Services</span>
        </h2>
        <p style={{ textAlign: "center", color: "#7a8aaa", fontSize: "14px", marginBottom: "52px" }}>Hover over a card to explore</p>

        <div className="svc-cards" style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>
          {services.map((s) => (
            <div key={s.id} className="svc-card" style={{
              position: "relative", width: "200px", minHeight: "310px", borderRadius: "20px",
              padding: "32px 22px 28px", display: "flex", flexDirection: "column", gap: "16px",
              cursor: "pointer", overflow: "hidden", background: s.bg,
              border: `1px solid ${s.border}`, opacity: 0.82, filter: "saturate(0.7) brightness(0.85)",
              transition: "transform 0.4s cubic-bezier(.22,.68,0,1.2), box-shadow 0.4s ease, filter 0.4s ease, opacity 0.4s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 30px 60px ${s.glow}, 0 0 0 1px ${s.border.replace('0.2','0.5')}`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              {/* Glow blob */}
              <div style={{ position: "absolute", inset: 0, borderRadius: "20px", background: `linear-gradient(135deg,${s.accent}22,transparent)`, pointerEvents: "none", zIndex: 0 }} />

              {/* Icon */}
              <div className="svc-icon" style={{
                width: "56px", height: "56px", borderRadius: "16px",
                background: `${s.accent}22`, display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", zIndex: 1, transition: "transform 0.4s cubic-bezier(.22,.68,0,1.2)", flexShrink: 0,
              }}>
                {s.icon(s.accent)}
              </div>

              {/* Tag */}
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px", background: `${s.accent}22`, color: s.accent, position: "relative", zIndex: 1, width: "fit-content" }}>
                {s.tag}
              </span>

              {/* Title */}
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#eef2ff", lineHeight: 1.3, whiteSpace: "pre-line", position: "relative", zIndex: 1 }}>
                {s.title}
              </h3>

              {/* Desc */}
              <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "#7a8aaa", flex: 1, position: "relative", zIndex: 1 }}>
                {s.desc}
              </p>

              {/* Arrow */}
              <div className="svc-arrow" style={{ width: "36px", height: "36px", borderRadius: "50%", background: `${s.accent}22`, color: s.accent, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, transition: "transform 0.3s ease" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
