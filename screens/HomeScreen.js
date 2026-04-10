import React from 'react';
import { View, ScrollView, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Heading } from '../components/BasicComponents';
import WoofCard from '../components/WoofCard';
import WoofPost from '../components/WoofPost';
import data from '../data';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* ── Trending Woofs (Projeto 8, Passo 3) ─────────────── */}
        <View style={styles.section}>
          <Heading>Trending Woofs</Heading>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalPadding}
          >
            {data.woofs.map((woof) => (
              <WoofCard key={woof.id} name={woof.name} avatar={woof.avatar} />
            ))}
          </ScrollView>
        </View>

        {/* ── New Woof Posts (Projeto 8, Passo 5) ─────────────── */}
        <View style={styles.section}>
          <Heading>New Woof Posts</Heading>
          {data.posts.map((post) => (
            <WoofPost
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  section: {
    marginBottom: 24,
  },
  horizontalPadding: {
    paddingLeft: 2,
    paddingRight: 8,
  },
});
