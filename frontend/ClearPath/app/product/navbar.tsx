import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lvDiL3k5kzfPMaNxVHd7LnJDS5vuFC.png' }} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.navContainer}>
        <Text style={styles.navItem}>Map</Text>
        <Text style={styles.navItem}>Dispatch</Text>
        <Text style={styles.navItem}>Loadboard</Text>
        <Text style={styles.navItem}>Fuel</Text>
        <Text style={styles.navItem}>Accounting</Text>
      </View>

      <View style={styles.authContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  logo: {
    width: '100%',
    height: '100%',
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
});

export default Navbar;
