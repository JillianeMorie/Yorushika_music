import { Stack, useRouter } from 'expo-router';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AlbumCard from './components/AlbumCard';

const best_of = [
  {
    id: '1',
    title: 'Say It',
    image: require('../assets/images/say_it.jpg'),
  },
  {
    id: '2',
    title: 'Just A Sunny Day For You',
    image: require('../assets/images/sunny_day.jpg'),
  },
  {
    id: '3',
    title: 'Rain With Capuccin',
    image: require('../assets/images/capuccino.jpg'),
  },
  {
    id: '4',
    title: 'Thats Why I Gave Up On Music',
    image: require('../assets/images/gave_up.webp'),
  },
];

const albums = [
  {
    id: '1',
    title: 'Summer Grass Gets in the Way',
    image: require('../assets/images/summer_grass.png'),
  },
  {
    id: '2',
    title: 'An Encore Doesnt Suit a Loser',
    image: require('../assets/images/suit_loser.png'),
  },
  {
    id: '3',
    title: 'Plagiarism',
    image: require('../assets/images/plagiarism.png'),
  },
  {
    id: '4',
    title: 'Thats Why I Gave Up On Music',
    image: require('../assets/images/gave_up.webp'),
  },
];

const YOU_MIGHT_LIKE = [
  {
    id: '5',
    title: 'Ghost In A Flower',
    subtitle: 'Smell of Summer',
    image: require('../assets/images/ghost_flower.jpg'),
  },
  {
    id: '6',
    title: 'Hitchcock',
    subtitle: 'Study and relax',
    image: require('../assets/images/hitch.png'),
  },
  {
    id: '7',
    title: 'Nautilus',
    subtitle: 'Ambient sounds',
    image: require('../assets/images/nautilus.png'),
  },
];

export default function SpotifyHome() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>
          <View>
            <Text style={styles.smallGreeting}>LISTEN TO</Text>
            <Text style={styles.greetingText}>Yorushika</Text>
          </View>

          <View style={styles.headerDot}>
            <Text style={styles.headerDotText}>♪</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best of Yorushika</Text>
          <Text style={styles.sectionSubtitle}>Popular tracks</Text>
        </View>

        <View style={styles.gridContainer}>
          {best_of.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.gridCard}
              activeOpacity={0.8}
              onPress={() =>
                router.push({
                  pathname: '/player',
                  params: {
                    trackTitle: item.title,
                    trackImage: item.image,
                  },
                })
              }
            >
              <Image
                source={item.image}
                style={styles.gridImageBlock}
              />

              <View style={styles.gridTextContainer}>
                <Text
                  numberOfLines={2}
                  style={styles.gridText}
                >
                  {item.title}
                </Text>

                <Text style={styles.gridArtist}>
                  Yorushika
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.shelfContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Yorushika's Albums</Text>
            <Text style={styles.sectionSubtitle}>Explore the collection</Text>
          </View>

          <FlatList
            data={albums}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.horizontalList}
            renderItem={({ item }) => (
              <AlbumCard
                title={item.title}
                image={item.image}
                onPress={() =>
                  router.push({
                    pathname: '/album',
                    params: {
                      albumTitle: item.title,
                      albumImage: item.image,
                    },
                  })
                }
              />
            )}
          />
        </View>

        <View style={styles.shelfContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>You Might Like</Text>
            <Text style={styles.sectionSubtitle}>More songs for you</Text>
          </View>

          <FlatList
            data={YOU_MIGHT_LIKE}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.horizontalList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.largeAlbumCard}
                activeOpacity={0.8}
                onPress={() =>
                  router.push({
                    pathname: '/player',
                    params: {
                      trackTitle: item.title,
                      trackImage: item.image,
                    },
                  })
                }
              >
                <View style={styles.largeImageWrapper}>
                  <Image
                    source={item.image}
                    style={styles.largeAlbumImageBlock}
                  />

                  <View style={styles.playOverlay}>
                    <Text style={styles.playIcon}>▶</Text>
                  </View>
                </View>

                <Text
                  numberOfLines={1}
                  style={styles.albumTitle}
                >
                  {item.title}
                </Text>

                <Text
                  numberOfLines={1}
                  style={styles.albumSubtitle}
                >
                  {item.subtitle}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{ height: 70 }} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#121212',
  },

  container: {
    flex: 1,
  },

  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 58,
  },


  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  smallGreeting: {
    color: '#A7A7A7',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 4,
  },

  greetingText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  headerDot: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerDotText: {
    color: '#FFFFFF',
    fontSize: 21,
  },


  sectionHeader: {
    marginBottom: 14,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: -0.3,
  },

  sectionSubtitle: {
    color: '#8E8E8E',
    fontSize: 12,
    marginTop: 4,
  },


  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 34,
  },

  gridCard: {
    width: '48.5%',
    height: 70,
    backgroundColor: '#202020',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },

  gridImageBlock: {
    width: 70,
    height: 70,
  },

  gridTextContainer: {
    flex: 1,
    paddingHorizontal: 9,
    justifyContent: 'center',
  },

  gridText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },

  gridArtist: {
    color: '#858585',
    fontSize: 10,
    marginTop: 3,
  },


  shelfContainer: {
    marginBottom: 32,
  },

  horizontalList: {
    paddingRight: 8,
  },


  largeAlbumCard: {
    width: 155,
    marginRight: 17,
  },

  largeImageWrapper: {
    position: 'relative',
    marginBottom: 9,
  },

  largeAlbumImageBlock: {
    width: 155,
    height: 155,
    borderRadius: 8,
  },

  playOverlay: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  playIcon: {
    color: '#121212',
    fontSize: 13,
    marginLeft: 2,
  },

  albumTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  albumSubtitle: {
    color: '#858585',
    fontSize: 11,
    marginTop: 4,
  },
});