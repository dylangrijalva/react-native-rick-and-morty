import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export function CharacterCard({ item, onClick }) {
  return (
    <Pressable onPress={() => onClick(item)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ width: 100, height: 100, uri: item.image }} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1D1D',
    margin: 16,
    padding: 16,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
});
