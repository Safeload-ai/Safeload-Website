import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTABand from '../components/CTABand';

const SEGMENTS = [
  {
    name: 'Shippers',
    tag: 'Protect what you ship.',
    photo: 'High-value distribution center',
    paras: [
      "Your freight may pass through multiple brokers, carriers, and facilities. You need more than a tracking update to know whether it changed hands correctly.",
      "SafeLoad is designed to help establish custody requirements, verify authorized release and acceptance, and maintain a connected history across participating logistics partners.",
    ],
    outcomes: [
      'Stronger control over authorized handoffs',
      'Clearer accountability across transportation partners',
      'Better evidence for exception review and disputes',
    ],
    cta: 'Discuss Shipper Use Cases',
  },
  {
    name: 'Freight Brokers',
    tag: 'Connect the booking to the actual shipment.',
    photo: 'Freight dispatch / brokerage operations',
    paras: [
      "A confirmed carrier assignment doesn't always tell you who will arrive at the dock or who will receive the load.",
      'SafeLoad helps connect booking information with driver verification, equipment evidence, shipment authorization, and delivery acceptance.',
    ],
    outcomes: [
      'More confidence in pickup and delivery execution',
      'Better visibility into custody-related exceptions',
      'Stronger documentation for customer assurance',
    ],
    cta: 'Discuss Broker Use Cases',
  },
  {
    name: 'Freight Forwarders & 3PLs',
    tag: 'Keep custody connected across every leg.',
    photo: 'Intermodal yard or cross-dock',
    paras: [
      'Freight forwarders and 3PLs coordinate shipments across organizations, facilities, and transportation stages.',
      'SafeLoad is designed to connect authorized custody transfers and supporting evidence, reducing gaps created when responsibility moves between parties.',
    ],
    outcomes: [
      'More consistent verification across partners',
      'Better control over custody changes',
      'Connected evidence across shipment stages',
    ],
    cta: 'Discuss Logistics Provider Use Cases',
  },
];

export default function Solutions() {
  const [idx, setIdx] = useState(0);
  const seg = SEGMENTS[idx];

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow accent">Solutions</span>
            <h1 className="h-hero" style={{ maxWidth: 760 }}>Built for the people responsible for freight.</h1>
            <p className="body-lg" style={{ maxWidth: 600 }}>
              Whether you own the cargo, arrange the transportation, or coordinate the journey, SafeLoad helps connect the people and decisions behind every critical handoff.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div role="tablist" aria-label="Choose your role" className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {SEGMENTS.map((s, i) => (
              <button
                key={s.name}
                type="button"
                role="tab"
                aria-selected={i === idx}
                onClick={() => setIdx(i)}
                className="sl-tab"
                style={{
                  textAlign: 'left', background: i === idx ? '#fff' : 'var(--surface-subtle)',
                  border: 0, borderTop: `2px solid ${i === idx ? '#000' : 'transparent'}`,
                  padding: '20px 24px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 6,
                  color: '#000', minHeight: 44, font: 'inherit',
                }}
              >
                <span className="section-num" style={{ marginBottom: 0 }}>0{i + 1}</span>
                <span style={{ fontSize: 20, fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: 14, color: i === idx ? '#000' : 'var(--ink-muted)' }}>{s.tag}</span>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start', marginTop: 48 }}>
            <div style={{ flex: '1 1 460px', minWidth: 0 }}>
              <div className="photo-placeholder">Photo &middot; {seg.photo}</div>
            </div>
            <div style={{ flex: '1 1 440px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span className="eyebrow accent">{seg.name}</span>
              <h2 className="h-section">{seg.tag}</h2>
              {seg.paras.map((p) => <p key={p} className="body-lg">{p}</p>)}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 8 }}>
                <span className="eyebrow">Outcomes</span>
                <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {seg.outcomes.map((o, i) => (
                    <li key={o} style={{ display: 'flex', gap: 16, alignItems: 'baseline', padding: '14px 0', borderTop: '1px solid var(--line)' }}>
                      <span className="section-num" style={{ marginBottom: 0, color: 'var(--brand-green)' }}>0{i + 1}</span>
                      <span style={{ fontSize: 16, lineHeight: '24px' }}>{o}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div style={{ paddingTop: 8 }}>
                <Link to="/partners" className="btn btn-dark">{seg.cta} <span className="sl-arr" aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
