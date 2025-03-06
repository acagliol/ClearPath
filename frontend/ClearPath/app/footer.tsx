"use client";

import React from "react";

const Footer: React.FC = () => (
  <footer style={footerStyles.footer}>
    <div style={footerStyles.footerLinks}>
      <a style={footerStyles.footerLink} href="#privacy">Privacy Policy</a>
      <a style={footerStyles.footerLink} href="#terms">Terms of Service</a>
      <a style={footerStyles.footerLink} href="#contact">Contact Us</a>
    </div>
    <p>&copy; {new Date().getFullYear()} ClearPath. All Rights Reserved.</p>
  </footer>
);

export default Footer;

const footerStyles = {
  footer: {
    padding: "60px",
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center" as const,
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "20px",
  },
  footerLink: {
    color: "#bbb",
    textDecoration: "none",
    fontSize: "14px",
  },
};
