import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.headerBar}>
            <Text style={styles.supportEmail}>support@clearpath.com</Text>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Customer Login</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>
              Affordable, Easy-To-Use TMS that{'\n'}
              Only ClearPath Can Deliver
            </Text>
            <Text style={styles.heroSubtitle}>
              The Industry's First and Only Operator and Driver Relationship (ODR) Platform
            </Text>
            <View style={styles.heroButtons}>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>See a Demo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Start Free Trial</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Placeholder for map background */}
          <View style={styles.mapPlaceholder}>
            <Text style={styles.placeholderText}>Interactive Map Background</Text>
          </View>
        </View>

        {/* Value Proposition Section */}
        <View style={styles.valueSection}>
          <Text style={styles.sectionTitle}>
            Save Time and Money Managing Your Fleet{'\n'}
            While Enhancing the On-Road Experience for Your Drivers
          </Text>
          
          <View style={styles.cardContainer}>
            {/* Driver Card */}
            <View style={styles.card}>
              <View style={[styles.cardImage, { backgroundColor: '#2B4C7E' }]}>
                <Text style={styles.placeholderText}>Driver Image</Text>
                <Text style={styles.placeholderSubtext}>Smiling truck driver in cab</Text>
              </View>
              <Text style={styles.cardTitle}>For your drivers</Text>
              <Text style={styles.cardText}>
                Improve the driver's journey with real truck navigation, parking
                availability, fuel price discovery and more all on your company's
                customized version of the ClearPath app
              </Text>
            </View>

            {/* Operator Card */}
            <View style={styles.card}>
              <View style={[styles.cardImage, { backgroundColor: '#1A365D' }]}>
                <Text style={styles.placeholderText}>Dashboard Interface</Text>
                <Text style={styles.placeholderSubtext}>Person using laptop with dashboard</Text>
              </View>
              <Text style={styles.cardTitle}>For you operators</Text>
              <Text style={styles.cardText}>
                Increase operational efficiency by simplifying day-to-day
                tasks like sourcing loads, dispatching, track & trace,
                and document scanning & management.
              </Text>
            </View>
          </View>
        </View>

        {/* Features Grid */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Everything you need to manage your fleet</Text>
          
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureBox}>
                <View style={[styles.featureIcon, { backgroundColor: feature.color }]}>
                  <Text style={styles.iconPlaceholder}>{feature.icon}</Text>
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureText}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Load Management Section */}
        <View style={styles.loadSection}>
          <Text style={styles.sectionTitle}>Find and Book Loads</Text>
          <Text style={styles.sectionSubtitle}>
            Connect your load board or customer platforms to search, book, and create jobs ready for
            your drivers to start hauling.
          </Text>
          
          <View style={styles.loadContent}>
            <View style={styles.stepsList}>
              {steps.map((step, index) => (
                <TouchableOpacity key={index} style={styles.stepButton}>
                  <Text style={styles.stepText}>{step}</Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <View style={styles.interfacePlaceholder}>
              <Text style={styles.placeholderText}>Load Management Interface</Text>
              <Text style={styles.placeholderSubtext}>Screenshot of load booking dashboard</Text>
            </View>
          </View>
        </View>

        {/* Navigation Features */}
        <View style={styles.navigationSection}>
          <View style={styles.navigationContent}>
            <Text style={styles.sectionTitle}>
              Help Your Drivers Out with your{'\n'}
              Company's Customized Version of ClearPath
            </Text>
            <Text style={styles.navigationText}>
              As a ClearPath customer, you can customize the look & feel so it matches
              your company branding & provide your drivers with the tools that help
              make jobs go easier for everyone, especially your drivers.
            </Text>
            
            <Text style={styles.navigationSubtitle}>True Truck Navigation</Text>
            <Text style={styles.navigationDescription}>
              Best-in-class truck GPS ensures the quickest and
              safest path, no matter how many stops you have to plan.
            </Text>
            
            <View style={styles.featuresList}>
              {navigationFeatures.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <View style={styles.featureIconSmall}>
                    <Text style={styles.smallIconText}>🚚</Text>
                  </View>
                  <Text style={styles.featureItemText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <View style={styles.phonePlaceholder}>
            <Text style={styles.placeholderText}>Navigation App Interface</Text>
            <Text style={styles.placeholderSubtext}>Mobile app showing truck route</Text>
          </View>
        </View>

        {/* Testimonials Section */}
        <View style={styles.testimonialsSection}>
          {testimonials.map((testimonial, index) => (
            <View key={index} style={styles.testimonialCard}>
              <Text style={styles.companyName}>{testimonial.company}</Text>
              <Text style={styles.authorName}>{testimonial.author}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{testimonial.rating}</Text>
                <Text style={styles.starIcon}>★</Text>
              </View>
              <Text style={styles.testimonialText}>{testimonial.text}</Text>
            </View>
          ))}
          
          <TouchableOpacity style={styles.demoButton}>
            <Text style={styles.demoButtonText}>See a Demo</Text>
          </TouchableOpacity>
        </View>

        {/* Getting Started Steps */}
        <View style={styles.stepsSection}>
          <Text style={styles.sectionTitle}>3 Easy Steps To Get Started</Text>
          <View style={styles.stepsContainer}>
            {getStartedSteps.map((step, index) => (
              <React.Fragment key={index}>
                <View style={styles.stepItem}>
                  <View style={styles.stepIcon}>
                    <Text style={styles.iconPlaceholder}>{step.icon}</Text>
                  </View>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.stepDescription}>{step.description}</Text>
                </View>
                {index < getStartedSteps.length - 1 && (
                  <View style={styles.arrowIcon}>
                    <Text style={styles.arrowText}>→</Text>
                  </View>
                )}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Pricing Section */}
        <View style={styles.pricingSection}>
          <Text style={styles.sectionTitle}>All The Tools You Need at an Affordable Price</Text>
          
          <View style={styles.pricingCard}>
            <Text style={styles.price}>$99</Text>
            <Text style={styles.period}>per month</Text>
            <View style={styles.featuresListPricing}>
              <Text style={styles.pricingFeature}>• 1 Operator Seat</Text>
              <Text style={styles.pricingFeature}>• 2 Driver Seats</Text>
              <Text style={styles.pricingSubtext}>
                (Includes Diamond Level Subscription to ClearPath)
              </Text>
            </View>
          </View>

          <View style={styles.additionalPricing}>
            <View style={styles.additionalCard}>
              <Text style={styles.additionalTitle}>Additional Operator Seats</Text>
              <Text style={styles.additionalPrice}>$50</Text>
              <Text style={styles.additionalPeriod}>Per Additional Seat Per Month</Text>
            </View>
            
            <View style={styles.additionalCard}>
              <Text style={styles.additionalTitle}>Additional Driver Seats</Text>
              <Text style={styles.additionalPrice}>$30</Text>
              <Text style={styles.additionalPeriod}>Per Additional Seat Per Month</Text>
            </View>
          </View>

          <View style={styles.discountBox}>
            <Text style={styles.discountText}>• Discounts available for 10 drivers</Text>
            <Text style={styles.discountText}>• 17% off for Annual Subscription Pay in Advance</Text>
          </View>

          <Text style={styles.riskFree}>Risk free! Cancel at any time.</Text>
        </View>

        {/* Sign Up Form */}
        <View style={styles.signupSection}>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Start Your 7-Day Free Trial</Text>
            <Text style={styles.formSubtitle}>
              Create an account and login to your own fleet management system in 30 seconds.
              Equip your trucking fleet the best-in-class tools to deliver freight more efficiently.
            </Text>
            
            <View style={styles.form}>
              <Text style={styles.formSteps}>Take 2 quick steps to sign up</Text>
              <View style={styles.stepIndicator}>
                <View style={styles.stepActive}>
                  <Text style={styles.stepActiveText}>✓</Text>
                </View>
                <Text style={styles.stepLabel}>Create Account</Text>
                <View style={styles.stepDivider} />
                <View style={styles.stepInactive}>
                  <Text style={styles.stepNumber}>2</Text>
                </View>
                <Text style={styles.stepLabel}>Activate Account</Text>
              </View>
              
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#999"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
              />
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>START USING NOW</Text>
              </TouchableOpacity>
              <Text style={styles.termsText}>
                By clicking Next, you agree to our Privacy Policy and Terms and Conditions.
              </Text>
            </View>
          </View>
          
          {/* Placeholder for background truck image */}
          <View style={styles.truckBackground}>
            <Text style={styles.placeholderText}>Background Truck Image</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLogo}>
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>ClearPath</Text>
            </View>
            <Text style={styles.address}>
              45 West Buchanan St.{'\n'}
              Phoenix, AZ 85003
            </Text>
            <View style={styles.socialIcons}>
              <View style={styles.socialIcon}><Text>f</Text></View>
              <View style={styles.socialIcon}><Text>in</Text></View>
              <View style={styles.socialIcon}><Text>ig</Text></View>
            </View>
          </View>
          
          <View style={styles.footerLinks}>
            <View style={styles.linkColumn}>
              <Text style={styles.columnTitle}>FOR CARRIERS</Text>
              <Text style={styles.footerLink}>Truck Navigation</Text>
              <Text style={styles.footerLink}>Over-the-Road Map</Text>
              <Text style={styles.footerLink}>Driver Community</Text>
              <Text style={styles.footerLink}>Discounted Fuel Deals</Text>
              <Text style={styles.footerLink}>Fuel Prices</Text>
              <Text style={styles.footerLink}>Find Loads</Text>
              <Text style={styles.footerLink}>ELD Compliance</Text>
              <Text style={styles.footerLink}>Fleet Management</Text>
              <Text style={styles.footerLink}>Essentials Package</Text>
              <Text style={styles.footerLink}>API Status</Text>
            </View>
            
            <View style={styles.linkColumn}>
              <Text style={styles.columnTitle}>FOR BROKERS</Text>
              <Text style={styles.footerLink}>Post Freight</Text>
              <Text style={styles.footerLink}>Find Carriers</Text>
              <Text style={styles.footerLink}>Freight Market Data</Text>
            </View>
            
            <View style={styles.linkColumn}>
              <Text style={styles.columnTitle}>COMPANY</Text>
              <Text style={styles.footerLink}>Our Story</Text>
              <Text style={styles.footerLink}>Contact Us</Text>
              <Text style={styles.footerLink}>Press Release</Text>
              <Text style={styles.footerLink}>Blog</Text>
              <Text style={styles.footerLink}>Help Center</Text>
              <Text style={styles.footerLink}>Careers</Text>
            </View>
            
            <View style={styles.linkColumn}>
              <Text style={styles.columnTitle}>PARTNERS</Text>
              <Text style={styles.footerLink}>Fuel Network</Text>
              <Text style={styles.footerLink}>Integration Partners</Text>
              <Text style={styles.footerLink}>Advertising Partners</Text>
              <Text style={styles.footerLink}>Local Business Partners</Text>
              <Text style={styles.footerLink}>Report</Text>
            </View>
          </View>
          
          <View style={styles.footerBottom}>
            <Text style={styles.copyright}>© 2024 ClearPath Inc.</Text>
            <Text style={styles.footerLink}>Terms</Text>
            <Text style={styles.footerLink}>Privacy Policy</Text>
            <Text style={styles.footerLink}>Cookie Policy</Text>
            <Text style={styles.footerLink}>Cookie Preferences</Text>
          </View>
        </View>
      </ScrollView>
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
  // Hero Section
  heroSection: {
    height: 600,
    backgroundColor: '#1a365d',
    padding: 20,
    position: 'relative',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    zIndex: 2,
  },
  supportEmail: {
    color: '#ffffff',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#1a365d',
    fontWeight: 'bold',
    fontSize: 14,
  },
  heroContent: {
    zIndex: 2,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 40,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  heroButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  primaryButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
  },
  primaryButtonText: {
    color: '#1a365d',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#3182ce',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mapPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(26, 54, 93, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  placeholderText: {
    color: '#ffffff',
    fontSize: 16,
    bottom: -180,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeholderSubtext: {
    color: '#ffffff',
    fontSize: 12,
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 5,
  },
  
  // Value Proposition Section
  valueSection: {
    padding: 40,
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a365d',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 36,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: width > 768 ? width * 0.45 : width * 0.9,
    backgroundColor: '#3182ce',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    alignSelf: 'center',
  },
  cardImage: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    padding: 15,
  },
  cardText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    lineHeight: 22,
  },
  
  // Features Grid
  featuresSection: {
    padding: 40,
    backgroundColor: '#f7fafc',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureBox: {
    width: width > 768 ? width * 0.3 : width * 0.9,
    marginBottom: 30,
    alignSelf: 'center',
  },
  featureIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconPlaceholder: {
    fontSize: 24,
    color: '#ffffff',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#4a5568',
    lineHeight: 20,
  },
  
  // Load Management Section
  loadSection: {
    padding: 40,
    backgroundColor: '#ffffff',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#4a5568',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  loadContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  stepsList: {
    width: width > 768 ? width * 0.35 : width * 0.9,
    marginBottom: 30,
    alignSelf: 'center',
  },
  stepButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
  },
  stepText: {
    fontSize: 16,
    color: '#1a365d',
    fontWeight: '500',
  },
  interfacePlaceholder: {
    width: width > 768 ? width * 0.5 : width * 0.9,
    height: 300,
    backgroundColor: '#3182ce',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  
  // Navigation Features
  navigationSection: {
    padding: 40,
    backgroundColor: '#f7fafc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  navigationContent: {
    width: width > 768 ? width * 0.45 : width * 0.9,
    marginBottom: 30,
    alignSelf: 'center',
  },
  navigationText: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 30,
    lineHeight: 24,
  },
  navigationSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 10,
  },
  navigationDescription: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 20,
    lineHeight: 24,
  },
  featuresList: {
    marginTop: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureIconSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#3182ce',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  smallIconText: {
    fontSize: 14,
    color: '#ffffff',
  },
  featureItemText: {
    fontSize: 16,
    color: '#4a5568',
  },
  phonePlaceholder: {
    width: width > 768 ? width * 0.4 : width * 0.9,
    height: 400,
    backgroundColor: '#3182ce',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  
  // Testimonials Section
  testimonialsSection: {
    padding: 40,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  testimonialCard: {
    width: width > 768 ? width * 0.3 : width * 0.9,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
    alignSelf: 'center',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 5,
  },
  authorName: {
    fontSize: 14,
    color: '#4a5568',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ed8936',
    marginRight: 5,
  },
  starIcon: {
    fontSize: 16,
    color: '#ed8936',
  },
  testimonialText: {
    fontSize: 14,
    color: '#4a5568',
    lineHeight: 20,
  },
  demoButton: {
    backgroundColor: '#3182ce',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    width: width > 768 ? 'auto' : width * 0.9,
  },
  demoButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  
  // Getting Started Steps
  stepsSection: {
    padding: 40,
    backgroundColor: '#f7fafc',
  },
  stepsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepItem: {
    width: width > 768 ? width * 0.25 : width * 0.8,
    alignItems: 'center',
    marginBottom: 20,
  },
  stepIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3182ce',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 5,
    textAlign: 'center',
  },
  stepDescription: {
    fontSize: 14,
    color: '#4a5568',
    textAlign: 'center',
  },
  arrowIcon: {
    marginHorizontal: 10,
  },
  arrowText: {
    fontSize: 24,
    color: '#a0aec0',
  },
  
  // Pricing Section
  pricingSection: {
    padding: 40,
    backgroundColor: '#ffffff',
  },
  pricingCard: {
    width: width > 768 ? width * 0.3 : width * 0.9,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 30,
    marginBottom: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3182ce',
    marginBottom: 5,
  },
  period: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 20,
  },
  featuresListPricing: {
    width: '100%',
  },
  pricingFeature: {
    fontSize: 16,
    color: '#1a365d',
    marginBottom: 10,
  },
  pricingSubtext: {
    fontSize: 14,
    color: '#718096',
    marginTop: 10,
    textAlign: 'center',
  },
  additionalPricing: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  additionalCard: {
    width: width > 768 ? width * 0.4 : width * 0.9,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  additionalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 10,
    textAlign: 'center',
  },
  additionalPrice: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3182ce',
    marginBottom: 5,
  },
  additionalPeriod: {
    fontSize: 14,
    color: '#4a5568',
    textAlign: 'center',
  },
  discountBox: {
    backgroundColor: '#3182ce',
    borderRadius: 8,
    padding: 20,
    width: width > 768 ? width * 0.7 : width * 0.9,
    alignSelf: 'center',
    marginBottom: 20,
  },
  discountText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  riskFree: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a365d',
    textAlign: 'center',
  },
  
  // Sign Up Form
  signupSection: {
    backgroundColor: '#3182ce',
    padding: 40,
    position: 'relative',
  },
  formContainer: {
    width: width > 768 ? width * 0.5 : width * 0.9,
    zIndex: 2,
  },
  formTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  formSubtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 30,
    lineHeight: 24,
  },
  form: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
  },
  formSteps: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 15,
  },
  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepActive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#3182ce',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  stepActiveText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  stepInactive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  stepNumber: {
    color: '#718096',
    fontSize: 12,
  },
  stepLabel: {
    fontSize: 14,
    color: '#4a5568',
    marginRight: 10,
  },
  stepDivider: {
    height: 1,
    width: 20,
    backgroundColor: '#e2e8f0',
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#1a365d',
  },
  submitButton: {
    backgroundColor: '#3182ce',
    borderRadius: 4,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsText: {
    fontSize: 12,
    color: '#718096',
    textAlign: 'center',
  },
  truckBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(49, 130, 206, 0.7)',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Footer
  footer: {
    backgroundColor: '#1a365d',
    padding: 40,
  },
  footerLogo: {
    marginBottom: 30,
  },
  logoBox: {
    width: 150,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
  },
  address: {
    fontSize: 14,
    color: '#a0aec0',
    marginBottom: 15,
    lineHeight: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2d3748',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  linkColumn: {
    width: width > 768 ? width * 0.2 : width * 0.45,
    marginBottom: 20,
  },
  columnTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  footerLink: {
    fontSize: 14,
    color: '#a0aec0',
    marginBottom: 10,
  },
  footerBottom: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderTopColor: '#2d3748',
    paddingTop: 20,
    gap: 15,
  },
  copyright: {
    fontSize: 14,
    color: '#a0aec0',
    marginRight: 20,
  },
});

