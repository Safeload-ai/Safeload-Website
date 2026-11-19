import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  {
    title: 'Authorize',
    desc: 'Define who is permitted to handle a shipment and what conditions must be met.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z" stroke="#000" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="#000" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Verify',
    desc: 'Confirm identity, equipment, and shipment information at critical custody events.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" stroke="#000" strokeWidth="1.5" />
        <circle cx="9" cy="11" r="2.5" stroke="#000" strokeWidth="1.5" />
        <path d="M5.5 17c.6-1.8 2-2.8 3.5-2.8s2.9 1 3.5 2.8M14 10h4M14 13h3" stroke="#000" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Monitor',
    desc: 'Detect movement anomalies, mismatches, and unexpected changes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s-6-5.5-6-10a6 6 0 0112 0c0 4.5-6 10-6 10z" stroke="#000" strokeWidth="1.5" />
        <rect x="10.5" y="9.5" width="3" height="3" stroke="#000" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Control',
    desc: 'Require appropriate approval before material custody instructions change.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="10" width="14" height="11" stroke="#000" strokeWidth="1.5" />
        <path d="M8 10V7a4 4 0 018 0v3M12 14v3" stroke="#000" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Record',
    desc: 'Connect custody events, documents, approvals, and exceptions into one history.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 3h14v18H5z" stroke="#000" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="#000" strokeWidth="1.5" />
      </svg>
    ),
  },
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
  {
    title: 'Mobile-first verification', desc: 'Simple workflows for drivers and receiving parties.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" stroke="#000" strokeWidth="1.5" /><path d="M11 18h2" stroke="#000" strokeWidth="1.5" /></svg>,
  },
  {
    title: 'Fast by design', desc: 'Verification designed to minimize operational delays.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="13" r="8" stroke="#000" strokeWidth="1.5" /><path d="M12 9v4l3 2M10 2h4" stroke="#000" strokeWidth="1.5" /></svg>,
  },
  {
    title: 'Works alongside your systems', desc: 'Built to complement existing transportation workflows.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 14l4-4M8.5 11.5l-2 2a3 3 0 004.2 4.2l2-2M15.5 12.5l2-2a3 3 0 00-4.2-4.2l-2 2" stroke="#000" strokeWidth="1.5" /></svg>,
  },
  {
    title: 'No unnecessary onboarding', desc: 'App-light participation for external logistics partners.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h11M11 8l4 4-4 4M15 4h5v16h-5" stroke="#000" strokeWidth="1.5" /></svg>,
  },
];

const visionChain = ['Source', 'Produce', 'Store', 'Move', 'Receive'];

