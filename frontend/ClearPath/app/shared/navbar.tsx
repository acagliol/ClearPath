import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DropdownItem {
  icon: string;
  title: string;
  description: string;
}

// Example data for each dropdown
const driversItems: DropdownItem[] = [
  {
    icon: 'car',
    title: 'Truck Navigation for Drivers',
    description: 'Safe routing for commercial trucks.',
  },
  {
    icon: 'map',
    title: 'Over-the-Road Map',
    description:
      'Discover trucking places-of-interest like truck stops and weigh stations.',
  },
  {
    icon: 'cart',
    title: 'Marketplace',
    description: 'Big savings on the products & services you need as a trucker.',
  },
  {
    icon: 'flash',
    title: 'Discounted Fuel Deals',
    description: 'Save $50 - $70 every time you fuel at participating stops',
  },
  {
    icon: 'search',
    title: 'Find Loads',
    description: 'Free unlimited access to 150,000+ loads daily.',
  },
  {
    icon: 'pricetag',
    title: 'Fuel Prices',
    description: 'See current prices at fueling locations nationwide.',
  },
  {
    icon: 'people',
    title: 'Driver Community',
    description: 'Real-time, crowdsourced road intelligence.',
  },
];

const fleetsItems: DropdownItem[] = [
  {
    icon: 'car',
    title: 'Truck Navigation for Fleets',
    description:
      'Give your drivers the app that makes them efficient, safe, productive.',
  },
  {
    icon: 'stats-chart',
    title: 'Fleet Management',
    description:
      'All-in-one trucking software for dispatching, navigation, and more.',
  },
  {
    icon: 'card',
    title: 'Fleet Fuel Payments',
    description: 'See current prices at fueling locations nationwide.',
  },
  {
    icon: 'cart',
    title: 'Marketplace',
    description: 'Big savings on products & services you need as a trucker.',
  },
];

const brokersItems: DropdownItem[] = [
  {
    icon: 'add-circle',
    title: 'Post Freight',
    description:
      'Post your loads to the largest pool of qualified carriers in North America.',
  },
  {
    icon: 'search',
    title: 'Find Carriers',
    description: 'Directly source and build relationships with our carriers.',
  },
  {
    icon: 'business',
    title: 'Trucker Path for Brokerages',
    description:
      'Dispatch loads, track progress, and more—all from one place.',
  },
  {
    icon: 'analytics',
    title: 'Freight Market Data',
    description:
      'Get lane rates, capacity data, and analytics to grow your brokerage.',
  },
];

const companyItems: DropdownItem[] = [
  {
    icon: 'business',
    title: 'Our Story',
    description: 'Learn about our story and mission statement.',
  },
  {
    icon: 'help-circle',
    title: 'Help Center',
    description: "Knowledge base on Trucker Path's products.",
  },
  {
    icon: 'newspaper',
    title: 'Blog',
    description: 'Trucking news for the trucking industry.',
  },
  {
    icon: 'call',
    title: 'Contact Us',
    description: 'For partnerships, media inquiries, product integration.',
  },
  {
    icon: 'ribbon',
    title: 'Featured in',
    description: 'Read about Trucker Path in the news.',
  },
];

const partnersItems: DropdownItem[] = [
  {
    icon: 'flash',
    title: 'Fuel Network',
    description:
      'Increase fuel sales from nearly 1 million Trucker Path users.',
  },
  {
    icon: 'git-network',
    title: 'Integration Partners',
    description:
      'Unlock greater supply chain efficiency with API integrations.',
  },
  {
    icon: 'storefront',
    title: 'Local Business Partners',
    description:
      'Put your business on Trucker Path and reach millions of drivers.',
  },
  {
    icon: 'call',
    title: 'Contact Us',
    description: 'For business partnerships, media inquiries, product integration.',
  },
];

// Map each label to its items
const NAV_ITEMS: Record<string, DropdownItem[]> = {
  drivers: driversItems,
  fleets: fleetsItems,
  brokers: brokersItems,
  company: companyItems,
  partners: partnersItems,
};

const Navbar: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const { width: screenWidth } = Dimensions.get('window');
  const MAX_DROPDOWN_WIDTH = 900; // Wider dropdown to fit three columns
  const dropdownWidth = Math.min(screenWidth * 0.9, MAX_DROPDOWN_WIDTH);

  const itemsToShow = hovered ? NAV_ITEMS[hovered] : [];

  return (
    // Entire nav + dropdown in one container.
    <View style={styles.navbarContainer} onMouseLeave={() => setHovered(null)}>
      {/* TOP NAV BAR */}
      <View style={styles.navbarRow}>
        <Text style={styles.brandText}>ClearPath</Text>
        <View style={styles.navLinksContainer}>
          <Text
            style={styles.navItemText}
            onMouseEnter={() => setHovered('drivers')}
          >
            FOR DRIVERS
          </Text>
          <Text
            style={styles.navItemText}
            onMouseEnter={() => setHovered('fleets')}
          >
            FOR FLEETS
          </Text>
          <Text
            style={styles.navItemText}
            onMouseEnter={() => setHovered('brokers')}
          >
            FOR BROKERS
          </Text>
          <Text
            style={styles.navItemText}
            onMouseEnter={() => setHovered('company')}
          >
            COMPANY
          </Text>
          <Text
            style={styles.navItemText}
            onMouseEnter={() => setHovered('partners')}
          >
            PARTNERS
          </Text>
        </View>
        <View>
          <Text style={styles.demoButton}>GET A DEMO</Text>
        </View>
      </View>

      {/* DROPDOWN (only if something is hovered) */}
      {hovered && (
        <View
          style={[
            styles.dropdownContainer,
            {
              left: (screenWidth - dropdownWidth) / 2, // center horizontally
              width: dropdownWidth,
            },
          ]}
          // Keep it open if hovering over the dropdown
          onMouseEnter={() => setHovered(hovered)}
        >
          <View style={styles.dropdownInner}>
            {itemsToShow.map((item, index) => (
              <View key={index} style={styles.dropdownItem}>
                <Ionicons
                  name={item.icon}
                  size={22}
                  color="#2271b1"
                  style={styles.dropdownItemIcon}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.dropdownItemTitle}>{item.title}</Text>
                  <Text style={styles.dropdownItemDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'relative',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  navbarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 16,
  },
  brandText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2271b1',
  },
  navLinksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItemText: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  demoButton: {
    backgroundColor: '#0a84d0',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 6,
    color: '#fff',
    fontWeight: '600',
  },

  // Dropdown styles
  dropdownContainer: {
    position: 'absolute',
    top: 60, // Just below the navbar
    zIndex: 9999,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    // Removed maxHeight so it won't be scrollable
  },
  dropdownInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  dropdownItem: {
    width: '30%', // Three columns
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 4,
    padding: 10,
  },
  dropdownItemIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  dropdownItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  dropdownItemDescription: {
    fontSize: 13,
    color: '#4B5563',
  },
});

export default Navbar;
