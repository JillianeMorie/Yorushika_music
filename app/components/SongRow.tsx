import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SongRowProps {
  index: number;
  trackName: string;
  onPress: () => void;
}

export default function SongRow({ index, trackName, onPress }: SongRowProps) {
  return (
    <TouchableOpacity style={styles.trackRow} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.trackNumber}>{index + 1}</Text>
      <View style={styles.trackTextDetails}>
        <Text numberOfLines={1} style={styles.trackTitle}>{trackName}</Text>
        <Text style={styles.trackPlays}>Yorushika Official Track</Text>
      </View>
      <Text style={styles.trackDuration}>3:40</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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