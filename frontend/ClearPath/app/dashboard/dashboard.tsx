import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>TRUCKER PATH</Text>
        <View style={styles.navLinks}>
          <Text style={styles.navItem}>For Drivers</Text>
          <Text style={styles.navItem}>For Fleets</Text>
          <Text style={styles.navItem}>For Brokers</Text>
          <Text style={styles.navItem}>Company</Text>
          <Text style={styles.navItem}>Partners</Text>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={{ uri: 'https://example.com/path-to-image.jpg' }}
          style={styles.backgroundImage}
        />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Improving Life On-The-Road</Text>
          <Text style={styles.heroSubtitle}>
            North America's leader in truck driver safety, efficiency, and over-the-road comfort and convenience.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.demoButton}>
              <Text style={styles.buttonText}>Get a Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.freeButton}>
              <Text style={styles.buttonText}>Try for Free</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>#1 Trucker Map App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#111827',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navItem: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 14,
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  demoButton: {
    backgroundColor: '#2563eb',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  freeButton: {
    backgroundColor: '#1f2937',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2563eb',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#111827',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 12,
  },
});
