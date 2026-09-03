import { Stack } from 'expo-router';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Mock Data with local image asset files configured
const RECENT_ALBUMS = [
  { id: '1', title: 'Daily Mix 1', image: require('../assets/images/say_it.jpg') }, 
  { id: '2', title: 'Chill Vibes', color: '#BD00FF' }, 
  { id: '3', title: 'Top Hits', color: '#00E5FF' },    
  { id: '4', title: 'Discover', color: '#FF9900' },    
];

const HEAVY_ROTATION = [
  { id: '5', title: 'Rock Classics', subtitle: 'The finest 70s', color: '#FF0055', image: require('../assets/images/say_it.jpg') }, 
  { id: '6', title: 'Lofi Beats', subtitle: 'Study and relax', color: '#00FF66' },    
  { id: '7', title: 'Deep Focus', subtitle: 'Ambient sounds', color: '#3300FF' },    
];

export default function SpotifyHome() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Hides the white "index" status bar header at the top */}
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* --- HEADER --- */}
      <View style={styles.header}>
        <Text style={styles.greetingText}>Best of Yorushika</Text>
      </View>

      {/* --- QUICK GRID (2 COLUMNS) --- */}
      <View style={styles.gridContainer}>
        {RECENT_ALBUMS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.gridCard} activeOpacity={0.8}>
            {item.image ? (
              <Image source={item.image} style={styles.gridImageBlock} />
            ) : (
              <View style={[styles.gridImageBlock, { backgroundColor: item.color }]} />
            )}
            <Text numberOfLines={1} style={styles.gridText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* --- HORIZONTAL SHELF 1: MADE FOR YOU --- */}
      <View style={styles.shelfContainer}>
        <Text style={styles.shelfTitle}>Yorushika'ss Album</Text>
        <FlatList
          data={RECENT_ALBUMS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.albumCard} activeOpacity={0.7}>
              {item.image ? (
                <Image source={item.image} style={styles.albumImageBlock} />
              ) : (
                <View style={[styles.albumImageBlock, { backgroundColor: item.color }]} />
              )}
              <Text numberOfLines={1} style={styles.albumTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* --- HORIZONTAL SHELF 2: RECENTLY PLAYED --- */}
      <View style={styles.shelfContainer}>
        <Text style={styles.shelfTitle}>You Might Like</Text>
        <FlatList
          data={HEAVY_ROTATION}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.largeAlbumCard} activeOpacity={0.7}>
              {item.image ? (
                <Image source={item.image} style={styles.largeAlbumImageBlock} />
              ) : (
                <View style={[styles.largeAlbumImageBlock, { backgroundColor: item.color }]} />
              )}
              <Text numberOfLines={1} style={styles.albumTitle}>{item.title}</Text>
              <Text numberOfLines={1} style={styles.albumSubtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{ height: 60 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 60, 
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  gridCard: {
    backgroundColor: '#282828',
    width: '48%',
    height: 56,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  gridImageBlock: {
    width: 56,
    height: 56,
  },
  gridText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 8,
    flex: 1,
    paddingRight: 4,
  },
  shelfContainer: {
    marginBottom: 28,
  },
  shelfTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 14,
  },
  albumCard: {
    marginRight: 16,
    width: 120,
  },
  albumImageBlock: {
    width: 120,
    height: 120,
    borderRadius: 4,
    marginBottom: 8,
  },
  albumTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  largeAlbumCard: {
    marginRight: 16,
    width: 150,
  },
  largeAlbumImageBlock: {
    width: 150,
    height: 150,
    borderRadius: 4,
    marginBottom: 8,
  },
  albumSubtitle: {
    color: '#B3B3B3',
    fontSize: 12,
    marginTop: 2,
  },
});
