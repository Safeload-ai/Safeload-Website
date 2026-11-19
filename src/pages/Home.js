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

const statusBadges = [
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
        <div className="hero-inner">
          <div className="hero-copy">
            <motion.div {...fadeUp} className="hero-eyebrow-row" style={{ flexWrap: 'wrap', gap: '8px 20px' }}>
              {statusBadges.map((b) => (
                <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <span className="sl-live" aria-hidden="true" />
                  <span className="eyebrow">{b}</span>
                </span>
              ))}
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <span className="eyebrow accent">The digital chain of custody for freight</span>
            </motion.div>

            <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="h-hero" style={{ maxWidth: 680 }}>
              Every handoff verified. Every change authorized.
            </motion.h1>

            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="body-lg" style={{ maxWidth: 560 }}>
              Freight moves through multiple hands. SafeLoad connects authorization, identity, equipment, documents, and custody evidence&mdash;so every critical transfer can be verified from origin to destination.
            </motion.p>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.22 }} className="body-md">
              One platform. Multiple parties. One accountable chain of custody.<br />
              Built for shippers, freight brokers, forwarders, and 3PLs.
            </motion.p>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="hero-actions">
              <Link to="/partners" className="btn btn-light">
                Become a Design Partner <span className="sl-arr" aria-hidden="true">→</span>
              </Link>
              <Link to="/platform" className="btn btn-outline">
                Explore the Platform <span className="sl-arr" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: '1 1 380px', minWidth: 0 }}
          >
            <div className="photo-placeholder" style={{ aspectRatio: '4 / 3', background: 'rgba(255,255,255,0.04)', border: '1px solid #1f1f1f', color: '#8f8f8f' }}>
              Conceptual illustration
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — The custody gap */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">02 &mdash; The custody gap</span>
            <h2 className="h-section">Freight is tracked. Custody is fragmented.</h2>
            <p className="body-lg">
              Today's supply chains rely on disconnected systems to book, move, monitor, and deliver freight. But tracking a shipment doesn't necessarily establish who was authorized to take it, whether a handoff was approved, or who accepted it at delivery.
            </p>
            <p className="body-md" style={{ color: 'var(--ink)' }}>
              The gap isn't simply visibility. It's knowing whether custody changed the way it was supposed to.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            <motion.div {...fadeUp}>
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
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <span className="eyebrow accent" style={{ marginBottom: 16, display: 'block' }}>With SafeLoad</span>
              <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
                {safeloadSteps.map((s) => (
                  <div key={s} style={{ padding: '18px 20px', fontSize: 14, fontWeight: 600 }}>{s}</div>
                ))}
              </div>
              <p className="body-md" style={{ fontSize: 13, marginTop: 14 }}>
                <strong style={{ color: 'var(--brand-green)' }}>SafeLoad custody record</strong> &mdash; Authorization &middot; Verification &middot; Evidence &middot; Exceptions &middot; Acceptance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — The SafeLoad answer */}
      <section className="section subtle">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">03 &mdash; The SafeLoad answer</span>
            <h2 className="h-section">Control custody. Not just movement.</h2>
            <p className="body-lg">
              SafeLoad is designed to connect the people, equipment, shipment details, and decisions behind each critical freight handoff. The shipment moves. Accountability moves with it.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {pillars.map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }} className="card" style={{ background: '#fff' }}>
                <span className="section-num">0{i + 1}</span>
                <h3 className="h-card" style={{ marginBottom: 8 }}>{p.title}</h3>
                <p className="body-md" style={{ fontSize: 13.5 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — How it works */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">04 &mdash; How it works</span>
            <h2 className="h-section">One shipment. A connected chain of custody.</h2>
            <Link to="/how-it-works" className="eyebrow accent">See how it works <span className="sl-arr" aria-hidden="true">→</span></Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            {journey.map((j, i) => (
              <motion.div key={j.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="card">
                <span className="section-num">0{i + 1}</span>
                <h3 className="h-card" style={{ marginBottom: 4 }}>{j.title}</h3>
                <p className="body-md" style={{ fontSize: 13 }}>{j.when}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Controlled exceptions */}
      <section className="section on-dark">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num" style={{ color: 'var(--on-dark-muted)' }}>05 &mdash; Controlled exceptions</span>
            <h2 className="h-section">Changes happen. Unauthorized changes shouldn't.</h2>
            <p className="body-lg">
              A driver gets replaced. A trailer changes. A destination is amended. A seal doesn't match. These events may be legitimate&mdash;but they should never silently rewrite authorized custody instructions.
            </p>
            <p className="body-md">
              Guardian AI is being developed to investigate exceptions and support controlled decisions. Material changes remain subject to the authorization rules established by responsible parties.
            </p>
            <Link to="/guardian-ai" className="eyebrow accent">How Guardian AI works <span className="sl-arr" aria-hidden="true">→</span></Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {['Material change detected', 'Affected authorization held', 'Guardian AI reviews evidence', 'Approved or escalated'].map((t, i) => (
              <motion.div key={t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="card" style={{ background: 'var(--surface-dark-alt)', borderColor: 'var(--line-dark)' }}>
                <span className="section-num" style={{ color: 'var(--on-dark-muted)' }}>0{i + 1}</span>
                <p style={{ fontSize: 14, fontWeight: 500 }}>{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Who it's for */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">06 &mdash; Who it's for</span>
            <h2 className="h-section">Different roles. One standard of accountability.</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {roles.map((r, i) => (
              <motion.div key={r.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <div className="photo-placeholder" style={{ marginBottom: 18 }}>Photo &middot; {r.photo}</div>
                <span className="eyebrow accent">{r.name}</span>
                <h3 className="h-card" style={{ margin: '6px 0 10px' }}>{r.tag}</h3>
                <p className="body-md" style={{ fontSize: 13.5, marginBottom: 14 }}>{r.desc}</p>
                <Link to="/solutions" className="eyebrow accent">{r.cta} <span className="sl-arr" aria-hidden="true">→</span></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Built for operations */}
      <section className="section subtle">
        <div className="container">
          <motion.div {...fadeUp} className="section-head center">
            <span className="section-num">07 &mdash; Built for operations</span>
            <h2 className="h-section">Stronger controls shouldn't mean harder work.</h2>
            <p className="body-lg">SafeLoad is designed around the realities of transportation operations.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {opsFeatures.map((f, i) => (
              <motion.div key={f.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="card">
                <h3 className="h-card" style={{ fontSize: 15, marginBottom: 6 }}>{f.title}</h3>
                <p className="body-md" style={{ fontSize: 12.5 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Long-term vision */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">08 &mdash; Long-term vision</span>
            <h2 className="h-section">From freight custody to supply-chain trust.</h2>
            <p className="body-lg">
              Every product moves through suppliers, manufacturers, transportation partners, facilities, and customers. Every transfer creates a new question of authorization and accountability.
            </p>
            <p className="body-md">
              SafeLoad's vision is to connect those moments into a trusted digital chain of custody&mdash;supporting stronger governance, clearer compliance evidence, and more intelligent supply-chain operations. We're starting with freight. The opportunity extends wherever goods change hands.
            </p>
          </motion.div>

          <motion.div {...fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            {visionChain.map((v, i) => (
              <React.Fragment key={v}>
                <div className="card" style={{ flex: '1 1 120px', textAlign: 'center', padding: '20px 16px' }}>
                  {i === 2 && <span className="eyebrow accent" style={{ display: 'block', marginBottom: 6 }}>Starting here</span>}
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{v}</span>
                </div>
                {i < visionChain.length - 1 && <span aria-hidden="true" style={{ color: 'var(--ink-faint)' }}>&rarr;</span>}
              </React.Fragment>
            ))}
          </motion.div>
          <p className="body-md" style={{ fontSize: 13, marginTop: 16 }}>Shared custody history &mdash; one record wherever goods change hands.</p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
