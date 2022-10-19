import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useCharacters } from '../hooks/index';
import { CharacterCard } from '../components/CharacterCard';
import { useMemo, useState } from 'react';

export function HomeScreen({ navigation }) {
  const characters = useCharacters();
  const [query, setQuery] = useState('');

  const filteredCharacters = useMemo(
    () =>
      characters.filter(character => {
        if (query === '') {
          return character;
        }
        return character.name.toLowerCase().includes(query.toLowerCase());
      }),
    [query, characters]
  );

  const onClick = character => {
    navigation.navigate('Detail', {
      id: character.id,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={value => setQuery(prev => value)}
          placeholder="Type character's name"
          placeholderTextColor={'#E6E6E6'}
          style={styles.input}
        />
      </View>
      <FlatList
        numColumns={2}
        data={filteredCharacters}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <CharacterCard item={item} onClick={onClick} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 22,
  },
  inputContainer: {
    padding: 8,
    backgroundColor: '#3C4042',
    width: '100%',
    borderRadius: 8,
  },
  input: {
    color: '#fff',
  },
  container: {
    alignItems: 'center',
    padding: 16,
    flex: 1,
    backgroundColor: '#121212',
  },
});
