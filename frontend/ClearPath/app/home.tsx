import React, { useState } from 'react';

/* Dropdown Component */
interface DropdownProps {
  title: string;
  items: string[];
}
const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block', padding: '0 10px', cursor: 'pointer' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div>{title}</div>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: 1000,
            minWidth: '150px',
          }}
        >
          {items.map((item, index) => (
            <div key={index} style={{ padding: '10px', borderBottom: index < items.length - 1 ? '1px solid #eee' : 'none' }}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* Styles */
const styles = {
  body: {
    margin: 0,
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#fff',
    color: '#333',
    minHeight: '100vh',
    overflowY: 'auto', // Enable scrolling for the entire page
  } as React.CSSProperties,
  container: {
    width: '100%',
  } as React.CSSProperties,
  /* Header Styles */
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 60px',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    zIndex: 1000,
  } as React.CSSProperties,
  logo: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#1a1a1a',
  } as React.CSSProperties,
  nav: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  } as React.CSSProperties,
  /* Hero Section Styles */
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '120px 60px',
    background: 'linear-gradient(135deg, #F0F0F0 0%, #FFFFFF 100%)',
  } as React.CSSProperties,
  heroText: {
    maxWidth: '50%',
  } as React.CSSProperties,
  heroTitle: {
    fontSize: '56px',
    fontWeight: 700,
    marginBottom: '20px',
    color: '#222',
  } as React.CSSProperties,
  heroSubtitle: {
    fontSize: '22px',
    lineHeight: 1.5,
    color: '#555',
    marginBottom: '40px',
  } as React.CSSProperties,
  heroButton: {
    fontSize: '20px',
    padding: '18px 36px',
    backgroundColor: '#1a73e8',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  } as React.CSSProperties,
  heroImage: {
    width: '45%',
    height: '450px',
    backgroundColor: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
  } as React.CSSProperties,
  heroImageText: {
    fontSize: '18px',
    color: '#888',
  } as React.CSSProperties,
  /* Features Section Styles */
  features: {
    padding: '100px 60px',
    backgroundColor: '#fafafa',
  } as React.CSSProperties,
  sectionTitle: {
    textAlign: 'center' as const,
    fontSize: '42px',
    fontWeight: 600,
    marginBottom: '60px',
  } as React.CSSProperties,
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
  } as React.CSSProperties,
  featureCard: {
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    textAlign: 'center' as const,
  } as React.CSSProperties,
  featurePlaceholder: {
    width: '100%',
    height: '250px',
    backgroundColor: '#ccc',
    marginBottom: '20px',
    borderRadius: '8px',
  } as React.CSSProperties,
  featureTitle: {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '10px',
  } as React.CSSProperties,
  featureDesc: {
    fontSize: '16px',
    color: '#666',
  } as React.CSSProperties,
  /* About Section Styles */
  about: {
    display: 'flex',
    alignItems: 'center',
    padding: '100px 60px',
    backgroundColor: '#fff',
    gap: '40px',
  } as React.CSSProperties,
  aboutText: {
    flex: 1,
  } as React.CSSProperties,
  aboutImage: {
    flex: 1,
    height: '400px',
    backgroundColor: '#ddd',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  aboutImageText: {
    fontSize: '18px',
    color: '#888',
  } as React.CSSProperties,
  aboutTitle: {
    fontSize: '36px',
    fontWeight: 700,
    marginBottom: '20px',
  } as React.CSSProperties,
  aboutDesc: {
    fontSize: '18px',
    lineHeight: 1.6,
    color: '#555',
  } as React.CSSProperties,
  /* Call-to-Action (CTA) Section Styles */
  cta: {
    padding: '100px 60px',
    backgroundColor: '#1a73e8',
    color: '#fff',
    textAlign: 'center' as const,
  } as React.CSSProperties,
  ctaTitle: {
    fontSize: '42px',
    fontWeight: 700,
    marginBottom: '20px',
  } as React.CSSProperties,
  ctaDesc: {
    fontSize: '20px',
    lineHeight: 1.5,
    marginBottom: '40px',
  } as React.CSSProperties,
  ctaButton: {
    padding: '10px 20px',
    backgroundColor: '#1a73e8',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  } as React.CSSProperties,
  /* Footer Section Styles */
  footer: {
    padding: '60px',
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center' as const,
  } as React.CSSProperties,
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '20px',
  } as React.CSSProperties,
  footerLink: {
    color: '#bbb',
    textDecoration: 'none',
    fontSize: '14px',
  } as React.CSSProperties,
};

