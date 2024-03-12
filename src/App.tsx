import { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

function App() {
  const anime1Value = new Animated.Value(-200);
  const anime2Value = new Animated.Value(200);

  useEffect(() => {
    Animated.stagger( 100, [
      Animated.timing(anime1Value, {
        toValue: 0,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(anime2Value, {
        toValue: 0,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.rect, {transform: [{ translateX: anime1Value}, {translateY: anime2Value}]}]}></Animated.View>
      <Animated.View style={[styles.rect, {transform: [{ translateX: anime2Value }]}]}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  rect: {
    width: 100,
    height: 25,
    backgroundColor:'red'
  }
});

export default App;
