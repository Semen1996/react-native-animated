import { useRef } from 'react';
import { View, Animated, PanResponder } from 'react-native';

function App() {
  const RECT_SIZE = 200;

  const pan = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0
    })
  ).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if(gestureState.numberActiveTouches === 1) {
          pan.setValue({
            x: gestureState.dx,
            y: gestureState.dy,
          });
        }
      }
    })
  ).current;

 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Animated.View
      style={{
        width: RECT_SIZE,
        height: RECT_SIZE,
        backgroundColor: 'blue',
        transform: [
          {translateX: pan.x},
          {translateY: pan.y}
        ]
      }}
      {...panResponder.panHandlers}
    />
  </View>
 );
};

export default App;
