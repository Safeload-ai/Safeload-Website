import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTABand from '../components/CTABand';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const layers = [
  { label: 'Layer 1', title: 'Participants', items: ['Shippers', 'Brokers', 'Forwarders', 'Carriers', 'Facilities', 'Receivers'] },
  { label: 'Layer 2', title: 'SafeLoad core', items: ['Policies', 'Permissions', 'Identity', 'Equipment', 'Documents', 'Handoffs'] },
  { label: 'Layer 3', title: 'Guardian AI', items: ['Detect', 'Investigate', 'Escalate', 'Support authorization'], note: 'Supports authorization. Does not replace it.' },
  { label: 'Layer 4', title: 'Custody record', items: ['Events', 'Evidence', 'Approvals', 'Exceptions', 'Acceptance'] },
];

const capabilities = [
  { title: 'Identity Trust', tag: 'Know who is executing the shipment.', desc: 'Verify driver identity through government-issued credentials, selfie and liveness checks, and shipment-specific authorization.' },
  { title: 'Equipment Trust', tag: 'Connect the right equipment to the right load.', desc: 'Capture vehicle and trailer information and validate equipment details against the authorized shipment.' },
  { title: 'Custody Authorization', tag: 'Establish who can take custody—and when.', desc: 'Define approved parties, pickup and delivery conditions, release requirements, and authority to approve changes.' },
  { title: 'Document & Seal Integrity', tag: 'Connect the paperwork to the physical shipment.', desc: 'Capture BOLs, seal photographs, trailer evidence, and relevant documents at defined checkpoints.' },
  { title: 'Movement Trust', tag: 'Recognize when the journey changes.', desc: 'Use location signals, geofences, and event monitoring to identify activity requiring review.' },
  { title: 'Verified Handoffs', tag: 'Make release and acceptance accountable.', desc: 'Use shipment-specific verification and digital confirmation at origin, destination, and other required transfers.' },
  { title: 'Custody Record', tag: 'Preserve the evidence behind every decision.', desc: 'Connect events, supporting documents, authorizations, and exceptions into a reconstructable history.' },
  { title: 'Guardian AI', tag: 'Turn exceptions into informed decisions.', desc: 'Investigate discrepancies, assemble evidence, and support the appropriate approval or escalation process.', link: true },
];

const roadmap = [
  'Appointment windows and dock-door validation',
  'Trailer tare-weight and load-integrity checks',
  'Multi-stage seal and BOL re-verification',
  'Site-specific driver safety requirements',
  'Multi-party custody transfers',
  'Broader supply-chain traceability',
];

export default function Platform() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow accent">Platform</span>
            <h1 className="h-hero" style={{ maxWidth: 760 }}>One platform for every critical custody decision.</h1>
            <p className="body-lg" style={{ maxWidth: 600 }}>
              SafeLoad brings together authorization, verification, movement signals, and evidence to help govern how freight is released, transferred, and accepted.
            </p>
            <div className="hero-actions">
              <Link to="/partners" className="btn btn-light">Discuss Your Workflow <span className="sl-arr" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">01 &mdash; Architecture</span>
            <h2 className="h-section">Connected by design.</h2>
            <p className="body-lg">
              A custody event is not simply a tracking update. It combines the authorized instruction, the verified participants, the observed handoff, and supporting evidence.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {layers.map((l, i) => (
              <motion.div key={l.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} style={{ background: '#fff', padding: '24px 28px', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
                <div style={{ flex: '0 0 180px' }}>
                  <span className="section-num" style={{ marginBottom: 2 }}>{l.label}</span>
                  <div style={{ fontSize: 18, fontWeight: 500 }}>{l.title}</div>
                  {l.note && <div className="body-md" style={{ fontSize: 12.5, marginTop: 4 }}>{l.note}</div>}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flex: 1 }}>
                  {l.items.map((it) => (
                    <span key={it} style={{ fontSize: 13, padding: '6px 12px', background: 'var(--surface-subtle)', border: '1px solid var(--line)', borderRadius: 999 }}>{it}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section subtle">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">02 &mdash; Capabilities</span>
            <h2 className="h-section">What the platform connects.</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {capabilities.map((c, i) => (
              <motion.div key={c.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 4) * 0.05 }} className="card" style={{ background: '#fff' }}>
                <h3 className="h-card" style={{ fontSize: 16, marginBottom: 6 }}>{c.title}</h3>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--brand-green)', marginBottom: 10 }}>{c.tag}</div>
                <p className="body-md" style={{ fontSize: 13 }}>{c.desc}</p>
                {c.link && (
                  <Link to="/guardian-ai" className="eyebrow accent" style={{ display: 'inline-block', marginTop: 12 }}>
                    Explore Guardian AI <span className="sl-arr" aria-hidden="true">→</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">03 &mdash; Roadmap</span>
            <h2 className="h-section">Planned / under evaluation</h2>
            <p className="body-md">Roadmap items are under evaluation and subject to change.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {roadmap.map((r, i) => (
              <motion.div key={r} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }} className="card">
                <span className="section-num">Planned &middot; 0{i + 1}</span>
                <p style={{ fontSize: 14 }}>{r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
