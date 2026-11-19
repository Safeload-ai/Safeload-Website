import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const journey = [
  { step: '01', title: 'Identify the custody gap', desc: 'Understand where authorization, verification, or accountability breaks down in your workflow.' },
  { step: '02', title: 'Define the controls', desc: 'Establish parties, shipment rules, verification checkpoints, and exception requirements.' },
  { step: '03', title: 'Test the workflow', desc: 'Evaluate authorized release, custody monitoring, and delivery acceptance on selected shipments.' },
  { step: '04', title: 'Measure the results', desc: 'Assess usability, verification completion, processing time, exceptions, and custody evidence value.' },
];

const ORG_TYPES = ['Shipper', 'Freight Broker', 'Freight Forwarder', '3PL', 'Other'];

const initialForm = { name: '', company: '', email: '', orgType: '', challenge: '', message: '' };

export default function Partners() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow accent">Design partners</span>
            <h1 className="h-hero" style={{ maxWidth: 760 }}>Help build the next standard for freight custody.</h1>
            <p className="body-lg" style={{ maxWidth: 600 }}>
              We're looking for a select group of shippers, freight brokers, forwarders, and logistics partners to help validate SafeLoad in real-world operations.
            </p>
            <div className="hero-actions">
              <a href="#inquiry" className="btn btn-light">Request a Conversation <span className="sl-arr" aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">01 &mdash; Pilot journey</span>
            <h2 className="h-section">How a pilot runs.</h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {journey.map((j, i) => (
              <motion.div key={j.step} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} style={{ background: '#fff', padding: '22px 26px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <span className="section-num" style={{ marginBottom: 0, flexShrink: 0 }}>Step {j.step}</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>{j.title}</div>
                  <p className="body-md" style={{ fontSize: 13.5 }}>{j.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section subtle">
        <div className="container">
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">02 &mdash; Who we're looking for</span>
            <h2 className="h-section">Who we're looking for</h2>
            <p className="body-lg">
              Organizations with meaningful freight operations, recurring handoff challenges, or high-value shipments&mdash;and the willingness to collaborate on practical verification workflows.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" id="inquiry">
        <div className="container" style={{ maxWidth: 680 }}>
          <motion.div {...fadeUp} className="section-head">
            <span className="section-num">03 &mdash; Inquiry</span>
            <h2 className="h-section">Request a conversation</h2>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card" style={{ textAlign: 'center' }}>
              <h3 className="h-card" style={{ marginBottom: 8 }}>Request received</h3>
              <p className="body-md" style={{ marginBottom: 16 }}>We'll be in touch shortly.</p>
              <button type="button" className="btn btn-dark" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
                Send another inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p className="body-md" style={{ fontSize: 13 }}>Please complete the required fields below.</p>

              <Field label="Full name" required value={form.name} onChange={update('name')} />
              <Field label="Company" required value={form.company} onChange={update('company')} />
              <Field label="Work email" type="email" required value={form.email} onChange={update('email')} />

              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>Organization type <span className="body-md" style={{ fontSize: 12 }}>(required)</span></span>
                <select required value={form.orgType} onChange={update('orgType')} style={selectStyle}>
                  <option value="" disabled>Select&hellip;</option>
                  {ORG_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>

              <Field label="Custody challenge" required value={form.challenge} onChange={update('challenge')} textarea />
              <Field label="Message" value={form.message} onChange={update('message')} textarea optional />

              <p className="body-md" style={{ fontSize: 12 }}>
                By submitting, you agree to SafeLoad AI's <a href="#privacy">Privacy Policy</a>.
              </p>

              <button type="submit" className="btn btn-dark" style={{ alignSelf: 'flex-start' }}>
                Request a Conversation <span className="sl-arr" aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

const selectStyle = {
  font: 'inherit', fontSize: 14, padding: '10px 12px', border: '1px solid var(--line)',
  borderRadius: 'var(--radius)', background: '#fff', minHeight: 44,
};
const inputStyle = { ...selectStyle };
const textareaStyle = { ...selectStyle, minHeight: 100, resize: 'vertical', fontFamily: 'inherit' };

function Field({ label, required, optional, type = 'text', value, onChange, textarea }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 13, fontWeight: 500 }}>
        {label} <span className="body-md" style={{ fontSize: 12 }}>({required ? 'required' : optional ? 'optional' : ''})</span>
      </span>
      {textarea ? (
        <textarea required={required} value={value} onChange={onChange} style={textareaStyle} />
      ) : (
        <input type={type} required={required} value={value} onChange={onChange} style={inputStyle} />
      )}
    </label>
  );
}
