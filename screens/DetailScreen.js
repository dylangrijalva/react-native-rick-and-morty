import { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useCharacter } from '../hooks';

export function DetailScreen({ route, navigation }) {
  const id = route.params.id;
  const [character, isLoading] = useCharacter(id);

  if (character) {
    navigation.setOptions({
      title: character.name,
    });
  }

  return (
    <View style={styles.container}>
      {isLoading ? <Text style={styles.text}>Loading</Text> : <CharacterDetail character={character} />}
    </View>
  );
}

export function CharacterDetail({ character }) {
  const status = useMemo(() => (character.status === 'Alive' ? styles.liveStatus : styles.deadStatus));
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: character.image, with: 100, height: 100 }} />
      <Text style={styles.title}>{character.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={status} />
        <Text style={styles.subtitle}>{character.species}</Text>
      </View>
      <Text style={{ color: 'white', opacity: 0.8 }}>Last known location</Text>
      <Text style={{ color: 'white', opacity: 0.8 }}>{character.location.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    opacity: 0.8,
  },
  liveStatus: {
    marginTop: 2,
    marginTop: 2,
    marginRight: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#55CC44',
  },
  deadStatus: {
    marginTop: 2,
    marginRight: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D63D2E',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    margin: 16,
    borderWidth: 4,
    borderColor: 'white',
  },
});
