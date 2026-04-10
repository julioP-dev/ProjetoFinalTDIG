import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';

// ── Avatar ────────────────────────────────────────────────────────
export function Avatar({ uri, size = 64 }) {
  return (
    <Image
      source={{ uri }}
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    />
  );
}

// ── Heading ───────────────────────────────────────────────────────
export function Heading({ children }) {
  return <Text style={styles.heading}>{children}</Text>;
}

// ── Title ─────────────────────────────────────────────────────────
export function Title({ children, style }) {
  return <Text style={[styles.title, style]} numberOfLines={1}>{children}</Text>;
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#E5E7EB',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1F2937',
    letterSpacing: 0.5,
  },
});