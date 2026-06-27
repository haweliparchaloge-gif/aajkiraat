// WhyChooseUs.jsx  –  drop into any React project
// Replace the img src below with your own photo if needed.

export default function WhyChooseUs() {
  const items = [
    {
      side: "left",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
          <line x1="12" y1="22" x2="12" y2="15.5"/>
          <polyline points="22 8.5 12 15.5 2 8.5"/>
        </svg>
      ),
      title: "Building Across Different\nTech Stacks & Domains",
      desc: "We architect and deliver robust solutions spanning web, mobile, cloud, AI, and embedded systems — no stack is out of scope.",
    },
    {
      side: "left",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: "Multiple Solutions to\nSingle Vulnerability",
      desc: "Every challenge gets a layered defence — redundant, resilient fixes so no single point of failure brings your system down.",
    },
    {
      side: "right",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: "Cross-Domain\nDesigner",
      desc: "Our designers blend UX principles, brand identity, and domain knowledge to craft experiences that resonate across every industry.",
    },
  ];

  const leftItems  = items.filter(i => i.side === "left");
  const rightItems = items.filter(i => i.side === "right");

  const iconStyle = {
    minWidth: "58px", width: "58px", height: "58px",
    borderRadius: "50%",
    background: "#0d2b55",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 6px 20px rgba(13,43,85,0.3)",
  };

  const Item = ({ item }) => {
    const isLeft = item.side === "left";
    return (
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px",
        flexDirection: isLeft ? "row-reverse" : "row",
        textAlign: isLeft ? "right" : "left" }}>
        <div style={iconStyle}>{item.icon}</div>
        <div>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d2b55",
            lineHeight: 1.4, marginBottom: "6px", whiteSpace: "pre-line" }}>
            {item.title}
          </h3>
          <p style={{ fontSize: "13px", color: "#6b7a99", lineHeight: 1.65, maxWidth: "260px",
            marginLeft: isLeft ? "auto" : 0 }}>
            {item.desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section style={{
      position: "relative", minHeight: "620px",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "60px 40px 70px", overflow: "hidden",
      background: "#f5f7ff", fontFamily: "'Inter', sans-serif",
    }}>
      {/* Faded bg image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&auto=format&fit=crop&q=60')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.08, zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1100px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px,4vw,44px)",
          fontWeight: 800, color: "#0d2b55", marginBottom: "56px", letterSpacing: "-0.5px" }}>
          Why&nbsp; Choose&nbsp; Us
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 260px 1fr",
          alignItems: "center", minHeight: "420px" }}>

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "52px", paddingRight: "32px" }}>
            {leftItems.map((item, i) => <Item key={i} item={item} />)}
          </div>

          {/* Center */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "240px", height: "240px", borderRadius: "50%",
              background: "linear-gradient(175deg, #0d2b55 0%, #1a5276 45%, #2471a3 100%)",
              overflow: "hidden",
              boxShadow: "0 0 0 10px rgba(13,43,85,0.07), 0 0 0 20px rgba(13,43,85,0.04), 0 24px 60px rgba(13,43,85,0.25)",
            }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                alt="CrossTecch Professional"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "52px",
            paddingLeft: "32px", justifyContent: "center" }}>
            {rightItems.map((item, i) => <Item key={i} item={item} />)}
          </div>

        </div>
      </div>
    </section>
  );
}
