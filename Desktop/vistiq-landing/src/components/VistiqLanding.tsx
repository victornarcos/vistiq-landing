import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/vistiq.css";
import "../styles/app.css";
export default function VistiqLanding() {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <div className="vistiq-root">
      {/* BACKGROUND GRID */}
      <div className="grid-bg"></div>
      <div className="noise-overlay"></div>

      {/* HERO */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          VISTIQ SYSTEM
        </motion.h1>

        <p className="hero-sub">Streaming • AI • Blockchain</p>

        <div className="hero-buttons">
          <a href="/downloads/vistiq.apk" download className="btn neon-blue">
            Download APK
          </a>
          <a href="/downloads/vistiq.exe" download className="btn neon-purple">
            Download EXE
          </a>
          <a href="/downloads/vistiq.ipa" download className="btn neon-green">
            Download IPA (iOS)
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        {[
          { title: "Streaming Engine", desc: "Ultra-fast media streaming system." },
          { title: "AI Core", desc: "Smart automation & intelligence layer." },
          { title: "Blockchain Layer", desc: "Secure digital ownership & payments." },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="feature-card"
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* DOWNLOAD CENTER */}
      <section className="download-section">
        <h2>Download Center</h2>
        <div className="download-grid">
          <a href="/downloads/vistiq.apk" download className="download-card">
            Android APK
          </a>
          <a href="/downloads/vistiq.exe" download className="download-card">
            Windows EXE
          </a>
          <a href="/downloads/vistiq.ipa" download className="download-card">
            iOS IPA
          </a>
          {/* Removed the "Web App" button that used navigate */}
        </div>
      </section>

      {/* TERMS & CONDITIONS */}
      <section className="terms-section">
        <div className="terms-header" onClick={() => setTermsOpen(!termsOpen)}>
          <h2>📜 Terms & Conditions</h2>
          <span className={`toggle-icon ${termsOpen ? "open" : ""}`}>▼</span>
        </div>
        {termsOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="terms-content"
          >
            <div className="terms-content">
              <p><strong>📜 AGREEMENT TO TERMS</strong><br />
              By accessing or using Vistiq (the "Platform"), you agree to be bound by these Terms & Conditions. If you do not agree, you must not use the Platform.</p>

              <p><strong>🎬 CONTENT & COPYRIGHT NOTICE</strong><br />
              Vistiq is a streaming platform that integrates blockchain technology to recognize and reward content creators. Any content displayed on the Platform (including movies, TV shows, music, and other media) may be subject to copyright. If you are a content owner, copyright holder, or authorized representative, your use of the Platform constitutes your agreement that your content may be part of Vistiq's blockchain ecosystem. You acknowledge that Vistiq may assign digital assets (crypto tokens) associated with your content, and you may claim such assets by contacting our team. Claims will be processed to your designated Vault Wallet. We are committed to compensating creators and building a sustainable future for digital content.</p>

              <p><strong>🔗 BLOCKCHAIN ASSET ACKNOWLEDGMENT</strong><br />
              All content streamed through Vistiq is linked to the original copyright name or featured owner. By using the Platform, you consent to the possibility that your content may be tokenized and that digital assets may be generated in your name. You are not required to participate, but if you do, you agree to follow the claim process. If you do not wish your content to be part of this system, please refrain from using the Platform or contact us immediately at <a href="mailto:legal@vistiq.com">legal@vistiq.com</a>.</p>

              <p><strong>⚖️ DISCLAIMER & LIABILITY</strong><br />
              Vistiq is provided "as is" without warranties of any kind. We are not responsible for any third‑party content, copyright claims, or disputes. You assume all risks associated with using the Platform. To the maximum extent permitted by law, Vistiq and its affiliates shall not be liable for any indirect, incidental, or consequential damages.</p>

              <p><strong>🚫 NO TRESPASS & JURISDICTION</strong><br />
              Any legal action arising from or relating to these Terms or your use of the Platform shall be brought exclusively in the courts located in Nairobi, Kenya, and you consent to the personal jurisdiction of those courts. By using the Platform, you agree that any lawsuit against Vistiq constitutes trespass and that you have accessed the Platform voluntarily. Any evidence you claim must have been obtained through your use of the Platform, and you acknowledge that Vistiq maintains strict security measures to protect user data.</p>

              <p><strong>💎 CLAIM YOUR ASSETS</strong><br />
              If you are a content creator or copyright holder, you may claim digital assets associated with your content. Contact us at <a href="mailto:legal@vistiq.com">legal@vistiq.com</a> with proof of ownership, and we will assist in transferring assets to your Vault Wallet. We are dedicated to ensuring creators are compensated fairly through our blockchain system.</p>

              <p><strong>🔄 UPDATES & MODIFICATIONS</strong><br />
              Vistiq reserves the right to modify these Terms at any time. Continued use of the Platform after changes constitutes acceptance of the revised Terms. We encourage you to review this page periodically.</p>
              <p className="terms-footer">
                For questions, contact: <a href="mailto:legal@vistiq.com">legal@vistiq.com</a>
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}