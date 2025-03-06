"use client";

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const HeroSection: React.FC = () => (
  <section style={homeStyles.hero}>
    <div style={homeStyles.heroText}>
      <h1 style={homeStyles.heroTitle}>ClearPath Navigation</h1>
      <p style={homeStyles.heroSubtitle}>
        Experience advanced, truck-specific navigation with real-time updates, hazard reporting, and optimized routes.
      </p>
      <button style={homeStyles.heroButton}>Optimize Your Routes Today</button>
    </div>
    <div style={homeStyles.heroImage}>
      <span style={homeStyles.heroImageText}>Hero Image Placeholder</span>
    </div>
  </section>
);

const StatsSection: React.FC = () => (
  <section style={homeStyles.stats}>
    <h2 style={homeStyles.sectionTitle}>ClearPath Navigation in Action</h2>
    <div style={homeStyles.statsGrid}>
      <div style={homeStyles.statItem}>
        <div style={homeStyles.statNumber}>9M+</div>
        <div style={homeStyles.statText}>Optimized Routes Delivered</div>
      </div>
      <div style={homeStyles.statItem}>
        <div style={homeStyles.statNumber}>1/3</div>
        <div style={homeStyles.statText}>Truckers Trust ClearPath</div>
      </div>
      <div style={homeStyles.statItem}>
        <div style={homeStyles.statNumber}>37M+</div>
        <div style={homeStyles.statText}>Miles Optimized Daily</div>
      </div>
      <div style={homeStyles.statItem}>
        <div style={homeStyles.statNumber}>450K+</div>
        <div style={homeStyles.statText}>Community Reports Daily</div>
      </div>
    </div>
  </section>
);

const FeaturesSection: React.FC = () => {
  const featuresData = [
    "Navigation & Traffic",
    "Customizable Route Planning",
    "Crowdsourced Hazard Reporting",
    "Advanced Data Insights",
    "Sensor Integration",
    "Community Communication",
  ];

  return (
    <section style={homeStyles.features}>
      <h2 style={homeStyles.sectionTitle}>Key Features</h2>
      <div style={homeStyles.featureGrid}>
        {featuresData.map((feature, index) => (
          <div key={index} style={homeStyles.featureCard}>
            <div style={homeStyles.featurePlaceholder}>
              <span style={{ lineHeight: "200px", color: "#888" }}>Image Placeholder</span>
            </div>
            <h3 style={homeStyles.featureTitle}>{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const EnterpriseSolutionsSection: React.FC = () => {
  const solutionsData = [
    {
      icon: "🚚",
      title: "Industry-Focused Design",
      description: "Tailored routing and real-time alerts addressing unique trucking challenges.",
    },
    {
      icon: "📡",
      title: "Advanced Sensor Technology",
      description: "Utilizes sensor data for accurate overhead clearance and safe navigation.",
    },
    {
      icon: "💬",
      title: "Community-Driven Insights",
      description: "Driver community reports hazards and provides route optimization tips.",
    },
  ];

  return (
    <section style={homeStyles.enterprise}>
      <h2 style={homeStyles.sectionTitle}>About ClearPath</h2>
      <div style={homeStyles.enterpriseGrid}>
        {solutionsData.map((solution, index) => (
          <div key={index} style={homeStyles.enterpriseCard}>
            <div style={homeStyles.enterpriseIcon}>{solution.icon}</div>
            <h3 style={homeStyles.enterpriseTitle}>{solution.title}</h3>
            <p style={homeStyles.enterpriseDesc}>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTASection: React.FC = () => (
  <section style={homeStyles.cta}>
    <h2 style={homeStyles.ctaTitle}>Ready to Transform Your Trucking Experience?</h2>
    <p style={homeStyles.ctaDesc}>
      Join thousands of drivers and fleet managers who trust ClearPath for optimized routes, enhanced safety, and real-time updates.
    </p>
    <button style={homeStyles.ctaButton}>Get Started Now</button>
    <button style={homeStyles.ctaSecondaryButton}>Learn More</button>
  </section>
);

const Home: React.FC = () => {
  return (
    <div style={homeStyles.body}>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <EnterpriseSolutionsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;

const homeStyles = {
  body: {
    margin: 0,
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#fff",
    color: "#333",
    minHeight: "100vh",
    overflowY: "auto" as const,
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "120px 60px",
    background: "linear-gradient(135deg, #2271b1 0%, #4CAF50 100%)",
    color: "#fff",
  },
  heroText: {
    maxWidth: "50%",
  },
  heroTitle: {
    fontSize: "56px",
    fontWeight: 700,
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "22px",
    lineHeight: 1.5,
    marginBottom: "40px",
  },
  heroButton: {
    fontSize: "20px",
    padding: "18px 36px",
    backgroundColor: "#fff",
    color: "#2271b1",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  heroImage: {
    width: "45%",
    height: "450px",
    backgroundColor: "#4CAF50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  heroImageText: {
    fontSize: "18px",
    color: "#fff",
  },
  stats: {
    padding: "100px 60px",
    backgroundColor: "#f5f5f5",
    textAlign: "center" as const,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px",
    marginTop: "60px",
  },
  statItem: {
    textAlign: "center" as const,
  },
  statNumber: {
    fontSize: "48px",
    fontWeight: 700,
    color: "#2271b1",
    marginBottom: "10px",
  },
  statText: {
    fontSize: "18px",
    color: "#555",
  },
  features: {
    padding: "100px 60px",
    backgroundColor: "#fff",
  },
  sectionTitle: {
    textAlign: "center" as const,
    fontSize: "42px",
    fontWeight: 600,
    marginBottom: "60px",
    color: "#333",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
  },
  featureCard: {
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    textAlign: "center" as const,
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  featurePlaceholder: {
    width: "100%",
    height: "200px",
    backgroundColor: "#ddd",
    marginBottom: "20px",
    borderRadius: "8px",
  },
  featureTitle: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "10px",
    color: "#2271b1",
  },
  enterprise: {
    padding: "100px 60px",
    backgroundColor: "#0a1929",
    color: "#fff",
  },
  enterpriseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
    marginTop: "60px",
  },
  enterpriseCard: {
    padding: "30px",
    backgroundColor: "#0f2942",
    borderRadius: "10px",
  },
  enterpriseIcon: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#4CAF50",
  },
  enterpriseTitle: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "15px",
  },
  enterpriseDesc: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: "#bbb",
  },
  cta: {
    padding: "100px 60px",
    backgroundColor: "#2271b1",
    color: "#fff",
    textAlign: "center" as const,
  },
  ctaTitle: {
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "20px",
  },
  ctaDesc: {
    fontSize: "20px",
    lineHeight: 1.5,
    marginBottom: "40px",
    maxWidth: "800px",
    margin: "0 auto 40px",
  },
  ctaButton: {
    padding: "18px 36px",
    backgroundColor: "#fff",
    color: "#2271b1",
    border: "none",
    borderRadius: "8px",
    fontSize: "20px",
    fontWeight: 600,
    cursor: "pointer",
    marginRight: "20px",
  },
  ctaSecondaryButton: {
    padding: "16px 34px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: "8px",
    fontSize: "20px",
    fontWeight: 600,
    cursor: "pointer",
  },
};