function PhotoPlaceholder({ caption }) {
  return (
    <div className="photo-placeholder sl-thumb" style={{ width: '100%', height: '100%', aspectRatio: 'auto', border: 'none' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" stroke="#8f8f8f" strokeWidth="1.5" />
        <path d="M8 7l1.5-3h5L16 7" stroke="#8f8f8f" strokeWidth="1.5" />
        <circle cx="12" cy="13.5" r="3.5" stroke="#8f8f8f" strokeWidth="1.5" />
      </svg>
      <span>Photo &middot; {caption}</span>
    </div>
  );
}

export default function Home() {
  const [gapTab, setGapTab] = useState('today');

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
            <p style={{ margin: 0, fontSize: 22, lineHeight: '32px', color: 'var(--ink)', fontWeight: 500 }}>
              The gap isn't simply visibility. It's knowing whether custody changed the way it was supposed to.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 24, borderBottom: '1px solid var(--line)', marginBottom: 0 }}>
            <button
              type="button" role="tab" aria-selected={gapTab === 'today'} onClick={() => setGapTab('today')}
              className="sl-tab"
              style={{ font: 'inherit', fontSize: 15, fontWeight: 500, background: 'none', border: 0, borderBottom: `2px solid ${gapTab === 'today' ? '#000' : 'transparent'}`, color: gapTab === 'today' ? '#000' : 'var(--ink-muted)', padding: '12px 4px', minHeight: 44, cursor: 'pointer' }}
            >Today</button>
            <button
              type="button" role="tab" aria-selected={gapTab === 'after'} onClick={() => setGapTab('after')}
              className="sl-tab"
              style={{ font: 'inherit', fontSize: 15, fontWeight: 500, background: 'none', border: 0, borderBottom: `2px solid ${gapTab === 'after' ? '#000' : 'transparent'}`, color: gapTab === 'after' ? '#000' : 'var(--ink-muted)', padding: '12px 4px', minHeight: 44, cursor: 'pointer' }}
            >With SafeLoad</button>
          </div>

          <div role="tabpanel" style={{ border: '1px solid var(--line)', padding: 32, overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              {gapTab === 'today' ? (
                <motion.div key="today" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 32 }}>
                  {todaySteps.map((s, i) => (
                    <div key={s.role} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div style={{ position: 'relative', border: '1px solid #8f8f8f', padding: 16, display: 'flex', flexDirection: 'column', gap: 4, background: '#fff' }}>
                        <span className="eyebrow">{s.role}</span>
                        <span style={{ fontSize: 20, lineHeight: '28px', fontWeight: 500 }}>{s.event}</span>
                        {i < todaySteps.length - 1 && (
                          <span aria-hidden="true" style={{ position: 'absolute', right: -33, top: 38, width: 32, height: 0, borderTop: '1px dashed #8f8f8f' }} />
                        )}
                      </div>
                      <span style={{ alignSelf: 'flex-start', border: '1px dashed #8f8f8f', padding: '4px 8px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)' }}>{s.detail}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid var(--line)', paddingTop: 16, flexWrap: 'wrap' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 4l9 16H3z" stroke="#8a5300" strokeWidth="1.5" />
                    <path d="M12 10v4M12 16.5v1" stroke="#8a5300" strokeWidth="1.5" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a5300' }}>Authorization gap</span>
                  <span style={{ fontSize: 14, color: 'var(--ink-muted)' }}>Evidence sits in separate systems.</span>
                </div>
                </motion.div>
              ) : (
                <motion.div key="after" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 32 }}>
                  {safeloadSteps.map((s, i) => (
                    <div key={s} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div style={{ position: 'relative', border: '1px solid #000', padding: 16, display: 'flex', flexDirection: 'column', gap: 4, background: '#fff' }}>
                        <span className="eyebrow">{s}</span>
                        <span style={{ fontSize: 20, lineHeight: '28px', fontWeight: 500 }}>{{ Shipper: 'Order', Broker: 'Booking', Carrier: 'Movement', Receiver: 'Delivery' }[s]}</span>
                        {i < safeloadSteps.length - 1 && (
                          <span aria-hidden="true" style={{ position: 'absolute', right: -33, top: 38, width: 32, height: 0, borderTop: '1px solid #000' }} />
                        )}
                        <span aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: -33, width: 1, height: 32, background: '#000' }}>
                          <span className="sl-drop" style={{ animationDelay: `${i * 0.4}s` }} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 32, background: '#000', color: '#fff', padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: '12px 24px', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span className="sl-live" aria-hidden="true" />
                    <span style={{ fontSize: 18, fontWeight: 500 }}>SafeLoad custody record</span>
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.04em', color: '#d4d4d4' }}>Authorization &middot; Verification &middot; Evidence &middot; Exceptions &middot; Acceptance</span>
                </div>
                </motion.div>
              )}
            </AnimatePresence>
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
              SafeLoad is designed to connect the people, equipment, shipment details, and decisions behind each critical freight handoff.
            </p>
            <p style={{ margin: 0, fontSize: 22, lineHeight: '32px', color: 'var(--ink)', fontWeight: 500 }}>
              The shipment moves. Accountability moves with it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {pillars.map((p) => (
              <div key={p.title} className="sl-card" style={{ background: '#fff', padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {p.icon}
                <span style={{ fontSize: 20, lineHeight: '28px', fontWeight: 500 }}>{p.title}</span>
                <p style={{ margin: 0, fontSize: 15, lineHeight: '22px', color: 'var(--ink-muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — How it works */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 760 }}>
              <span className="section-num">04 &mdash; How it works</span>
              <h2 className="h-section">One shipment. A connected chain of custody.</h2>
            </div>
            <Link to="/how-it-works" className="btn btn-dark">See how it works <span className="sl-arr" aria-hidden="true">→</span></Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 16 }}>
            {journey.map((j, i) => (
              <Link key={j.title} to="/how-it-works" className="sl-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 8, padding: 20, border: '1px solid #000', background: '#fff', color: '#000', textDecoration: 'none' }}>
                <span aria-hidden="true" style={{ width: 12, height: 12, background: '#000', display: 'block' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)' }}>0{i + 1}</span>
                <span style={{ fontSize: 20, fontWeight: 500 }}>{j.title}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{j.when}</span>
                {i < journey.length - 1 && (
                  <span aria-hidden="true" style={{ position: 'absolute', right: -17, top: 31, width: 16, height: 1, background: '#000' }}>
                    <span className="sl-packet" style={{ animationDelay: `${i * 0.5}s` }} />
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Controlled exceptions */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 64, alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 460px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="section-num">05 &mdash; Controlled exceptions</span>
            <h2 className="h-section">Changes happen. Unauthorized changes shouldn't.</h2>
            <p className="body-lg">
              A driver gets replaced. A trailer changes. A destination is amended. A seal doesn't match. These events may be legitimate&mdash;but they should never silently rewrite authorized custody instructions.
            </p>
            <p className="body-lg">
              Guardian AI is being developed to investigate exceptions and support controlled decisions. Material changes remain subject to the authorization rules established by responsible parties.
            </p>
            <Link to="/guardian-ai" style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '12px 0', minHeight: 44, boxSizing: 'border-box' }}>How Guardian AI works <span className="sl-arr" aria-hidden="true">→</span></Link>
          </div>

          <div style={{ flex: '1 1 460px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: '#fff', border: '1px solid #8f8f8f', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 17, lineHeight: '24px', fontWeight: 500 }}>Material change detected</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Driver replaced', 'Trailer changed', 'Destination amended', 'Seal mismatch'].map((t) => (
                  <span key={t} style={{ border: '1px solid var(--line)', padding: '2px 8px', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)' }}>{t}</span>
                ))}
              </div>
            </div>

            <div aria-hidden="true" style={{ position: 'relative', width: 1, height: 28, background: '#000', margin: '0 auto' }}>
              <span className="sl-drop" />
            </div>

            <div style={{ background: '#fff', border: '1px solid #8f8f8f', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 17, lineHeight: '24px', fontWeight: 500 }}>Affected authorization held per policy</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a5300' }}>
                <span aria-hidden="true" style={{ width: 6, height: 6, background: '#8a5300', display: 'inline-block' }} />Held
              </span>
            </div>

            <div aria-hidden="true" style={{ position: 'relative', width: 1, height: 28, background: '#000', margin: '0 auto' }}>
              <span className="sl-drop" style={{ animationDelay: '0.6s' }} />
            </div>

            <div style={{ background: '#000', color: '#fff', border: '1px solid #000', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 17, lineHeight: '24px', fontWeight: 500 }}>Guardian AI reviews evidence and context</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--on-dark-muted)' }}>Supports the decision. Does not make it.</span>
            </div>

            <div aria-hidden="true" style={{ position: 'relative', height: 28 }}>
              <span style={{ position: 'absolute', left: '50%', top: 0, width: 1, height: 14, background: '#000' }} />
              <span style={{ position: 'absolute', left: '25%', right: '25%', top: 14, height: 1, background: '#000' }} />
              <span style={{ position: 'absolute', left: '25%', top: 14, width: 1, height: 14, background: '#000' }} />
              <span style={{ position: 'absolute', right: '25%', top: 14, width: 1, height: 14, background: '#000' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
              <div style={{ border: '1px solid #008000', borderTop: '3px solid #008000', padding: 16, display: 'flex', flexDirection: 'column', gap: 6, background: '#fff' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#008000' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5l2.5 2.5L10 3" stroke="#008000" strokeWidth="1.5" /></svg>
                  Approved
                </span>
                <span style={{ fontSize: 16, fontWeight: 500 }}>Reauthorize + record</span>
              </div>
              <div style={{ border: '1px solid #b3261e', borderTop: '3px solid #b3261e', padding: 16, display: 'flex', flexDirection: 'column', gap: 6, background: '#fff' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#b3261e' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 3l6 6M9 3l-6 6" stroke="#b3261e" strokeWidth="1.5" /></svg>
                  Not approved
                </span>
                <span style={{ fontSize: 16, fontWeight: 500 }}>Hold + escalate</span>
              </div>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Illustrative workflow</span>
          </div>
        </div>
      </section>

      {/* 06 — Who it's for */}
      <section className="section subtle">
        <div className="container">
          <div className="section-head">
            <span className="section-num">06 &mdash; Who it's for</span>
            <h2 className="h-section">Different roles. One standard of accountability.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {roles.map((r) => (
              <div key={r.name} className="sl-card" style={{ border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', background: '#fff' }}>
                <div className="sl-photo" style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--surface-subtle)', borderBottom: '1px solid var(--line)' }}>
                  <PhotoPlaceholder caption={r.photo} />
                </div>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                  <span className="eyebrow">{r.name}</span>
                  <h3 style={{ margin: 0, fontSize: 24, lineHeight: '32px', fontWeight: 500 }}>{r.tag}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: '22px', color: 'var(--ink-muted)' }}>{r.desc}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <Link to="/solutions" style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '12px 0', minHeight: 44, boxSizing: 'border-box' }}>{r.cta} <span className="sl-arr" aria-hidden="true">→</span></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Built for operations */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">07 &mdash; Built for operations</span>
            <h2 className="h-section">Stronger controls shouldn't mean harder work.</h2>
            <p className="body-lg">SafeLoad is designed around the realities of transportation operations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {opsFeatures.map((f) => (
              <div key={f.title} style={{ paddingTop: 24, borderTop: '1px solid #000', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {f.icon}
                <span style={{ fontSize: 18, lineHeight: '26px', fontWeight: 500 }}>{f.title}</span>
                <p style={{ margin: 0, fontSize: 15, lineHeight: '22px', color: 'var(--ink-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Long-term vision */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ alignSelf: 'flex-start', border: '1px solid #000', padding: '4px 10px' }}>08 &mdash; Long-term vision</span>
            <h2 className="h-section">From freight custody to supply-chain trust.</h2>
            <p className="body-lg">
              Every product moves through suppliers, manufacturers, transportation partners, facilities, and customers. Every transfer creates a new question of authorization and accountability.
            </p>
            <p className="body-lg">
              SafeLoad's vision is to connect those moments into a trusted digital chain of custody&mdash;supporting stronger governance, clearer compliance evidence, and more intelligent supply-chain operations.
            </p>
            <p style={{ margin: 0, fontSize: 22, lineHeight: '32px', color: 'var(--ink)' }}>
              We're starting with freight. The opportunity extends wherever goods change hands.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginBottom: 24 }}>
            {visionChain.map((v, i) => {
              const isStart = v === 'Move';
              return (
                <div
                  key={v}
                  style={{
                    position: 'relative', padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 6,
                    background: isStart ? '#000' : '#fff', color: isStart ? '#fff' : 'inherit',
                    border: isStart ? '1px solid #000' : '1px dashed #8f8f8f',
                  }}
                >
                  {isStart ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                      <span className="sl-live" aria-hidden="true" style={{ width: 6, height: 6 }} />Starting here
                    </span>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>0{i + 1}</span>
                  )}
                  <span style={{ fontSize: 20, fontWeight: 500 }}>{v}</span>
                  {i < visionChain.length - 1 && (
                    <span aria-hidden="true" style={{ position: 'absolute', right: -17, top: '50%', width: 16, height: 1, background: '#8f8f8f' }} />
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ border: '1px solid #000', padding: '14px 20px', display: 'flex', flexWrap: 'wrap', gap: '8px 24px', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 500 }}>Shared custody history</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)' }}>One record wherever goods change hands</span>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
