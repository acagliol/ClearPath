import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import Navbar from './navbar';

const { width, height } = Dimensions.get('window');

const Map = () => {
  const [activeTab, setActiveTab] = useState('Recent Trips');
  const [mapLayerVisible, setMapLayerVisible] = useState(false);
  const [mapType, setMapType] = useState('roadmap'); // roadmap, hybrid, satellite
  const [mapDisplay, setMapDisplay] = useState('load');
  const [weatherAlertEnabled, setWeatherAlertEnabled] = useState(false);
  const [defaultVehicleOpen, setDefaultVehicleOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  
  // Animation values
  const sidebarWidth = useRef(new Animated.Value(60)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  const tabs = ['Recent Trips', 'Saved Routes', 'Shared Trips'];

  // Initialize Google Maps
  useEffect(() => {
    // Skip if already loaded or not in browser environment
    if (mapLoaded || typeof window === 'undefined' || !mapRef.current) return;

    // Function to initialize the map
    const initMap = () => {
      if (!mapRef.current || googleMapRef.current) return;
      
      try {
        googleMapRef.current = new window.google.maps.Map(mapRef.current, {
          center: { lat: 39.8283, lng: -98.5795 },
          zoom: 4,
          mapTypeId: mapType,
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          zoomControl: false,
        });
        setMapLoaded(true);
      } catch (error) {
        console.error("Error initializing Google Maps:", error);
      }
    };

    // Load Google Maps script if not already loaded
    if (!window.google || !window.google.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      // Cleanup if needed
    };
  }, [mapRef.current]);

  // Update map type when it changes
  useEffect(() => {
    if (googleMapRef.current && mapLoaded) {
      googleMapRef.current.setMapTypeId(mapType);
    }
  }, [mapType, mapLoaded]);

  // Handle sidebar expansion animation
  useEffect(() => {
    if (sidebarExpanded) {
      Animated.parallel([
        Animated.timing(sidebarWidth, {
          toValue: 240,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(sidebarWidth, {
          toValue: sidebarHovered ? 180 : 60,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(textOpacity, {
          toValue: sidebarHovered ? 0.9 : 0,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [sidebarExpanded, sidebarHovered]);

  // Handle hover effect for web
  const handleMouseEnter = () => {
    if (!sidebarExpanded) {
      setSidebarHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!sidebarExpanded) {
      setSidebarHovered(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
    if (sidebarExpanded) {
      setSidebarHovered(false);
    }
  };

  const handleZoomIn = () => {
    if (googleMapRef.current && mapLoaded) {
      const currentZoom = googleMapRef.current.getZoom();
      googleMapRef.current.setZoom(currentZoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (googleMapRef.current && mapLoaded) {
      const currentZoom = googleMapRef.current.getZoom();
      googleMapRef.current.setZoom(currentZoom - 1);
    }
  };

  const handleMyLocation = () => {
    if (navigator.geolocation && googleMapRef.current && mapLoaded) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          googleMapRef.current.setCenter(pos);
          googleMapRef.current.setZoom(12);
        },
        () => {
          console.error("Error getting current location");
        }
      );
    }
  };

  const renderNavbar = () => {
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
          {['Map', 'Dispatch', 'Loadboard', 'Fuel', 'Accounting'].map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.navItemContainer, item === 'Map' && styles.activeNavItem]}
            >
              {item === 'Map' && <Ionicons name="map-outline" size={16} color="#3366ff" style={styles.navIcon} />}
              {item === 'Dispatch' && <MaterialIcons name="dashboard-customize" size={16} color="#555555" style={styles.navIcon} />}
              {item === 'Loadboard' && <FontAwesome5 name="truck-loading" size={16} color="#555555" style={styles.navIcon} />}
              {item === 'Fuel' && <FontAwesome5 name="gas-pump" size={16} color="#555555" style={styles.navIcon} />}
              {item === 'Accounting' && <MaterialIcons name="account-balance" size={16} color="#555555" style={styles.navIcon} />}
              <Text style={[styles.navItem, item === 'Map' && styles.activeNavText]}>{item}</Text>
            </TouchableOpacity>
          ))}
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

  const renderCollapsibleSidebar = () => {
    return (
      <Animated.View 
        style={[
          styles.collapsibleSidebar, 
          { width: sidebarWidth }
        ]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ScrollView style={styles.sidebarScroll}>
          <View style={styles.sidebarMenuItems}>
            <TouchableOpacity style={styles.sidebarMenuItem}>
              <Ionicons name="calendar-outline" size={24} color="#3366ff" />
              <Animated.Text style={[styles.sidebarMenuText, { opacity: textOpacity }]}>
                Fleet Schedule
              </Animated.Text>
              <Animated.View style={[styles.lockIcon, { opacity: textOpacity }]}>
                <Ionicons name="lock-closed-outline" size={16} color="#999" />
              </Animated.View>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.sidebarMenuItem, styles.activeMenuItem]}>
              <Ionicons name="cube-outline" size={24} color="#3366ff" />
              <Animated.Text style={[styles.sidebarMenuText, styles.activeMenuText, { opacity: textOpacity }]}>
                Loads
              </Animated.Text>
              <Animated.View style={[styles.lockIcon, { opacity: textOpacity }]}>
                <Ionicons name="lock-closed-outline" size={16} color="#999" />
              </Animated.View>
            </TouchableOpacity>
          </View>
          
          <View style={styles.sidebarFooter}>
            <TouchableOpacity style={styles.sidebarMenuItem}>
              <Ionicons name="phone-portrait-outline" size={24} color="#3366ff" />
              <Animated.Text style={[styles.sidebarMenuText, { opacity: textOpacity }]}>
                Download Driver App
              </Animated.Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.sidebarMenuItem}>
              <Ionicons name="school-outline" size={24} color="#3366ff" />
              <Animated.Text style={[styles.sidebarMenuText, { opacity: textOpacity }]}>
                Book Training
              </Animated.Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.sidebarMenuItem}>
              <Ionicons name="help-circle-outline" size={24} color="#3366ff" />
              <Animated.Text style={[styles.sidebarMenuText, { opacity: textOpacity }]}>
                Help Center
              </Animated.Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.sidebarMenuItem}>
              <Ionicons name="headset-outline" size={24} color="#3366ff" />
              <Animated.Text style={[styles.sidebarMenuText, { opacity: textOpacity }]}>
                Support
              </Animated.Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.expandButton}
              onPress={toggleSidebar}
            >
              <Ionicons 
                name={sidebarExpanded ? "chevron-back-outline" : "chevron-forward-outline"} 
                size={24} 
                color="#3366ff" 
              />
              <Animated.Text style={[styles.sidebarMenuText, { opacity: textOpacity }]}>
                {sidebarExpanded ? "Collapse Menu" : "Expand Menu"}
              </Animated.Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animated.View>
    );
  };

  const renderMapControls = () => {
    return (
      <View style={styles.mapControls}>
        <TouchableOpacity 
          style={styles.mapLayerButton}
          onPress={() => setMapLayerVisible(true)}
        >
          <Ionicons name="layers-outline" size={24} color="#333" />
          <Text style={styles.mapLayerText}>Map Layer</Text>
        </TouchableOpacity>
        
        <View style={styles.zoomControls}>
          <TouchableOpacity style={styles.zoomButton} onPress={handleZoomIn}>
            <Ionicons name="add" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.zoomButton} onPress={handleZoomOut}>
            <Ionicons name="remove" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.locationButton} onPress={handleMyLocation}>
          <Ionicons name="locate" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMapLayerModal = () => {
    return (
      <Modal
        visible={mapLayerVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMapLayerVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setMapLayerVisible(false)}
        >
          <View 
            style={styles.mapLayerModal}
            onStartShouldSetResponder={() => true}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Map Layer</Text>
              <TouchableOpacity onPress={() => setMapLayerVisible(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.sectionHeader}>Map Display</Text>
              <View style={styles.displayOptions}>
                <TouchableOpacity 
                  style={[styles.displayOption, mapDisplay === 'load' && styles.selectedDisplayOption]}
                  onPress={() => setMapDisplay('load')}
                >
                  <FontAwesome5 name="truck-loading" size={20} color="#666" />
                  <Text style={styles.displayOptionText}>Load</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.displayOption, mapDisplay === 'driver' && styles.selectedDisplayOption]}
                  onPress={() => setMapDisplay('driver')}
                >
                  <Ionicons name="person" size={20} color="#666" />
                  <Text style={styles.displayOptionText}>Driver</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.sectionHeader}>Map Type</Text>
              <View style={styles.mapTypeOptions}>
                <TouchableOpacity 
                  style={[styles.mapTypeOption, mapType === 'hybrid' && styles.selectedMapType]}
                  onPress={() => setMapType('hybrid')}
                >
                  <View style={styles.mapTypeIconContainer}>
                    <Ionicons name="map" size={24} color="#3366ff" />
                  </View>
                  <Text style={styles.mapTypeText}>Hybrid</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.mapTypeOption, mapType === 'roadmap' && styles.selectedMapType]}
                  onPress={() => setMapType('roadmap')}
                >
                  <View style={styles.mapTypeIconContainer}>
                    <Ionicons name="grid" size={24} color="#3366ff" />
                  </View>
                  <Text style={styles.mapTypeText}>Road Map</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.mapTypeOption, mapType === 'satellite' && styles.selectedMapType]}
                  onPress={() => setMapType('satellite')}
                >
                  <View style={styles.mapTypeIconContainer}>
                    <Ionicons name="earth" size={24} color="#3366ff" />
                  </View>
                  <Text style={styles.mapTypeText}>Satellite</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.sectionHeader}>Weather Type</Text>
              <TouchableOpacity 
                style={styles.weatherOption}
                onPress={() => setWeatherAlertEnabled(!weatherAlertEnabled)}
              >
                <View style={styles.weatherAlertIcon}>
                  <Ionicons name="warning" size={20} color="#FF9800" />
                </View>
                <View style={styles.weatherAlertContent}>
                  <Text style={styles.weatherAlertTitle}>Weather Alert</Text>
                  <Text style={styles.weatherAlertDescription}>
                    Forecasted weather issues, such as floods, tornados, etc., on the planned route or searched location.
                  </Text>
                </View>
                <View style={styles.weatherAlertToggle}>
                  <View style={[styles.toggleTrack, weatherAlertEnabled && styles.toggleTrackActive]}>
                    <View style={[styles.toggleThumb, weatherAlertEnabled && styles.toggleThumbActive]} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {renderNavbar()}
      <View style={styles.content}>
        {renderCollapsibleSidebar()}
        <View style={styles.mapContainer}>
          {/* Web-only Google Maps implementation */}
          <div 
            ref={mapRef} 
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          {renderMapControls()}
        </View>
      </View>
      {renderMapLayerModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  activeNavItem: {
    backgroundColor: 'rgba(51, 102, 255, 0.1)',
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
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  collapsibleSidebar: {
    height: '100%',
    backgroundColor: '#f0f4ff',
    overflow: 'hidden',
  },
  sidebarScroll: {
    flex: 1,
  },
  sidebarMenuItems: {
    paddingTop: 10,
    flex: 1,
  },
  sidebarMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
    position: 'relative',
  },
  activeMenuItem: {
    backgroundColor: '#e6edff',
  },
  sidebarMenuText: {
    fontSize: 14,
    color: '#3366ff',
    marginLeft: 12,
    flex: 1,
  },
  activeMenuText: {
    fontWeight: '500',
  },
  lockIcon: {
    position: 'absolute',
    right: 15,
  },
  sidebarFooter: {
    marginTop: 'auto',
    paddingBottom: 20,
  },
  expandButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
    marginTop: 10,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapControls: {
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
    zIndex: 10,
  },
  mapLayerButton: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mapLayerText: {
    fontSize: 12,
    marginTop: 4,
  },
  zoomControls: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  zoomButton: {
    padding: 8,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  locationButton: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  mapLayerModal: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 10,
    marginTop: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  modalSection: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  displayOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  displayOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  selectedDisplayOption: {
    borderColor: '#3366ff',
    backgroundColor: 'rgba(51, 102, 255, 0.05)',
  },
  displayOptionText: {
    marginTop: 5,
    fontSize: 14,
  },
  mapTypeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapTypeOption: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    overflow: 'hidden',
  },
  selectedMapType: {
    borderColor: '#3366ff',
  },
  mapTypeIconContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapTypeText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  weatherOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
  },
  weatherAlertIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 152, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  weatherAlertContent: {
    flex: 1,
  },
  weatherAlertTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  weatherAlertDescription: {
    fontSize: 12,
    color: '#777',
    lineHeight: 16,
  },
  weatherAlertToggle: {
    marginLeft: 10,
  },
  toggleTrack: {
    width: 36,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ddd',
    padding: 2,
  },
  toggleTrackActive: {
    backgroundColor: '#3366ff',
  },
  toggleThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  toggleThumbActive: {
    transform: [{ translateX: 16 }],
  },
});

export default Map;

// Note: This implementation uses the Google Maps JavaScript API directly for web.
// It completely avoids react-native-maps to prevent the native module error.
// Replace 'YOUR_API_KEY' with an actual Google Maps API key.
// This component will only work in web environments.