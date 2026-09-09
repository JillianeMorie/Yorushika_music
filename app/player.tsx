import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PlayerScreen() {
  const { trackTitle, trackImage } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Now Playing",
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
),        }}
      />

     
      <View style={styles.artContainer}>
        {trackImage ? (
          <Image source={Number(trackImage)} style={styles.bigArtwork} />
        ) : (
          <View style={styles.bigArtwork} />
        )}
      </View>

      <View style={styles.metaContainer}>
        <Text numberOfLines={1} style={styles.trackTitle}>
          {trackTitle || "Select a Track"}
        </Text>
        <Text style={styles.artistName}>Yorushika</Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBg}>
          <View style={styles.progressBarActive} />
        </View>
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>0:00</Text>
          <Text style={styles.timeText}>3:40</Text>
        </View>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.sideButton}>
          <Text style={styles.sideIcon}>🔀</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.sideButton}>
          <Text style={styles.navIcon}>⏮️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
          <Text style={styles.playIcon}>⏸️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sideButton}>
          <Text style={styles.navIcon}>⏭️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sideButton}>
          <Text style={styles.sideIcon}>🔁</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.comingSoonBox}> 
  <Text style={styles.comingSoonText}>
  🎵 Audio & Lyrics Coming Soon
</Text>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  artContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  bigArtwork: {
    width: 280,
    height: 280,
    backgroundColor: '#282828',
    borderRadius: 8,
  },
  metaContainer: {
    marginBottom: 24,
    alignItems: 'flex-start',
    width: '100%',
  },
  trackTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  artistName: {
    color: '#B3B3B3',
    fontSize: 15,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 32,
  },
  progressBarBg: {
    height: 4,
    backgroundColor: '#535353',
    borderRadius: 2,
    width: '100%',
  },
  progressBarActive: {
    height: 4,
    backgroundColor: '#1DB954', 
    width: '15%', 
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  timeText: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 12,
    marginBottom: 40,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    fontSize: 22,
  },
  sideButton: {
    padding: 8,
  },
  navIcon: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  sideIcon: {
    color: '#B3B3B3',
    fontSize: 18,
  },
  comingSoonBox: {
    backgroundColor: '#282828',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#3E3E3E',
  },
  comingSoonHeader: {
    color: '#1DB954',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 10,
    textAlign: 'center',
  },
 comingSoonText: {
  color: '#EAEAEA',
  fontSize: 13,
  fontWeight: '500',
  marginVertical: 4,
  textAlign: 'center',
},
});