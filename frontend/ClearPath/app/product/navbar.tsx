import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Navbar = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: '' }} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItemContainer}>
          <Ionicons name="map-outline" size={16} color="#3366ff" style={styles.navIcon} />
          <Text style={[styles.navItem, styles.activeNavText]}>Map</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItemContainer}>
          <MaterialIcons name="dashboard-customize" size={16} color="#555555" style={styles.navIcon} />
          <Text style={styles.navItem}>Dispatch</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItemContainer}>
          <FontAwesome5 name="truck-loading" size={16} color="#555555" style={styles.navIcon} />
          <Text style={styles.navItem}>Loadboard</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItemContainer}>
          <FontAwesome5 name="gas-pump" size={16} color="#555555" style={styles.navIcon} />
          <Text style={styles.navItem}>Fuel</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItemContainer}>
          <MaterialIcons name="account-balance" size={16} color="#555555" style={styles.navIcon} />
          <Text style={styles.navItem}>Accounting</Text>
        </TouchableOpacity>
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
  navItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  navIcon: {
    marginRight: 4,
  },
  navItem: {
    fontSize: 14,
    color: '#555555',
  },
  activeNavText: {
    color: '#3366ff',
    fontWeight: '500',
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