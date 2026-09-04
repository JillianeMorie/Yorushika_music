import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AlbumDetailScreen() {
  // 1. Catches the specific album title string passed from your home view
  const { albumTitle } = useLocalSearchParams();

  // 2. Variable array stack to store tracks based on what was tapped
  let trackList: string[] = [];

  // 3. The Switch Engine: Matches your 4 specific albums to their true song lists
  switch (albumTitle) {
    case 'Summer Grass Gets in the Way':
      trackList = ['Say It.', 'The Clouds and the Ghost', 'Fireworks Beneath My Boots', 'Cattleya'];
      break;

    case 'An Encore Doesnt Suit a Loser':
      trackList = ['Hitchcock', 'Just a Sunny Day for You', 'Drop of Export', 'Loser Encore'];
      break;

    case 'Plagiarism':
      trackList = ['Plagiarism', 'Robber', 'Thoughtcrime', 'Replicant', 'Night Journey'];
      break;

    case 'Thats Why I Gave Up On Music':
      trackList = ['Thats Why I Gave Up On Music', 'August, a Certain Station', 'Indigo', 'Elma', 'Parade'];
      break;

    default:
      // Fallback baseline layout content text if missing
      trackList = ['Track 1', 'Track 2', 'Track 3'];
      break;
  }

  return (
    <View style={styles.container}>
      {/* Updates your screen header layout text bar dynamically */}
      <Stack.Screen 
        options={{ 
          headerShown: true, 
          title: (albumTitle as string) || "Album Details", 
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' }
        }} 
      />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
        {/* --- ALBUM HEADER PANEL COVER BLOCK --- */}
        <View style={styles.artContainer}>
          <View style={styles.bigArtwork} />
          <Text style={styles.albumName}>{albumTitle}</Text>
          <Text style={styles.artistName}>Yorushika</Text>
        </View>

        {/* --- CONTROLS ACTION BUTTON ROW --- */}
        <View style={styles.controlsRow}>
          <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
            <Text style={styles.playIcon}>▶️</Text>
          </TouchableOpacity>
        </View>

        {/* --- RENDERED TRACK LIST ROWS --- */}
        <View style={styles.trackListContainer}>
          {trackList.map((trackName, index) => (
            <View key={index} style={styles.trackRow}>
              <Text style={styles.trackNumber}>{index + 1}</Text>
              <View style={styles.trackTextDetails}>
                <Text numberOfLines={1} style={styles.trackTitle}>{trackName}</Text>
                <Text style={styles.trackPlays}>Yorushika Official Track</Text>
              </View>
              <Text style={styles.trackDuration}>3:40</Text>
            </View>
          ))}
        </View>
        
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  artContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  bigArtwork: {
    width: 200,
    height: 200,
    backgroundColor: '#282828',
    borderRadius: 8,
    marginBottom: 16,
  },
  albumName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  artistName: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#1DB954',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 20,
    marginLeft: 4,
  },
  trackListContainer: {
    marginBottom: 20,
  },
  trackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#282828',
  },
  trackNumber: {
    color: '#B3B3B3',
    fontSize: 14,
    width: 24,
  },
  trackTextDetails: {
    flex: 1,
    paddingRight: 8,
  },
  trackTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  trackPlays: {
    color: '#B3B3B3',
    fontSize: 12,
    marginTop: 2,
  },
  trackDuration: {
    color: '#B3B3B3',
    fontSize: 14,
  },
});
