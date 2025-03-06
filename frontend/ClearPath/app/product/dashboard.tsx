// app/dashboard/dashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          // onPress={() => navigation.navigate('fleets')}
        >
          <Text style={styles.cardTitle}>Manage Fleets</Text>
          <Text style={styles.cardDescription}>View and manage your fleet operations</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          // onPress={() => navigation.navigate('Reports')}
        >
          <Text style={styles.cardTitle}>Reports</Text>
          <Text style={styles.cardDescription}>View analytics and performance reports</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          // onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.cardTitle}>Settings</Text>
          <Text style={styles.cardDescription}>Adjust your account and app preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          // onPress={() => navigation.navigate('Help')}
        >
          <Text style={styles.cardTitle}>Help & Support</Text>
          <Text style={styles.cardDescription}>Get assistance or FAQs</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    padding: 20,
    backgroundColor: '#004aad',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default Dashboard;
