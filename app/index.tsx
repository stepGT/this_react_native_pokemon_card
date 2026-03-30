import PokemonCard from '@/components/PokemonCard';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
