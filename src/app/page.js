"use client";

import Image from "next/image";
import {
  Globe,
  MailOpen,
  ShieldCheck,
  Lock,
  CheckCircle2,
  BadgeCheck,
  Coins,
  Info,
  Users,
  UserRoundCheck,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Scale,
  Clock,
  Hourglass,
  Landmark,
  Bell,
  HelpCircle,
  FileSearch,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import PageProgressBar from "@/components/PageProgressBar";
import RippleCard from "@/components/RippleCard";

/* ─── Icon container helper ─── */
function IconBox({ children, size = 48 }) {
  return (
    <div className="icon-bg" style={{ width: size, height: size, marginBottom: "20px" }}>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <PageProgressBar />
      <Navbar />

      <main style={{ paddingTop: "72px" }}>

        {/* ══════════════════════════════════════════
            HERO  —  Theme-adaptive Dual Layer
        ══════════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            minHeight: "94vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Dual image background crossfading smoothly between Dark and Light mode */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            {/* Dark mode night financial backdrop */}
            <div className="hero-bg-layer hero-bg-dark">
              <Image
                src="/s65-hero-dark.jpg"
                alt="Settlement65 Global Headquarters Night"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            {/* Light mode daytime prestigious financial architecture backdrop */}
            <div className="hero-bg-layer hero-bg-light">
              <Image
                src="/s65-hero-light.jpg"
                alt="Settlement65 Global Headquarters Daylight"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center 38%" }}
              />
            </div>
            {/* Adaptive atmospheric overlay */}
            <div className="hero-overlay" />
            {/* Security guilloche watermark pattern for light mode */}
            <div className="hero-watermark-pattern" />
          </div>

          {/* Animated particle network */}
          <ParticleCanvas />

          {/* Decorative floating orbs */}
          <div style={{ position: "absolute", top: "12%", right: "8%", width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle, var(--orb-glow) 0%, transparent 70%)", zIndex: 2, animation: "float 7s ease-in-out infinite", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "18%", left: "4%", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, var(--orb-glow) 0%, transparent 70%)", zIndex: 2, animation: "float 9s ease-in-out infinite reverse", pointerEvents: "none" }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 3, maxWidth: "1200px", margin: "0 auto", padding: "60px 24px", width: "100%" }}>

            <div className="section-badge" style={{ marginBottom: "26px", display: "inline-flex" }}>
              <Globe size={11} strokeWidth={2.5} />
              Final Settlement and Distribution
            </div>

            <h1
              className="hero-title"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "var(--text-primary)",
                maxWidth: "820px",
                marginBottom: "12px",
                transition: "color 0.3s ease",
              }}
            >
              Welcome to the{" "}
              <span className="text-gold-gradient">Final Settlement65</span>
              {" "}Portal
            </h1>

            <h2
              className="hero-subtitle"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1rem, 2.2vw, 1.45rem)",
                fontWeight: 400,
                color: "var(--text-secondary)",
                marginBottom: "26px",
                letterSpacing: "0.06em",
                transition: "color 0.3s ease",
              }}
            >
              settlement65.com
            </h2>

            <p
              className="hero-desc"
              style={{ fontSize: "1.06rem", color: "var(--text-body)", maxWidth: "700px", lineHeight: 1.85, marginBottom: "24px", transition: "color 0.3s ease" }}
            >
              Settlement65.com provides a central online point of access for members during the concluding stage of the program.
              Following completion of the program&apos;s principal activities, the remaining focus is on addressing outstanding settlement
              and distribution matters in accordance with applicable records and procedures.
            </p>

            {/* Member lead advisory box */}
            <div
              className="notice-box"
              style={{
                maxWidth: "700px",
                marginBottom: "36px",
                background: "var(--badge-bg)",
                borderLeft: "3px solid var(--gold)",
                padding: "16px 20px",
                borderRadius: "0 10px 10px 0",
              }}
            >
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.75, transition: "color 0.3s ease" }}>
                Members are invited to review the information on this website and use the member login facility where access has been provided. Individual updates and case-specific communications will be delivered privately by email.
              </p>
            </div>

            {/* CTA button */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
              <a
                id="hero-member-access-btn"
                href="#member-access"
                className="btn-gold"
                style={{
                  padding: "14px 34px",
                  borderRadius: "9px",
                  fontSize: "13.5px",
                  letterSpacing: "0.06em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <UserRoundCheck size={16} />
                MEMBER ACCESS
              </a>

              <a
                href="#settlement-phase"
                style={{
                  padding: "13px 26px",
                  borderRadius: "9px",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  color: "var(--text-secondary)",
                  background: "transparent",
                  border: "1px solid var(--card-border)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold)";
                  e.currentTarget.style.borderColor = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--card-border)";
                }}
              >
                Learn More
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Bottom fade */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "130px", background: "var(--hero-fade)", zIndex: 3, transition: "background 0.35s ease" }} />
        </section>

        {/* ══════════════════════════════════════════
            SECTION 1 — THE FINAL SETTLEMENT AND DISTRIBUTION PHASE
        ══════════════════════════════════════════ */}
        <section id="settlement-phase" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px 70px" }}>
          <ScrollReveal style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-badge" style={{ marginBottom: "20px", display: "inline-flex" }}>
              <Clock size={11} strokeWidth={2.5} />
              Phase 01 · Transition
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", transition: "color 0.3s ease" }}>
              1. The Final Settlement and <span className="text-gold-gradient">Distribution Phase</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "760px", margin: "0 auto 12px", lineHeight: 1.85, transition: "color 0.3s ease" }}>
              The program has transitioned from its principal activities to the administration of outstanding settlement and distribution matters.
            </p>
            <p style={{ color: "var(--gold)", fontSize: "0.92rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Activities during this phase include:
            </p>
          </ScrollReveal>

          {/* 4 Activities Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "36px" }}>
            {[
              {
                icon: <ClipboardCheck size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "Concluded Operations",
                desc: "Completing administrative steps for concluded program operations",
              },
              {
                icon: <Coins size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "Residual Matters",
                desc: "Addressing residual financial matters and distributions",
              },
              {
                icon: <BadgeCheck size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "Distribution Processing",
                desc: "Processing settlement distributions to eligible members where applicable",
              },
              {
                icon: <FileCheck2 size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "Final Closure",
                desc: "Providing final closure for completed participant records",
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <RippleCard style={{ padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <IconBox>{card.icon}</IconBox>
                  <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", transition: "color 0.3s ease" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.75, transition: "color 0.3s ease", marginTop: "auto" }}>
                    {card.desc}
                  </p>
                </RippleCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Systematic work note */}
          <ScrollReveal direction="up" delay={0.3}>
            <div
              className="glass-card"
              style={{
                padding: "24px 30px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                borderRadius: "12px",
                background: "var(--badge-bg)",
                border: "1px solid var(--badge-border)",
              }}
            >
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--icon-box-bg)", border: "1px solid var(--icon-box-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <CheckCircle2 size={18} color="var(--gold)" strokeWidth={2.2} />
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 500, lineHeight: 1.7, margin: 0, transition: "color 0.3s ease" }}>
                Settlement and distribution work is handled systematically, based on available documentation and established procedures.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 2 — SETTLEMENT ADMINISTRATION AND VERIFICATION
        ══════════════════════════════════════════ */}
        <section
          id="administration"
          style={{
            background: "var(--section-privacy-bg)",
            borderTop: "1px solid var(--section-privacy-border)",
            borderBottom: "1px solid var(--section-privacy-border)",
            padding: "96px 24px",
            transition: "background-color 0.35s ease, border-color 0.35s ease",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <ScrollReveal style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="section-badge" style={{ marginBottom: "20px", display: "inline-flex" }}>
                <ShieldCheck size={11} strokeWidth={2.5} />
                Phase 02 · Administration
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.25, marginBottom: "16px", transition: "color 0.3s ease" }}>
                2. Settlement Administration and <span className="text-gold-gradient">Verification</span>
              </h2>
              <p style={{ color: "var(--text-body)", fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "780px", margin: "0 auto", transition: "color 0.3s ease" }}>
                Settlement and distribution operations involve standard administrative and verification procedures to ensure that distributions are managed appropriately:
              </p>
            </ScrollReveal>

            {/* 4 Verification Pillars */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "40px" }}>
              {[
                {
                  icon: <UserRoundCheck size={22} color="var(--gold)" strokeWidth={1.8} />,
                  title: "Identity & Documentation",
                  desc: "Verification of member identity and documentation",
                },
                {
                  icon: <FileSearch size={22} color="var(--gold)" strokeWidth={1.8} />,
                  title: "Records Examination",
                  desc: "Examination of existing program records and historical account data",
                },
                {
                  icon: <Scale size={22} color="var(--gold)" strokeWidth={1.8} />,
                  title: "Balance Reconciliation",
                  desc: "Reconciliation of financial balances, distributions, and settlement obligations",
                },
                {
                  icon: <Building2 size={22} color="var(--gold)" strokeWidth={1.8} />,
                  title: "Regulatory Adherence",
                  desc: "Adherence to standard administrative controls and applicable regulatory requirements",
                },
              ].map((card, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <RippleCard style={{ padding: "32px 28px", height: "100%", background: "var(--card-bg)" }}>
                    <IconBox>{card.icon}</IconBox>
                    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", transition: "color 0.3s ease" }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: "0.885rem", color: "var(--text-secondary)", lineHeight: 1.75, transition: "color 0.3s ease" }}>
                      {card.desc}
                    </p>
                  </RippleCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Compliance notice box */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="notice-box" style={{ maxWidth: "880px", margin: "0 auto" }}>
                <p style={{ fontSize: "0.88rem", color: "var(--gold)", fontWeight: 700, marginBottom: "8px", display: "flex", alignItems: "center", gap: "7px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  <AlertCircle size={15} /> Administrative Notice
                </p>
                <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0, transition: "color 0.3s ease" }}>
                  Certain settlement files may require additional documentation, supplementary review, or legal and regulatory compliance steps prior to processing.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 3 — DISTRIBUTION PROCESSING AND TIMING
        ══════════════════════════════════════════ */}
        <section id="distribution-timing" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px 70px" }}>
          <ScrollReveal style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-badge" style={{ marginBottom: "20px", display: "inline-flex" }}>
              <Hourglass size={11} strokeWidth={2.5} />
              Phase 03 · Timelines
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", transition: "color 0.3s ease" }}>
              3. Distribution Processing and <span className="text-gold-gradient">Timing</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "780px", margin: "0 auto", lineHeight: 1.85, transition: "color 0.3s ease" }}>
              Distributions are addressed systematically, based on the status of individual records and the completion of necessary verification steps:
            </p>
          </ScrollReveal>

          {/* 3 Process Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "36px" }}>
            {[
              {
                step: "01",
                icon: <Clock size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "Ordinary Course Processing",
                desc: "Cases are reviewed in the ordinary course of administrative processing.",
              },
              {
                step: "02",
                icon: <Hourglass size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "Processing Dependencies",
                desc: "Processing times depend on file complexity, documentation availability, and verification outcomes.",
              },
              {
                step: "03",
                icon: <Landmark size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "Settlement Arrangements",
                desc: "Where distributions are approved, they are administered through established settlement arrangements.",
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction="up">
                <RippleCard style={{ padding: "34px 30px", height: "100%", position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "20px",
                      fontSize: "2.8rem",
                      fontWeight: 900,
                      color: "var(--step-num-color)",
                      lineHeight: 1,
                      fontFamily: "var(--font-playfair), serif",
                      pointerEvents: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {card.step}
                  </div>
                  <IconBox>{card.icon}</IconBox>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px", transition: "color 0.3s ease" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8, transition: "color 0.3s ease" }}>
                    {card.desc}
                  </p>
                </RippleCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Direct Member Notification Highlight */}
          <ScrollReveal direction="up" delay={0.25}>
            <div
              className="glass-card"
              style={{
                padding: "26px 32px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                borderRadius: "14px",
                border: "1px solid var(--card-border)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "var(--icon-box-bg)", border: "1px solid var(--icon-box-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Bell size={22} color="var(--gold)" strokeWidth={1.8} />
              </div>
              <div>
                <span style={{ fontSize: "10px", color: "var(--gold)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                  Member Communication Alert
                </span>
                <p style={{ fontSize: "0.96rem", color: "var(--text-primary)", fontWeight: 600, lineHeight: 1.65, margin: 0, transition: "color 0.3s ease" }}>
                  Members will be notified directly when their file has been reviewed and when any specific action or information is required.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 4 — COMMUNICATIONS AND MEMBER RECORDS
        ══════════════════════════════════════════ */}
        <section id="communications" style={{ position: "relative", padding: "110px 24px", overflow: "hidden" }}>

          {/* Background image */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image src="/s65-comm-bg.jpg" alt="Global financial center" fill style={{ objectFit: "cover", objectPosition: "center 55%" }} />
            <div style={{ position: "absolute", inset: 0, background: "var(--settlement-overlay)", transition: "background 0.35s ease" }} />
            <div style={{ position: "absolute", inset: 0, background: "var(--settlement-radial)", transition: "background 0.35s ease" }} />
          </div>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
            <ScrollReveal style={{ textAlign: "center", marginBottom: "60px" }}>
              <div className="section-badge" style={{ marginBottom: "20px", display: "inline-flex" }}>
                <MailOpen size={11} strokeWidth={2.5} />
                Phase 04 · Privacy & Channels
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", transition: "color 0.3s ease" }}>
                4. Communications and <span className="text-gold-gradient">Member Records</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", maxWidth: "760px", margin: "0 auto", lineHeight: 1.85, transition: "color 0.3s ease" }}>
                Communication during the settlement phase is handled through specific channels to maintain accuracy and privacy:
              </p>
              <div className="divider-gold" style={{ marginTop: "24px" }} />
            </ScrollReveal>

            {/* 3 Pillars */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "36px" }}>
              {[
                {
                  step: "01",
                  icon: <Globe size={22} color="var(--gold)" strokeWidth={1.8} />,
                  title: "General Portal Access",
                  desc: "General information is made available through this portal",
                },
                {
                  step: "02",
                  icon: <MailOpen size={22} color="var(--gold)" strokeWidth={1.8} />,
                  title: "Direct Case Communications",
                  desc: "Case-specific communications and status updates are provided to members directly by email",
                },
                {
                  step: "03",
                  icon: <Lock size={22} color="var(--gold)" strokeWidth={1.8} />,
                  title: "Privacy & Standards",
                  desc: "Records are maintained in accordance with standard administrative and privacy practices",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.12} direction="up">
                  <RippleCard
                    style={{ padding: "32px 28px", height: "100%", background: "var(--card-bg-step)" }}
                  >
                    <div style={{ position: "absolute", top: "14px", right: "18px", fontSize: "2.6rem", fontWeight: 900, color: "var(--step-num-color)", lineHeight: 1, fontFamily: "var(--font-playfair), serif", pointerEvents: "none", transition: "color 0.3s ease" }}>
                      {item.step}
                    </div>
                    <div className="icon-bg" style={{ width: "46px", height: "46px", marginBottom: "18px" }}>{item.icon}</div>
                    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", transition: "color 0.3s ease" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.89rem", color: "var(--text-secondary)", lineHeight: 1.75, transition: "color 0.3s ease" }}>{item.desc}</p>
                  </RippleCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Member Details Reminder */}
            <ScrollReveal direction="up" delay={0.25}>
              <div
                style={{
                  maxWidth: "760px",
                  margin: "0 auto",
                  padding: "20px 28px",
                  borderRadius: "12px",
                  background: "var(--badge-bg)",
                  border: "1px solid var(--badge-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textAlign: "left",
                }}
              >
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "var(--icon-box-bg)", border: "1px solid var(--icon-box-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Info size={17} color="var(--gold)" strokeWidth={2} />
                </div>
                <p style={{ fontSize: "0.93rem", color: "var(--text-primary)", fontWeight: 600, lineHeight: 1.7, margin: 0, transition: "color 0.3s ease" }}>
                  Members should ensure that contact details provided in connection with their file remain current.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 5 — MEMBER ACCESS AND INQUIRIES
        ══════════════════════════════════════════ */}
        <section id="member-access" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}>
          <ScrollReveal style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="section-badge" style={{ marginBottom: "20px", display: "inline-flex" }}>
              <Lock size={11} strokeWidth={2.5} />
              Phase 05 · Member Portal
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", transition: "color 0.3s ease" }}>
              5. Member Access and <span className="text-gold-gradient">Inquiries</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "780px", margin: "0 auto", lineHeight: 1.85, transition: "color 0.3s ease" }}>
              Members who have been provided with login credentials may access the member area to review information relevant to their record:
            </p>
          </ScrollReveal>

          {/* 3 Information points */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {[
              {
                icon: <ShieldCheck size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "Authorized Account Holders",
                desc: "The member login facility is available for authorized account holders",
              },
              {
                icon: <UserRoundCheck size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "Individual Access Grant",
                desc: "Access is provided on an individual basis following initial registration or notification",
              },
              {
                icon: <HelpCircle size={22} color="var(--gold)" strokeWidth={1.8} />,
                title: "General Inquiries Facility",
                desc: "General questions regarding settlement procedures may be directed through the contact facility on this portal",
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <RippleCard style={{ padding: "30px 26px", height: "100%" }}>
                  <IconBox>{card.icon}</IconBox>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", transition: "color 0.3s ease" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.885rem", color: "var(--text-secondary)", lineHeight: 1.75, transition: "color 0.3s ease" }}>
                    {card.desc}
                  </p>
                </RippleCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Member Login Facility Form */}
          <ScrollReveal style={{ maxWidth: "460px", margin: "0 auto 60px" }}>
            <div
              className="glass-card"
              style={{ padding: "40px 36px" }}
            >
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <div style={{ width: "66px", height: "66px", borderRadius: "16px", background: "var(--icon-box-bg)", border: "1px solid var(--icon-box-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", transition: "all 0.3s ease" }}>
                  <UserRoundCheck size={28} color="var(--gold)" strokeWidth={1.6} />
                </div>
                <div style={{ fontSize: "11px", color: "var(--gold)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>
                  Settlement65 Portal
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "4px", transition: "color 0.3s ease" }}>
                  Member Login Facility
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                <div>
                  <label htmlFor="member-login" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    <Users size={12} color="var(--text-secondary)" /> Member ID
                  </label>
                  <input id="member-login" type="text" className="login-input" placeholder="Enter your member ID" disabled aria-disabled="true" />
                </div>
                <div>
                  <label htmlFor="member-password" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    <Lock size={12} color="var(--text-secondary)" /> Password
                  </label>
                  <input id="member-password" type="password" className="login-input" placeholder="Enter your password" disabled aria-disabled="true" />
                </div>
              </div>

              <button
                id="login-submit-btn"
                disabled
                aria-disabled="true"
                style={{
                  width: "100%", padding: "14px", borderRadius: "9px",
                  background: "var(--input-disabled-bg)",
                  border: "1px solid var(--input-border)",
                  color: "var(--text-muted)",
                  fontSize: "12.5px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                  cursor: "not-allowed",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  opacity: 0.75,
                  transition: "all 0.3s ease",
                }}
              >
                <Lock size={14} color="var(--text-muted)" />
                MEMBER LOGIN
              </button>

              <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "11.5px", marginTop: "18px", lineHeight: 1.6, transition: "color 0.3s ease" }}>
                Access is provided on an individual basis following initial registration or notification.
              </p>
            </div>
          </ScrollReveal>

          {/* Final Concluding Advisory Banner */}
          <ScrollReveal>
            <div
              style={{
                background: "var(--notice-banner-bg)",
                border: "1px solid var(--notice-banner-border)",
                borderRadius: "18px",
                padding: "44px 38px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "var(--card-shadow)",
                transition: "all 0.35s ease",
                textAlign: "center",
              }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", background: "radial-gradient(circle at top right, var(--orb-glow) 0%, transparent 70%)", borderRadius: "0 18px 0 0", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "160px", height: "160px", background: "radial-gradient(circle at bottom left, var(--orb-glow) 0%, transparent 70%)", borderRadius: "0 0 0 18px", pointerEvents: "none" }} />

              <div style={{ position: "relative", zIndex: 1, maxWidth: "780px", margin: "0 auto" }}>
                <div className="section-badge" style={{ marginBottom: "16px", display: "inline-flex" }}>
                  <Info size={11} strokeWidth={2.5} />
                  Program Advisory
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "14px", transition: "color 0.3s ease" }}>
                  Concluding Stage Notification
                </h3>
                <p style={{ color: "var(--gold)", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.8, marginBottom: "0", transition: "color 0.3s ease" }}>
                  Members are advised to review the portal regularly for program updates during this concluding phase.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
