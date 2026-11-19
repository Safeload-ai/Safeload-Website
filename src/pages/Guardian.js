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

const workflow = [
  { title: 'Hold affected authorization', desc: 'Material change detected: trailer mismatch.' },
  { title: 'Investigate evidence', desc: 'Equipment identifiers, photographs, authorized changes.' },
  { title: 'Authorize or escalate', desc: 'Authorized: reauthorize + record. Not authorized: hold + escalate.' },
];

export default function Guardian() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow accent">Guardian AI</span>
            <h1 className="h-hero" style={{ maxWidth: 760 }}>Exceptions happen. Uncontrolled changes shouldn't.</h1>
            <p className="body-lg" style={{ maxWidth: 600 }}>
              Guardian AI is SafeLoad's developing intelligence layer for investigating shipment exceptions and supporting authorized custody decisions.
            </p>
            <p className="body-md">Record. Review. Respond.</p>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} style={{ flex: '1 1 380px', minWidth: 0 }}>
            <div className="card" style={{ background: 'var(--surface-dark-alt)', borderColor: 'var(--line-dark)', color: '#fff' }}>
              <span className="eyebrow" style={{ color: 'var(--on-dark-muted)' }}>Exception review &middot; Conceptual</span>
              <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
                <div><strong>Exception</strong> &middot; Trailer mismatch</div>
                <div><strong>Authorization</strong> &middot; Held per policy</div>
                <div><strong>Evidence</strong> &middot; Equipment identifiers &middot; Photographs &middot; Authorized changes</div>
                <div><strong>Decision</strong> &middot; Awaiting designated authority</div>
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
                {['Record', 'Review', 'Respond'].map((s) => (
                  <span key={s} style={{ fontSize: 12, padding: '6px 12px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999 }}>{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">01 &mdash; Exception model</span>
            <h2 className="h-section">AI supports the decision. Authorization governs the action.</h2>
            <p className="body-lg">
              Guardian AI is being developed to connect shipment evidence, assist investigation, and coordinate responses. It does not replace the authority of parties responsible for approving material custody changes.
            </p>
            <span className="body-md" style={{ fontStyle: 'italic' }}>Illustrative future-state workflow</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 20 }}>
            {workflow.map((w, i) => (
              <motion.div key={w.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="card">
                <span className="section-num">0{i + 1}</span>
                <h3 className="h-card" style={{ fontSize: 16, marginBottom: 6 }}>{w.title}</h3>
                <p className="body-md" style={{ fontSize: 13 }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="body-md" style={{ fontSize: 12.5, fontStyle: 'italic', marginBottom: 24 }}>
            Illustrative future-state workflows, not a live Guardian AI demonstration.
          </p>

          <Link to="/partners" className="btn btn-dark">Discuss Guardian AI <span className="sl-arr" aria-hidden="true">→</span></Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
