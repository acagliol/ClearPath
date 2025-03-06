"use client";

import React, { useState } from "react";

interface DropdownProps {
  title: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block", padding: "0 10px", cursor: "pointer" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div>{title}</div>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
            minWidth: "150px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{ padding: "10px", borderBottom: index < items.length - 1 ? "1px solid #eee" : "none" }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <header style={navbarStyles.header}>
      <div style={navbarStyles.logo}>ClearPath Navigation</div>
      <nav style={navbarStyles.nav}>
        <Dropdown
          title="FOR DRIVERS"
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
          title="FOR FLEETS"
          items={["Truck Navigation for Fleets", "Marketplace", "Fleet Management", "Fleet Fuel Payments"]}
        />
        <Dropdown
          title="FOR BROKERS"
          items={["Post Freight", "Find Carriers", "Trucker Path for Brokerages", "Freight Market Data"]}
        />
        <Dropdown title="COMPANY" items={["Our Story", "Help Center", "Blog", "Contact Us"]} />
        <Dropdown
          title="PARTNERS"
          items={["Fuel Network", "Integration Partners", "Local Business Partners", "Advertise With Us"]}
        />
        <button style={navbarStyles.ctaButton}>GET A DEMO</button>
      </nav>
    </header>
  );
};

export default Navbar;

const navbarStyles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    borderBottom: "1px solid #ddd",
    position: "sticky" as const,
    top: 0,
    backgroundColor: "#fff",
    zIndex: 1000,
  },
  logo: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#2271b1",
  },
  nav: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
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
};
