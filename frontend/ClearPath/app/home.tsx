import React from 'react';

// Inline style objects for our components
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box' as 'border-box',
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold' as 'bold',
    color: '#0077cc',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    cursor: 'pointer',
    fontSize: '16px',
    color: '#333',
    textDecoration: 'none',
  },
  hero: {
    backgroundColor: '#f5f5f5',
    padding: '100px 40px',
    textAlign: 'center' as 'center',
  },
  heroTitle: {
    fontSize: '48px',
    margin: '0 0 20px',
  },
  heroSubtitle: {
    fontSize: '20px',
    margin: '0 0 40px',
  },
  ctaButton: {
    fontSize: '18px',
    padding: '15px 30px',
    backgroundColor: '#0077cc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  featuresSection: {
    padding: '80px 40px',
    backgroundColor: '#fff',
  },
  featuresTitle: {
    textAlign: 'center' as 'center',
    fontSize: '36px',
    marginBottom: '40px',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  featureCard: {
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '8px',
    textAlign: 'center' as 'center',
  },
  featureImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover' as 'cover',
    marginBottom: '20px',
    backgroundColor: '#ddd',
  },
  featureTitle: {
    fontSize: '20px',
    margin: '0 0 10px',
  },
  featureDescription: {
    fontSize: '16px',
    color: '#666',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px',
    textAlign: 'center' as 'center',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  footerCopy: {
    fontSize: '14px',
  },
};

// Header component replicating the top navigation
const Header: React.FC = () => (
  <header style={styles.header}>
    <div style={styles.logo}>Trucker Path</div>
    <nav style={styles.nav}>
      <a style={styles.navItem} href="#">For Drivers</a>
      <a style={styles.navItem} href="#">For Fleets</a>
      <a style={styles.navItem} href="#">For Brokers</a>
      <a style={styles.navItem} href="#">Company</a>
      <a style={styles.navItem} href="#">Blog</a>
    </nav>
  </header>
);

// Hero section with title, subtitle and call-to-action button
const HeroSection: React.FC = () => (
  <section style={styles.hero}>
    <h1 style={styles.heroTitle}>America's Most Popular Truck Navigation App</h1>
    <p style={styles.heroSubtitle}>
      Truck-safe routing, real-time updates, and fuel savings for truckers on the road.
    </p>
    <button style={styles.ctaButton}>Get A Demo</button>
  </section>
);

// Define a type for our feature items
interface Feature {
  title: string;
  description: string;
  imageUrl?: string;
}

// Sample feature data with placeholder images
const featuresData: Feature[] = [
  {
    title: 'Truck Navigation',
    description: 'Safe routing for commercial trucks on the road.',
    imageUrl: 'https://via.placeholder.com/300x150',
  },
  {
    title: 'Discounted Fuel Deals',
    description: 'Save money every time you fuel at participating stops.',
    imageUrl: 'https://via.placeholder.com/300x150',
  },
  {
    title: 'Load Board',
    description: 'Find and post loads quickly and efficiently.',
    imageUrl: 'https://via.placeholder.com/300x150',
  },
  {
    title: 'Driver Community',
    description: 'Real-time, crowdsourced road intelligence and updates.',
    imageUrl: 'https://via.placeholder.com/300x150',
  },
];

// Features section displaying a grid of feature cards
const FeaturesSection: React.FC = () => (
  <section style={styles.featuresSection}>
    <h2 style={styles.featuresTitle}>Our Solutions</h2>
    <div style={styles.featuresGrid}>
      {featuresData.map((feature, index) => (
        <div key={index} style={styles.featureCard}>
          <img
            src={feature.imageUrl}
            alt={feature.title}
            style={styles.featureImage}
          />
          <h3 style={styles.featureTitle}>{feature.title}</h3>
          <p style={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

// Footer component with placeholder links and company info
const Footer: React.FC = () => (
  <footer style={styles.footer}>
    <div style={styles.footerLinks}>
      <a style={styles.footerLink} href="#">Help Center</a>
      <a style={styles.footerLink} href="#">Terms & Privacy Policy</a>
      <a style={styles.footerLink} href="#">Contact Us</a>
    </div>
    <div style={styles.footerCopy}>
      &copy; {new Date().getFullYear()} Trucker Path Inc.
    </div>
  </footer>
);

// HomePage combines all the sections together
const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
