import { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

function App() {
  const moveY = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(moveY, {
      toValue: 300,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{translateY: moveY}]}]}></Animated.View>
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
  box: {
    width: 50,
    height: 50,
    backgroundColor:'red'
  }
});

export default App;
