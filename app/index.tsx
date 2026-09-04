import { Stack, useRouter } from 'expo-router';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextTicker from 'react-native-text-ticker';

// Mock Data with local image asset files configured
const best_of = [
  { id: '1', title: 'Say It', image: require('../assets/images/say_it.jpg') }, 
  { id: '2', title: 'Just A Sunny Day For You', image: require('../assets/images/sunny_day.jpg') }, 
  { id: '3', title: 'Rain With Capuccin', image: require('../assets/images/capuccino.jpg') },    
  { id: '4', title: 'Thats Why I Gave Up On Music', image: require('../assets/images/gave_up.webp') },    
];
const albums = [
  { id: '1', title: 'Summer Grass Gets in the Way', image: require('../assets/images/summer_grass.png') }, 
  { id: '2', title: 'An Encore Doesnt Suit a Loser', image: require('../assets/images/suit_loser.png') }, 
  { id: '3', title: 'Plagiarism', image: require('../assets/images/plagiarism.png') },    
  { id: '4', title: 'Thats Why I Gave Up On Music', image: require('../assets/images/gave_up.webp') },    
];


const HEAVY_ROTATION = [
  { id: '5', title: 'Ghost In A Flower', subtitle: 'Smell of Summer', image: require('../assets/images/ghost_flower.jpg') }, 
  { id: '6', title: 'Lofi Beats', subtitle: 'Study and relax', image: require('../assets/images/ghost_flower.jpg') },    
  { id: '7', title: 'Deep Focus', subtitle: 'Ambient sounds', image: require('../assets/images/ghost_flower.jpg') },    
];

export default function SpotifyHome() {
  const router = useRouter();
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
        {best_of.map((item) => (
          <TouchableOpacity key={item.id} style={styles.gridCard} activeOpacity={0.8}>
            {item.image ? (
              <Image source={item.image} style={styles.gridImageBlock} />
            ) : (
              <View style={[styles.gridImageBlock,]} />
            )}
            <Text numberOfLines={1} style={styles.gridText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* --- HORIZONTAL SHELF 1: MADE FOR YOU --- */}
<View style={styles.shelfContainer}>
  <Text style={styles.shelfTitle}>Yorushika's Album</Text>
  <FlatList
    data={albums}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity style={styles.albumCard} activeOpacity={0.7}
onPress={() => router.push({
  pathname: '/album', // Keeps your path name exactly the same
  params: { albumTitle: item.title } // Passes the specific album title parameter text forward
})}

      >
        
        {}
        <View style={styles.imageWrapper}>
          {item.image ? (
            <Image source={item.image} style={styles.albumImageBlock} />
          ) : (
            <View style={[styles.albumImageBlock]} />
          )}
          
          {/* 2. ADD THIS FLOATING RECTANGLE RIGHT BENEATH THE IMAGE CONTENT */}
          <View style={styles.albumTagContainer}>
            <Text style={styles.albumTagText}>ALBUM</Text>
          </View>
        </View>

  <TextTicker 
    style={styles.albumTitle} 
    duration={10000} 
    loop 
    bounce 
    repeatSpacer={50} 
    marqueeDelay={1000}
>
  {item.title}
</TextTicker>

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
                <View style={[styles.largeAlbumImageBlock,]} />
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
    // --- ADD THESE TWO STYLE RULE BLOCKS BELOW YOUR gridCard STYLE ---
  imageWrapper: {
    position: 'relative', 
    overflow: 'hidden',
  },
  albumTagContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)', // Semi-transparent black shade
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumTagText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

});
