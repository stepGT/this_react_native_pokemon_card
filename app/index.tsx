import PokemonCard from '@/components/PokemonCard';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  const charmanderData = {
    name: 'Charmander',
    image: require('../assets/images/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <PokemonCard {...charmanderData} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
