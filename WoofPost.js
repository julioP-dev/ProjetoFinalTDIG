import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title } from './BasicComponents';
import { Text } from 'react-native';

export default function WoofPost({ image, title, description }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Title>{title}</Title>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  image: {
    flex: 1,
    height: 80,
    backgroundColor: '#E5E7EB',
  },
  content: {
    flex: 2,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  description: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
    lineHeight: 17,
  },
});