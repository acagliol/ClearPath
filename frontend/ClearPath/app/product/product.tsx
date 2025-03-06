import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import Login from './login';
import SignUp from './signup';

const { width } = Dimensions.get('window');

const Product = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Implement your login logic here
    console.log('Login attempt:', email, password);
    setIsLoginVisible(false);
  };

  const handleSignUp = (email: string, password: string) => {
    // Implement your signup logic here
    console.log('Sign up attempt:', email, password);
    setIsSignUpVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f7ff" />
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            {/* This should be the ClearPath logo */}
            <View style={styles.logoPlaceholder}>
              <Text style={styles.logoText}>ClearPath</Text>
            </View>
          </View>
          <View style={styles.navContainer}>
            <Text style={styles.navItem}>Map</Text>
            <Text style={styles.navItem}>Dispatch</Text>
            <Text style={styles.navItem}>Loadboard</Text>
            <Text style={styles.navItem}>Fuel</Text>
            <Text style={styles.navItem}>Accounting</Text>
          </View>
          <View style={styles.authContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={() => setIsLoginVisible(true)}>
              <Text style={styles.loginText}>Customer Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={() => setIsSignUpVisible(true)}>
              <Text style={styles.signupText}>Start Free Trial</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <View style={styles.unlockContainer}>
              {/* This should be a small icon for performance monitoring */}
              <View style={styles.unlockIcon} />
              <Text style={styles.unlockText}>Unlock Performance Monitoring with ClearPath</Text>
            </View>

            <Text style={styles.heroTitle}>
              Your Fleet Performance{'\n'}
              At A Glance With{'\n'}
              ClearPath DASHBOARD
            </Text>

            <Text style={styles.heroDescription}>
              Make well-informed decisions by tracking and monitoring
              your company's operational performance on items such as
              revenue, expenses and real-time driver status with just a
              click.
            </Text>

            <TouchableOpacity style={styles.tryButton}>
              <Text style={styles.tryButtonText}>TRY ClearPath FOR FREE</Text>
            </TouchableOpacity>
          </View>

          {/* This should be an image of a laptop showing the dashboard interface */}
          <View style={styles.heroImagePlaceholder}>
            <Text style={styles.placeholderText}>Dashboard Preview</Text>
            <Text style={styles.placeholderSubtext}>Laptop showing metrics, charts and data tables</Text>
          </View>
        </View>

        {/* Dashboard Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Dashboard Features</Text>

          <View style={styles.featureRow}>
            {/* This should be a screenshot of revenue/expense tracking dashboard */}
            <View style={styles.featureImagePlaceholder}>
              <Text style={styles.placeholderText}>Revenue Dashboard</Text>
              <Text style={styles.placeholderSubtext}>Tables and charts showing financial data</Text>
            </View>

            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>
                Conveniently Monitor your Revenue and Expenses
              </Text>

              <View style={styles.bulletPoint}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>
                  Easily track and analyze your revenue and expenses
                  on a daily, weekly, monthly or yearly basis.
                </Text>
              </View>

              <View style={styles.bulletPoint}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>
                  Keep an eye on company expenses with the help of
                  detailed reports so you'll never go beyond the budget.
                </Text>
              </View>

              <TouchableOpacity style={styles.tryButton}>
                <Text style={styles.tryButtonText}>TRY ClearPath FOR FREE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Load Performance Section */}
        <View style={styles.loadSection}>
          <View style={styles.loadContent}>
            <Text style={styles.loadTitle}>
              Keep Track of Load Performance
            </Text>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                Track which loads are already assigned to the drivers,
                in transit or waiting to be invoiced.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                Detailed bar graphs to show accurate percentage of
                on-time pick-ups and deliveries.
              </Text>
            </View>

            <TouchableOpacity style={styles.tryButton}>
              <Text style={styles.tryButtonText}>TRY ClearPath FOR FREE</Text>
            </TouchableOpacity>
          </View>

          {/* This should be a screenshot of load tracking dashboard with charts */}
          <View style={styles.loadImagePlaceholder}>
            <Text style={styles.placeholderText}>Load Tracking</Text>
            <Text style={styles.placeholderSubtext}>Pie charts and metrics showing load status</Text>
          </View>
        </View>
      </ScrollView>
      <Login
        isVisible={isLoginVisible}
        onClose={() => setIsLoginVisible(false)}
        onLogin={handleLogin}
        onSignUpClick={() => {
          setIsLoginVisible(false);
          setIsSignUpVisible(true);
        }}
      />
      <SignUp
        isVisible={isSignUpVisible}
        onClose={() => setIsSignUpVisible(false)}
        onSignUp={handleSignUp}
        onLoginClick={() => {
          setIsSignUpVisible(false);
          setIsLoginVisible(true);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logoContainer: {
    width: 120,
    height: 40,
  },
  logoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  logoText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  navItem: {
    marginHorizontal: 8,
    fontSize: 14,
    color: '#555555',
  },
  authContainer: {
    flexDirection: 'row',
  },
  loginButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 4,
    marginRight: 8,
  },
  loginText: {
    fontSize: 12,
    color: '#555555',
  },
  signupButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#3366ff',
    borderRadius: 4,
  },
  signupText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  heroSection: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'space-between',
    backgroundColor: '#f5f7ff',
  },
  heroContent: {
    flex: 1,
    paddingRight: 20,
  },
  unlockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  unlockIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    backgroundColor: '#3366ff',
    borderRadius: 12,
  },
  unlockText: {
    fontSize: 14,
    color: '#3366ff',
    fontWeight: '500',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 16,
    lineHeight: 36,
  },
  heroDescription: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 24,
    marginBottom: 24,
  },
  tryButton: {
    backgroundColor: '#3366ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  tryButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  heroImagePlaceholder: {
    width: width * 0.45,
    height: 300,
    backgroundColor: '#d1e0ff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3366ff',
    textAlign: 'center',
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
  },
  featuresSection: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
    marginBottom: 40,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featureImagePlaceholder: {
    width: width * 0.45,
    height: 300,
    backgroundColor: '#e6f0ff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  featureContent: {
    flex: 1,
    paddingLeft: 24,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 16,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  bulletDot: {
    fontSize: 16,
    color: '#3366ff',
    marginRight: 8,
    lineHeight: 24,
  },
  bulletText: {
    fontSize: 14,
    color: '#555555',
    flex: 1,
    lineHeight: 24,
  },
  loadSection: {
    flexDirection: 'row',
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  loadContent: {
    flex: 1,
    paddingRight: 24,
  },
  loadTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 16,
  },
  loadImagePlaceholder: {
    width: width * 0.45,
    height: 300,
    backgroundColor: '#e0eaff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Product;