import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SongRow from './components/SongRow'; 

export default function AlbumDetailScreen() {
  const { albumTitle, albumImage } = useLocalSearchParams();
  const router = useRouter();

  let trackList: string[] = [];

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
      trackList = ['Track 1', 'Track 2', 'Track 3'];
      break;
  }

  return (
    <View style={styles.container}>
     <Stack.Screen 
  options={{ 
    headerShown: true, 
    title: (albumTitle as string) || "Album Details", 
    headerStyle: { backgroundColor: '#121212' }, 
    headerTintColor: '#FFFFFF', 
    headerTitleStyle: { fontWeight: 'bold' },

   headerLeft: () => (
  <TouchableOpacity
    onPress={() => router.back()}
    activeOpacity={0.1}
    style={{
      width: 40,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ 
      color: '#FFFFFF', 
      fontSize: 50,
    }}>
      ‹ 
    </Text>
  </TouchableOpacity>
),
  }} 
/>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.artContainer}>
          {albumImage ? (
            <Image source={Number(albumImage)} style={styles.bigArtwork} />
          ) : (
            <View style={styles.bigArtwork} />
          )}
          <Text style={styles.albumName}>{albumTitle}</Text>
          <Text style={styles.artistName}>Yorushika</Text>
        </View>

        <View style={styles.controlsRow}>
          <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
            <Text style={styles.playIcon}>▶️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.trackListContainer}>
          {trackList.map((trackName, index) => (
            <SongRow
              key={index}
              index={index}
              trackName={trackName}
              onPress={() => router.push({
                pathname: '/player',
                params: {
                  trackTitle: trackName,
                  trackImage: albumImage
                }
              })}
            />
          ))}
        </View>
       
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  scrollContainer: { paddingHorizontal: 16 },
  artContainer: { alignItems: 'center', marginTop: 20, marginBottom: 20 },
  bigArtwork: { width: 200, height: 200, backgroundColor: '#282828', borderRadius: 8, marginBottom: 16 },
  albumName: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold', marginBottom: 4, textAlign: 'center' },
  artistName: { color: '#B3B3B3', fontSize: 14 },
  controlsRow: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20 },
  playButton: { backgroundColor: '#1DB954', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  playIcon: { fontSize: 20, marginLeft: 4 },
  trackListContainer: { marginBottom: 20 },
});