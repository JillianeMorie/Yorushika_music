import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextTicker from 'react-native-text-ticker';

interface AlbumCardProps {
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

export default function AlbumCard({ title, image, onPress }: AlbumCardProps) {
  return (
    <TouchableOpacity style={styles.albumCard} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.imageWrapper}>
        {image ? (
          <Image source={image} style={styles.albumImageBlock} />
        ) : (
          <View style={styles.albumImageBlock} />
        )}
       
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
        {title}
      </TextTicker>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  albumCard: {
    marginRight: 16,
    width: 120,
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  albumImageBlock: {
    width: 120,
    height: 120,
    borderRadius: 4,
    marginBottom: 8,
  },
  albumTagContainer: {
    position: 'absolute',
    bottom: 1,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumTagText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },
  albumTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
});