// Data arrays for features, steps, testimonials etc.
const features = [
  {
    title: 'Most Popular Driver App',
    description: 'Leverage ClearPath\'s app that nearly 1 million truck drivers rely upon for essential information and services.',
    color: '#3182ce',
    icon: '📱',
  },
  {
    title: 'Enterprise Truck Navigation',
    description: 'Equip your drivers with our industry-leading truck navigation for efficient and safe routes.',
    color: '#2c5282',
    icon: '🗺️',
  },
  {
    title: 'All-in-one Trucking Software',
    description: 'Navigation, dispatch, workflows, accounting and more between your driver app and web platform.',
    color: '#2b6cb0',
    icon: '💻',
  },
  {
    title: 'Load Management',
    description: 'Comprehensive workflows for load dispatching, tracking, document scanning, settlements, and accounting.',
    color: '#3182ce',
    icon: '📦',
  },
  {
    title: 'Driver Management',
    description: 'A centralized platform to communicate and manage driver activity, compliance, and productivity.',
    color: '#2c5282',
    icon: '👤',
  },
  {
    title: 'Open Integrations',
    description: 'Connect with your existing systems, ELD and tracking platforms for a reliable, single source of truth.',
    color: '#2b6cb0',
    icon: '🔄',
  },
];

const steps = [
  'Create Load',
  'Dispatch to Driver',
  'Track Progress',
  'Document Management',
  'Complete Job',
];

