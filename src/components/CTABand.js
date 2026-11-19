import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTABand() {
  return (
    <section className="section cta-green">
      <motion.div
        className="container"
        style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-end', justifyContent: 'space-between' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ flex: '1 1 560px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="eyebrow" style={{ color: '#fff' }}>Design partner program</span>
          <h2 className="h-section" style={{ color: '#fff', maxWidth: 760 }}>
            Help build the next standard for freight custody.
          </h2>
          <p className="body-lg" style={{ color: '#fff', maxWidth: 640, opacity: 0.92 }}>
            We're seeking shippers, brokers, forwarders, and logistics partners to help validate real-world custody workflows and shape SafeLoad's development.
          </p>
        </div>
        <Link to="/partners" className="btn btn-light">
          Become a Design Partner <span className="sl-arr" aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </section>
  );
}
