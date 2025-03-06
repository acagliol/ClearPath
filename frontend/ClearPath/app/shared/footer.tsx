"use client";

import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      {/* Top row: columns */}
      <div style={styles.columnsContainer}>
        {/* FOR DRIVERS */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>FOR DRIVERS</h4>
          <a style={styles.columnLink} href="#">
            Truck Navigation for Drivers
          </a>
          <a style={styles.columnLink} href="#">
            Over-the-Road Map
          </a>
          <a style={styles.columnLink} href="#">
            Discounted Fuel Deals
          </a>
          <a style={styles.columnLink} href="#">
            Find Loads
          </a>
          <a style={styles.columnLink} href="#">
            Fuel Prices
          </a>
          <a style={styles.columnLink} href="#">
            Driver Community
          </a>
          <a style={styles.columnLink} href="#">
            Marketplace
          </a>
        </div>

        {/* FOR FLEETS */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>FOR FLEETS</h4>
          <a style={styles.columnLink} href="#">
            Truck Navigation for Fleets
          </a>
          <a style={styles.columnLink} href="#">
            Fleet Management
          </a>
          <a style={styles.columnLink} href="#">
            Fleet Fuel Payments
          </a>
          <a style={styles.columnLink} href="#">
            Marketplace
          </a>
        </div>

        {/* FOR BROKERS */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>FOR BROKERS</h4>
          <a style={styles.columnLink} href="#">
            Post Freight
          </a>
          <a style={styles.columnLink} href="#">
            Find Carriers
          </a>
          <a style={styles.columnLink} href="#">
            Freight Market Data
          </a>
          <a style={styles.columnLink} href="#">
            Trucker Path for Brokerages
          </a>
        </div>

        {/* COMPANY */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>COMPANY</h4>
          <a style={styles.columnLink} href="#">
            Our Story
          </a>
          <a style={styles.columnLink} href="#">
            Contact Us
          </a>
          <a style={styles.columnLink} href="#">
            Blog
          </a>
          <a style={styles.columnLink} href="#">
            Help Center
          </a>
          <a style={styles.columnLink} href="#">
            Careers
          </a>
        </div>

        {/* PARTNERS */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>PARTNERS</h4>
          <a style={styles.columnLink} href="#">
            Fuel Network
          </a>
          <a style={styles.columnLink} href="#">
            Integration Partners
          </a>
          <a style={styles.columnLink} href="#">
            Local Business Partners
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={styles.bottomBar}>
        <div style={styles.bottomLeft}>
          {/* Logo (replace with your own or remove) */}
          <img
            src="https://via.placeholder.com/100x30?text=CLEARPATH"
            alt="ClearPath"
            style={styles.logo}
          />
          <p style={styles.bottomText}>
            &copy; {new Date().getFullYear()} ClearPath. All rights reserved. |
            Phoenix, AZ 85000 | support@clearpath.com
          </p>
        </div>
        {/* Social icons (optional) */}
        <div style={styles.bottomRight}>
          <a href="#" style={styles.socialLink}>
            <Ionicons name="logo-facebook" size={20} color="#fff" />
          </a>
          <a href="#" style={styles.socialLink}>
            <Ionicons name="logo-twitter" size={20} color="#fff" />
          </a>
          <a href="#" style={styles.socialLink}>
            <Ionicons name="logo-linkedin" size={20} color="#fff" />
          </a>
          <a href="#" style={styles.socialLink}>
            <Ionicons name="logo-instagram" size={20} color="#fff" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: "#1b1b1b",
    color: "#fff",
    paddingTop: "40px",
    paddingBottom: "20px",
    fontFamily: "sans-serif",
    fontSize: "14px",
  },
  columnsContainer: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "40px",
    flexWrap: "wrap" as "wrap",
    marginBottom: "40px",
  },
  column: {
    flex: "1 1 180px",
    minWidth: "180px",
  },
  columnTitle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#fff",
    marginBottom: "16px",
  },
  columnLink: {
    display: "block",
    color: "#bbb",
    textDecoration: "none",
    marginBottom: "8px",
    fontSize: "14px",
  },
  bottomBar: {
    borderTop: "1px solid #333",
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap" as "wrap",
    gap: "20px",
  },
  bottomLeft: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  logo: {
    height: "30px",
    objectFit: "contain" as "contain",
  },
  bottomText: {
    color: "#bbb",
    margin: 0,
  },
  bottomRight: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  socialLink: {
    color: "#fff",
    textDecoration: "none",
  },
};
