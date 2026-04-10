import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title } from './BasicComponents';

export default function WoofCard({ name, avatar }) {
  return (
    <View style={styles.card}>
      <Avatar uri={avatar} size={72} />
      <View style={styles.nameWrapper}>
        <Title style={styles.name}>{name}</Title>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    alignItems: 'center',
    marginRight: 12,
    width: 100,
    // shadow iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    // shadow Android
    elevation: 3,
  },
  nameWrapper: {
    marginTop: 8,
    width: '100%',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 11,
  },
});