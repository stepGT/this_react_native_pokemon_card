import { Image, ImageSourcePropType, Platform, StyleSheet, Text, View } from 'react-native';

type TCard = {
  name: string;
  image: ImageSourcePropType;
  hp: number;
  moves: string[];
  weaknesses: string[];
};

export default function PokemonCard({ name, image, hp, moves, weaknesses }: TCard) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      <Image source={image} accessibilityLabel={`${name} Pokemon`} resizeMode="contain" />

      <View>
        <Text>Moves: {moves.join(', ')}</Text>
      </View>

      <View>
        <Text>Weakness: {weaknesses.join(', ')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