/* Updated Header Component with Dropdown Menus */
const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Clear Path</div>
      <nav style={styles.nav}>
        <Dropdown
          title="For Drivers"
          items={[
            "Truck Navigation for Drivers",
            "Over-the-Road Map",
            "Marketplace",
            "Discounted Fuel Deals",
            "Find Loads",
            "Fuel Prices",
            "Driver Community",
          ]}
        />
        <Dropdown
          title="For Fleets"
          items={[
            "Truck Navigation for Fleets",
            "Marketplace",
            "Fleet Management",
            "Fleet Fuel Payments",
          ]}
        />
        <Dropdown
          title="For Brokers"
          items={[
            "Post Freight",
            "Find Carriers",
            "Trucker Path for Brokerages",
            "Freight Market Data",
          ]}
        />
        <Dropdown
          title="Company"
          items={["Our Story", "Help Center", "Blog", "Contact Us"]}
        />
        <Dropdown
          title="Partners"
          items={[
            "Fuel Network",
            "Integration Partners",
            "Local Business Partners",
            "Advertise With Us",
          ]}
        />
        <button style={styles.ctaButton}>GET A DEMO</button>
      </nav>
    </header>
  );
};

/* Hero Section Component */
const HeroSection: React.FC = () => (
  <section id="hero" style={styles.hero}>
    <div style={styles.heroText}>
      <h1 style={styles.heroTitle}>ClearPath Navigation</h1>
      <p style={styles.heroSubtitle}>
        Experience advanced, truck-specific navigation with real-time updates, hazard reporting, and optimized routes.
      </p>
      <button style={styles.heroButton}>Optimize Your Routes Today</button>
    </div>
    <div style={styles.heroImage}>
      <span style={styles.heroImageText}>Image Placeholder (450px height)</span>
    </div>
  </section>
);

/* Features Section Component */
const FeaturesSection: React.FC = () => {
  const featuresData = [
    {
      title: 'Navigation & Traffic',
      description:
        'Turn-by-turn directions, real-time traffic updates, and alternate routes tailored for commercial vehicles.',
    },
    {
      title: 'Customizable Route Planning',
      description:
        'Input truck dimensions and restrictions to generate routes that avoid low-clearance and restricted areas.',
    },
    {
      title: 'Crowdsourced Hazard Reporting',
      description:
        'Drivers report hazards, accidents, and closures—with community voting to ensure accuracy.',
    },
    {
      title: 'Advanced Data Insights',
      description:
        'Analyze historical trends, high braking zones, and fleet metrics to optimize performance.',
    },
    {
      title: 'Sensor Integration',
      description:
        'Real-time overhead clearance data from roof-mounted sensors for safe passage under low bridges.',
    },
    {
      title: 'Community Communication',
      description:
        'Built-in chat and forums let drivers share insights, weather alerts, and route tips.',
    },
  ];

  return (
    <section id="features" style={styles.features}>
      <h2 style={styles.sectionTitle}>Key Features</h2>
      <div style={styles.featureGrid}>
        {featuresData.map((feature, index) => (
          <div key={index} style={styles.featureCard}>
            <div style={styles.featurePlaceholder}>
              <span style={{ lineHeight: '250px', color: '#888' }}>
                Image Placeholder (250px height)
              </span>
            </div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* About Section Component */
const AboutSection: React.FC = () => (
  <section id="about" style={styles.about}>
    <div style={styles.aboutText}>
      <h2 style={styles.aboutTitle}>About ClearPath</h2>
      <p style={styles.aboutDesc}>
        ClearPath is designed specifically for the trucking industry—addressing unique challenges with truck-specific routing, real-time hazard alerts, and community-driven insights.
        Our system factors in vehicle dimensions, weight, and restrictions to provide safe and optimized routes for every journey.
      </p>
      <p style={styles.aboutDesc}>
        Leveraging advanced sensor technology and a vibrant driver community, ClearPath ensures that fleet managers and truck drivers always have the information they need to navigate efficiently and safely.
      </p>
    </div>
    <div style={styles.aboutImage}>
      <span style={styles.aboutImageText}>Image Placeholder (400px height)</span>
    </div>
  </section>
);

/* Call-to-Action (CTA) Section Component */
const CTASection: React.FC = () => (
  <section id="cta" style={styles.cta}>
    <h2 style={styles.ctaTitle}>Ready to Transform Your Trucking Experience?</h2>
    <p style={styles.ctaDesc}>
      Join thousands of drivers and fleet managers who trust ClearPath for optimized routes, enhanced safety, and real-time updates.
    </p>
    <button style={styles.ctaButton}>Get Started Now</button>
  </section>
);

/* Footer Component */
const Footer: React.FC = () => (
  <footer id="footer" style={styles.footer}>
    <div style={styles.footerLinks}>
      <a style={styles.footerLink} href="#privacy">Privacy Policy</a>
      <a style={styles.footerLink} href="#terms">Terms of Service</a>
      <a style={styles.footerLink} href="#contact">Contact Us</a>
    </div>
    <p>&copy; {new Date().getFullYear()} ClearPath. All Rights Reserved.</p>
  </footer>
);

/* Main HomePage Component */
const HomePage: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
