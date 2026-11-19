import React from 'react';
import { Link } from 'react-router-dom';
import CTABand from '../components/CTABand';

const principles = [
  { title: 'Authorization comes first.', desc: 'Custody should change only in the way the responsible parties said it could.' },
  { title: 'Evidence over assumption.', desc: "A tracking update isn't proof of an authorized handoff. Every critical transfer should leave a verifiable record." },
  { title: 'People decide. AI supports.', desc: 'Guardian AI is built to investigate and assist. Material custody changes stay with the parties authorized to approve them.' },
  { title: 'Built for the dock, not just the dashboard.', desc: 'Controls only work if drivers, facilities, and receivers can use them without slowing freight down.' },
];

const roadmap = [
  { label: 'Now', title: 'Freight custody', desc: 'Verified release, in-transit monitoring, and destination acceptance for road freight.' },
  { label: 'Planned', title: 'Multi-party transfers', desc: 'Custody connected across forwarders, cross-docks, and multiple transportation legs.' },
  { label: 'Long-term vision', title: 'Supply-chain chain of custody', desc: 'One shared custody history from source and production through storage, movement, and receipt.' },
];

const team = [
  { name: '[Name]', role: '[Co-founder & CEO]' },
  { name: '[Name]', role: '[Co-founder & CTO]' },
  { name: '[Name]', role: '[Head of Product]' },
  { name: '[Name]', role: '[Head of Partnerships]' },
];

const contacts = [
  { label: 'General', value: '[hello@safeload.ai]' },
  { label: 'Partnerships', value: '[partners@safeload.ai]' },
  { label: 'Press', value: '[press@safeload.ai]' },
  { label: 'Office', value: '[City, State]' },
];

export default function About() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow accent">About SafeLoad AI</span>
            <h1 className="h-hero" style={{ maxWidth: 760 }}>Building trust into the movement of goods.</h1>
            <p className="body-lg" style={{ maxWidth: 600 }}>
              Supply chains depend on countless transfers between organizations. Yet the systems used to book, track, and manage freight don't always establish a connected record of authorized custody.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 440px', minWidth: 0 }}>
            <span className="section-num">01 &mdash; Our story</span>
            <h2 className="h-section" style={{ marginBottom: 16 }}>SafeLoad AI was founded to close that gap.</h2>
            <p style={{ fontSize: 16, fontWeight: 500, marginBottom: 8 }}>Our mission</p>
            <p className="body-lg" style={{ marginBottom: 12 }}>
              Our mission is to make critical custody events verifiable, changes accountable, and freight operations more trustworthy.
            </p>
            <p className="body-md">We're starting with freight transportation and building toward a broader digital chain of custody across supply chains.</p>
          </div>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <div className="photo-placeholder">Photo &middot; Team or freight operations</div>
          </div>
        </div>
      </section>

      <section className="section subtle">
        <div className="container">
          <div className="section-head">
            <span className="section-num">02 &mdash; What we believe</span>
            <h2 className="h-section">Principles behind the platform.</h2>
            <span className="body-md" style={{ fontStyle: 'italic', fontSize: 12.5 }}>Placeholder copy &mdash; confirm before launch</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {principles.map((p) => (
              <div key={p.title} className="card" style={{ background: '#fff' }}>
                <h3 className="h-card" style={{ fontSize: 16, marginBottom: 8 }}>{p.title}</h3>
                <p className="body-md" style={{ fontSize: 13 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">03 &mdash; Where we're headed</span>
            <h2 className="h-section">Starting with freight. Built for wherever goods change hands.</h2>
            <span className="body-md" style={{ fontStyle: 'italic', fontSize: 12.5 }}>Placeholder copy &mdash; confirm before launch</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {roadmap.map((r) => (
              <div key={r.title} style={{ background: '#fff', padding: '22px 26px', display: 'flex', gap: 20, alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span className="eyebrow accent" style={{ flex: '0 0 140px' }}>{r.label}</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>{r.title}</div>
                  <p className="body-md" style={{ fontSize: 13.5 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section subtle">
        <div className="container">
          <div className="section-head">
            <span className="section-num">04 &mdash; Team</span>
            <h2 className="h-section">The people building SafeLoad AI.</h2>
            <span className="body-md" style={{ fontStyle: 'italic', fontSize: 12.5 }}>Placeholder &mdash; add team names, roles and photos</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {team.map((t, i) => (
              <div key={i}>
                <div className="photo-placeholder" style={{ aspectRatio: '1 / 1', marginBottom: 12 }}>Photo &middot; Headshot</div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{t.name}</div>
                <div className="body-md" style={{ fontSize: 13 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-num">05 &mdash; Contact</span>
            <h2 className="h-section">Talk to us.</h2>
            <p className="body-lg">
              Questions about SafeLoad AI, the design partner program, or a custody challenge in your operation? Get in touch.
            </p>
            <Link to="/partners#inquiry" className="btn btn-dark" style={{ alignSelf: 'flex-start' }}>Request a Conversation <span className="sl-arr" aria-hidden="true">→</span></Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
            {contacts.map((c) => (
              <div key={c.label}>
                <span className="eyebrow">{c.label}</span>
                <div style={{ fontSize: 14, marginTop: 4 }}>{c.value}</div>
              </div>
            ))}
          </div>
          <p className="body-md" style={{ fontSize: 12.5, fontStyle: 'italic', marginTop: 20 }}>Placeholder &mdash; confirm contact details</p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
