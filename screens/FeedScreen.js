import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.emoji}>🐾</Text>
        <Text style={styles.title}>Feed em breve!</Text>
        <Text style={styles.sub}>Aqui aparecerão os posts dos woofs que você segue.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 },
  emoji: { fontSize: 56, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#8B5CF6', marginBottom: 8 },
  sub: { fontSize: 14, color: '#6B7280', textAlign: 'center', lineHeight: 22 },
});