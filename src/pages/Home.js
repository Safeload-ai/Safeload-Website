import React from 'react';
import { Link } from 'react-router-dom';
import CTABand from '../components/CTABand';

const statusLabels = [
  'Origin release verified',
  'Custody monitored',
  'Destination acceptance verified',
];

const todaySteps = [
  { role: 'Shipper', event: 'Order', detail: 'PO in ERP' },
  { role: 'Broker', event: 'Booking', detail: 'Rate confirmation' },
  { role: 'Carrier', event: 'Movement', detail: 'Tracking pings' },
  { role: 'Receiver', event: 'Delivery', detail: 'Paper POD' },
];

const safeloadSteps = ['Shipper', 'Broker', 'Carrier', 'Receiver'];

const pillars = [
  { title: 'Authorize', desc: 'Define who is permitted to handle a shipment and what conditions must be met.' },
  { title: 'Verify', desc: 'Confirm identity, equipment, and shipment information at critical custody events.' },
  { title: 'Monitor', desc: 'Detect movement anomalies, mismatches, and unexpected changes.' },
  { title: 'Control', desc: 'Require appropriate approval before material custody instructions change.' },
  { title: 'Record', desc: 'Connect custody events, documents, approvals, and exceptions into one history.' },
];

const journey = [
  { title: 'Authorize', when: 'Before pickup' },
  { title: 'Release', when: 'At origin' },
  { title: 'Monitor', when: 'In transit' },
  { title: 'Accept', when: 'At destination' },
  { title: 'Record', when: 'Across the journey' },
];

const roles = [
  { name: 'Shippers', tag: 'Protect what you ship', photo: 'High-value distribution center, loading bays', desc: 'Set custody requirements across your logistics network. Strengthen control over who collects your freight and who accepts it at destination.', cta: 'Explore for Shippers' },
  { name: 'Freight brokers', tag: 'Connect booking to execution', photo: 'Freight dispatch / brokerage operations desk', desc: 'Verify people and equipment executing the load, strengthen handoff authorization, and give customers clearer custody evidence.', cta: 'Explore for Brokers' },
  { name: 'Forwarders & 3PLs', tag: 'Connect custody across partners', photo: 'Intermodal yard or cross-dock', desc: 'Coordinate verification and handoff evidence across facilities, carriers, and transportation legs.', cta: 'Explore for Logistics Providers' },
];

const opsFeatures = [
  { title: 'Mobile-first verification', desc: 'Simple workflows for drivers and receiving parties.' },
  { title: 'Fast by design', desc: 'Verification designed to minimize operational delays.' },
  { title: 'Works alongside your systems', desc: 'Built to complement existing transportation workflows.' },
  { title: 'No unnecessary onboarding', desc: 'App-light participation for external logistics partners.' },
];