const navigationFeatures = [
  'Trip Planner',
  'Low Clearance',
  'All points of interest',
];

const testimonials = [
  {
    company: 'Green Line Transport LLC',
    author: 'Gary Toz, Manager',
    rating: '5.0',
    text: 'My drivers already use ClearPath, so there was no friction in getting them setup, and I\'m able to dispatch loads to my drivers knowing they get truck safe routes. No regrets and I definitely recommend this system.',
  },
  {
    company: 'Swathmore and Brothers LLC',
    author: 'Kevin Swathmore, Founder',
    rating: '5.0',
    text: 'Saved my drivers having to switch around 7 different apps just to drive a load. Most companies say they do it all, but this is the real deal here.',
  },
  {
    company: 'KEB Transport LLC',
    author: 'Ryan Gosich, Founder',
    rating: '5.0',
    text: 'Really smooth interface and allows me to see all my drivers at a glance, and send them trips with fuel stops in our network. This was able to save our team real money and time.',
  },
];

const getStartedSteps = [
  {
    title: 'Sign Up',
    description: 'Create your account',
    icon: '📝',
  },
  {
    title: 'One-On-One Training',
    description: '(1-2 hours)',
    icon: '👨‍🏫',
  },
  {
    title: 'Start Managing Your Operation!',
    description: 'Begin using the platform',
    icon: '🚀',
  },
];

export default Home;