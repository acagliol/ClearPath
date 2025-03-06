import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface SignUpProps {
  isVisible: boolean;
  onClose: () => void;
  onSignUp: (email: string, password: string) => void;
  onLoginClick: () => void;
}

const SignUp = ({ isVisible, onClose, onSignUp, onLoginClick }: SignUpProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    onSignUp(email, password);
  };

  const userTypes = [
    'Dispatchers',
    'Fleet Owners',
    'Truck Drivers',
    'Trucking Accountants',
    'Operations Managers',
  ];

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <View style={styles.leftSection}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>ClearPath</Text>
              </View>

              <Text style={styles.heading}>All-In-One Trucking Software</Text>
              <Text style={styles.subheading}>
                Easy-To-Use TMS for Trucking Professionals
              </Text>

              <View style={styles.userTypesList}>
                {userTypes.map((type, index) => (
                  <View key={index} style={styles.userTypeItem}>
                    <Text style={styles.checkmark}>✓</Text>
                    <Text style={styles.userTypeText}>{type}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.rightSection}>
              <Text style={styles.title}>Create Your Free Account</Text>
              <Text style={styles.subtitle}>
                Try for 7 Days Free. Cancel anytime, no contracts.
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
                <Text style={styles.signupButtonText}>START USING NOW</Text>
              </TouchableOpacity>

              <Text style={styles.termsText}>
                By registering, you agree to our{' '}
                <Text style={styles.link}>Privacy Policy</Text> and{' '}
                <Text style={styles.link}>Terms and Conditions</Text>
              </Text>

              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={onLoginClick}>
                  <Text style={styles.loginLink}>Log in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    maxWidth: 800,
    maxHeight: '90%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#666',
  },
  container: {
    flexDirection: 'row',
    minHeight: 600,
  },
  leftSection: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 30,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightSection: {
    flex: 1,
    padding: 30,
  },
  logo: {
    width: 150,
    height: 40,
    backgroundColor: '#1a365d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 20,
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  userTypesList: {
    marginTop: 20,
  },
  userTypeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkmark: {
    color: '#1a365d',
    fontSize: 16,
    marginRight: 10,
  },
  userTypeText: {
    fontSize: 16,
    color: '#1a365d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#1a365d',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#1a365d',
    textDecorationLine: 'underline',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#666',
  },
  loginLink: {
    color: '#1a365d',
    textDecorationLine: 'underline',
  },
});

export default SignUp;