const visionChain = ['Source', 'Produce', 'Store', 'Move', 'Receive'];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-inner" style={{ alignItems: 'center', position: 'relative' }}>
          <div className="hero-copy" style={{ flex: '0 1 660px' }}>
            <div className="hero-eyebrow-row">
              <span className="sl-live" aria-hidden="true" />
              <span className="eyebrow">The digital chain of custody for freight</span>
            </div>

            <h1 style={{ margin: 0, fontSize: 76, lineHeight: '78px', fontWeight: 500, letterSpacing: '-0.03em' }}>
              Every handoff verified. <span style={{ color: 'var(--accent)' }}>Every change authorized.</span>
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560 }}>
              <p style={{ margin: 0, fontSize: 18, lineHeight: '28px', color: '#d4d4d4' }}>
                Freight moves through multiple hands. SafeLoad connects authorization, identity, equipment, documents, and custody evidence&mdash;so every critical transfer can be verified from origin to destination.
              </p>
              <p style={{ margin: 0, fontSize: 20, lineHeight: '30px', color: '#ffffff', fontWeight: 500 }}>
                One platform. Multiple parties. One accountable chain of custody.
              </p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: '24px', color: 'var(--on-dark-muted)' }}>
                Built for shippers, freight brokers, forwarders, and 3PLs.
              </p>
            </div>

            <div className="hero-actions">
              <Link to="/partners" className="btn btn-light">
                Become a Design Partner <span className="sl-arr" aria-hidden="true">→</span>
              </Link>
              <Link to="/platform" className="btn btn-outline">
                Explore the Platform
              </Link>
            </div>
          </div>

          <div style={{ flex: '1 1 420px', minWidth: 0 }}>
            <svg viewBox="0 0 520 420" width="100%" height="420" aria-hidden="true" style={{ display: 'block', overflow: 'visible' }}>
              <path d="M40 360 L140 300 L260 300 L340 220 L420 160 L480 60" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeDasharray="4 6" />
              <path className="sl-draw" pathLength="1" d="M40 360 L140 300 L260 300 L340 220 L420 160 L480 60" fill="none" stroke="var(--accent)" strokeWidth="2" />

              <circle r="3" fill="#a3a3a3">
                <animateMotion dur="9s" repeatCount="indefinite" path="M40 360 L140 300 L260 300 L340 220 L420 160 L480 60" />
              </circle>
              <circle r="3" fill="#a3a3a3">
                <animateMotion dur="13s" repeatCount="indefinite" begin="2s" path="M40 360 L140 300 L260 300 L340 220 L420 160 L480 60" />
              </circle>

              <g>
                <rect className="sl-ping" x="34" y="354" width="12" height="12" fill="none" stroke="var(--accent)" strokeWidth="1" />
                <rect x="34" y="354" width="12" height="12" fill="var(--accent)" />
                <text x="54" y="368" fill="#ffffff" fontFamily="'JetBrains Mono', monospace" fontSize="12" letterSpacing="1">{statusLabels[0]}</text>
              </g>
              <g>
                <rect className="sl-ping" x="334" y="214" width="12" height="12" fill="none" stroke="var(--accent)" strokeWidth="1" style={{ animationDelay: '1.2s' }} />
                <rect x="334" y="214" width="12" height="12" fill="#000000" stroke="var(--accent)" strokeWidth="2" />
                <text x="354" y="228" fill="#ffffff" fontFamily="'JetBrains Mono', monospace" fontSize="12" letterSpacing="1">{statusLabels[1]}</text>
              </g>
              <g>
                <rect x="474" y="54" width="12" height="12" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />
                <text x="466" y="42" textAnchor="end" fill="#ffffff" fontFamily="'JetBrains Mono', monospace" fontSize="12" letterSpacing="1">{statusLabels[2]}</text>
              </g>
            </svg>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, paddingBottom: 24 }}>
          <span className="eyebrow">Scroll</span>
          <span aria-hidden="true" style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
            <span className="sl-cue" style={{ position: 'absolute', inset: 0, background: 'var(--accent)' }} />
          </span>
        </div>
        <span className="eyebrow" style={{ position: 'absolute', right: 32, bottom: 28 }}>Conceptual illustration</span>
      </section>

      {/* 02 — The custody gap */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">02 &mdash; The custody gap</span>
            <h2 className="h-section">Freight is tracked. Custody is fragmented.</h2>
            <p className="body-lg">
              Today's supply chains rely on disconnected systems to book, move, monitor, and deliver freight. But tracking a shipment doesn't necessarily establish who was authorized to take it, whether a handoff was approved, or who accepted it at delivery.
            </p>
            <p className="body-md" style={{ color: 'var(--ink)' }}>
              The gap isn't simply visibility. It's knowing whether custody changed the way it was supposed to.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>Today</span>
              <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
                {todaySteps.map((s) => (
                  <div key={s.role} style={{ padding: '18px 20px' }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{s.role}</div>
                    <div className="body-md" style={{ fontSize: 13 }}>{s.event} &middot; {s.detail}</div>
                  </div>
                ))}
              </div>
              <p className="body-md" style={{ fontSize: 13, marginTop: 14 }}>
                <strong style={{ color: 'var(--ink)' }}>Authorization gap</strong> &mdash; evidence sits in separate systems.
              </p>
            </div>

            <div>
              <span className="eyebrow accent" style={{ marginBottom: 16, display: 'block' }}>With SafeLoad</span>
              <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
                {safeloadSteps.map((s) => (
                  <div key={s} style={{ padding: '18px 20px', fontSize: 14, fontWeight: 600 }}>{s}</div>
                ))}
              </div>
              <p className="body-md" style={{ fontSize: 13, marginTop: 14 }}>
                <strong style={{ color: 'var(--brand-green)' }}>SafeLoad custody record</strong> &mdash; Authorization &middot; Verification &middot; Evidence &middot; Exceptions &middot; Acceptance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — The SafeLoad answer */}
      <section className="section subtle">
        <div className="container">
          <div className="section-head">
            <span className="section-num">03 &mdash; The SafeLoad answer</span>
            <h2 className="h-section">Control custody. Not just movement.</h2>
            <p className="body-lg">
              SafeLoad is designed to connect the people, equipment, shipment details, and decisions behind each critical freight handoff. The shipment moves. Accountability moves with it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {pillars.map((p, i) => (
              <div key={p.title} className="card" style={{ background: '#fff' }}>
                <span className="section-num">0{i + 1}</span>
                <h3 className="h-card" style={{ marginBottom: 8 }}>{p.title}</h3>
                <p className="body-md" style={{ fontSize: 13.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — How it works */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">04 &mdash; How it works</span>
            <h2 className="h-section">One shipment. A connected chain of custody.</h2>
            <Link to="/how-it-works" className="eyebrow accent">See how it works <span className="sl-arr" aria-hidden="true">→</span></Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            {journey.map((j, i) => (
              <div key={j.title} className="card">
                <span className="section-num">0{i + 1}</span>
                <h3 className="h-card" style={{ marginBottom: 4 }}>{j.title}</h3>
                <p className="body-md" style={{ fontSize: 13 }}>{j.when}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Controlled exceptions */}
      <section className="section on-dark">
        <div className="container">
          <div className="section-head">
            <span className="section-num" style={{ color: 'var(--on-dark-muted)' }}>05 &mdash; Controlled exceptions</span>
            <h2 className="h-section">Changes happen. Unauthorized changes shouldn't.</h2>
            <p className="body-lg">
              A driver gets replaced. A trailer changes. A destination is amended. A seal doesn't match. These events may be legitimate&mdash;but they should never silently rewrite authorized custody instructions.
            </p>
            <p className="body-md">
              Guardian AI is being developed to investigate exceptions and support controlled decisions. Material changes remain subject to the authorization rules established by responsible parties.
            </p>
            <Link to="/guardian-ai" className="eyebrow accent">How Guardian AI works <span className="sl-arr" aria-hidden="true">→</span></Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {['Material change detected', 'Affected authorization held', 'Guardian AI reviews evidence', 'Approved or escalated'].map((t, i) => (
              <div key={t} className="card" style={{ background: 'var(--surface-dark-alt)', borderColor: 'var(--line-dark)' }}>
                <span className="section-num" style={{ color: 'var(--on-dark-muted)' }}>0{i + 1}</span>
                <p style={{ fontSize: 14, fontWeight: 500 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Who it's for */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">06 &mdash; Who it's for</span>
            <h2 className="h-section">Different roles. One standard of accountability.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {roles.map((r) => (
              <div key={r.name}>
                <div className="photo-placeholder" style={{ marginBottom: 18 }}>Photo &middot; {r.photo}</div>
                <span className="eyebrow accent">{r.name}</span>
                <h3 className="h-card" style={{ margin: '6px 0 10px' }}>{r.tag}</h3>
                <p className="body-md" style={{ fontSize: 13.5, marginBottom: 14 }}>{r.desc}</p>
                <Link to="/solutions" className="eyebrow accent">{r.cta} <span className="sl-arr" aria-hidden="true">→</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Built for operations */}
      <section className="section subtle">
        <div className="container">
          <div className="section-head center">
            <span className="section-num">07 &mdash; Built for operations</span>
            <h2 className="h-section">Stronger controls shouldn't mean harder work.</h2>
            <p className="body-lg">SafeLoad is designed around the realities of transportation operations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {opsFeatures.map((f) => (
              <div key={f.title} className="card">
                <h3 className="h-card" style={{ fontSize: 15, marginBottom: 6 }}>{f.title}</h3>
                <p className="body-md" style={{ fontSize: 12.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Long-term vision */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">08 &mdash; Long-term vision</span>
            <h2 className="h-section">From freight custody to supply-chain trust.</h2>
            <p className="body-lg">
              Every product moves through suppliers, manufacturers, transportation partners, facilities, and customers. Every transfer creates a new question of authorization and accountability.
            </p>
            <p className="body-md">
              SafeLoad's vision is to connect those moments into a trusted digital chain of custody&mdash;supporting stronger governance, clearer compliance evidence, and more intelligent supply-chain operations. We're starting with freight. The opportunity extends wherever goods change hands.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            {visionChain.map((v, i) => (
              <React.Fragment key={v}>
                <div className="card" style={{ flex: '1 1 120px', textAlign: 'center', padding: '20px 16px' }}>
                  {i === 2 && <span className="eyebrow accent" style={{ display: 'block', marginBottom: 6 }}>Starting here</span>}
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{v}</span>
                </div>
                {i < visionChain.length - 1 && <span aria-hidden="true" style={{ color: 'var(--ink-faint)' }}>&rarr;</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="body-md" style={{ fontSize: 13, marginTop: 16 }}>Shared custody history &mdash; one record wherever goods change hands.</p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
