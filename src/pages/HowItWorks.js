import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CTABand from '../components/CTABand';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const STAGES = [
  { title: 'Authorize', when: 'Before pickup', checks: ['Approved parties and conditions are defined', 'Pickup and delivery requirements are set', 'Authority to approve changes is established'] },
  { title: 'Release', when: 'At origin', checks: ['Driver identity is verified', 'Equipment is matched to the authorized shipment', 'Seal and documents are captured'] },
  { title: 'Monitor', when: 'In transit', checks: ['Location signals and geofences are tracked', 'Movement anomalies are flagged for review', 'Material changes are held pending authorization'] },
  { title: 'Accept', when: 'At destination', checks: ['Receiving party identity is verified', 'Seal and trailer condition are confirmed', 'Acceptance is digitally recorded'] },
  { title: 'Record', when: 'Across the journey', checks: ['Events, evidence, and approvals are connected', 'Exceptions are preserved with context', 'A reconstructable custody history is kept'] },
];

export default function HowItWorks() {
  const [idx, setIdx] = useState(0);
  const stage = STAGES[idx];

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow accent">How it works</span>
            <h1 className="h-hero" style={{ maxWidth: 760 }}>Every custody event, verified in sequence.</h1>
            <p className="body-lg" style={{ maxWidth: 600 }}>
              From the rules set before pickup to the record kept after delivery, SafeLoad connects each critical handoff into one accountable chain of custody.
            </p>
            <div className="hero-actions">
              <Link to="/partners" className="btn btn-light">Become a Design Partner <span className="sl-arr" aria-hidden="true">→</span></Link>
              <Link to="/platform" className="btn btn-outline">Explore the Platform <span className="sl-arr" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">01 &mdash; The custody journey</span>
            <h2 className="h-section">One shipment. A connected chain of custody.</h2>
            <p className="body-md">Select a stage to see what SafeLoad checks.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', marginBottom: 32 }}>
            {STAGES.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIdx(i)}
                style={{
                  textAlign: 'left', background: i === idx ? '#fff' : 'var(--surface-subtle)',
                  border: 0, borderTop: `2px solid ${i === idx ? 'var(--brand-green)' : 'transparent'}`,
                  padding: '18px 20px', cursor: 'pointer', font: 'inherit', color: '#000', minHeight: 44,
                }}
              >
                <span className="section-num" style={{ marginBottom: 4 }}>0{i + 1}</span>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{s.title}</div>
                <div className="body-md" style={{ fontSize: 12 }}>{s.when}</div>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <button type="button" className="eyebrow" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setIdx((i) => (i - 1 + STAGES.length) % STAGES.length)}>
              &larr; Previous
            </button>
            <button type="button" className="eyebrow" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setIdx((i) => (i + 1) % STAGES.length)}>
              Next stage &rarr;
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <span className="eyebrow" style={{ marginBottom: 12, display: 'block' }}>Checks</span>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, maxWidth: 640 }}>
                {stage.checks.map((c, i) => (
                  <li key={c} style={{ display: 'flex', gap: 16, alignItems: 'baseline', padding: '14px 0', borderTop: '1px solid var(--line)' }}>
                    <span className="section-num" style={{ marginBottom: 0, color: 'var(--brand-green)' }}>0{i + 1}</span>
                    <span style={{ fontSize: 16, lineHeight: '24px' }}>{c}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section on-dark">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num" style={{ color: 'var(--on-dark-muted)' }}>02 &mdash; When something changes</span>
            <h2 className="h-section">Changes happen. Unauthorized changes shouldn't.</h2>
            <p className="body-lg">
              Material changes remain subject to the authorization rules established by responsible parties. Guardian AI is being developed to investigate exceptions and support controlled decisions.
            </p>
            <div className="hero-actions">
              <Link to="/guardian-ai" className="btn btn-outline">How Guardian AI works <span className="sl-arr" aria-hidden="true">→</span></Link>
              <Link to="/platform" className="btn btn-outline">See the platform <span className="sl-arr" aria-hidden="true">→</span></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
