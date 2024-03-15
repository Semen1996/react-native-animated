

# React-Native. Animated API. Основы: Ч.3

## 1. Animated.parallel()

Иногда вам нужно создать несколько анимаций и запустить их одновременно. В библиотеке Animated есть метод класса parallel, который вы можете использовать для таких задач

```ts
Animated.parallel()
```

В целом, для анимации нескольких объектов можно создать несколько отдельных анимации и вызвать `.start()` для каждой из них. Но более эффективным способом было бы использовать функцию Animated.parallel и передавать массив анимаций для одновременного запуска.

```ts
import { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

function App() {
  const anime1Value = new Animated.Value(-200);
  const anime2Value = new Animated.Value(200);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(anime1Value, {
        toValue: 0,
        duration: 5000,
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
```

Заметим, что мы всё равно вводим несколько анимационных переменных и несколько `Animated.timing()`, в которых мы задаем для каждого объекта отдельную анимацию

## 2. Animated.sequence()

`Animated.sequence()` - это серия анимаций, которые выполняются одна за другой, причем каждая анимация ожидает завершения предыдущей анимации, прежде чем начнется. Как и parallel, sequence использует массив анимаций:

```ts
  Animated.sequence([
    Animated.timing(anime1Value, {
      toValue: 0,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
    Animated.timing(anime2Value, {
      toValue: 0,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ]).start()
```

## 3. Animated.stagger()

Последний тип анимации, который мы рассмотрим, - Animated.stagger. Как и parallel и sequence, stagger использует массив анимаций. Массив анимаций запускается параллельно, но время начала распределено равномерно по всем анимациям. В отличие от parallel и sequence, первым аргументом для stagger является время stagger, а вторым аргументом является массив анимаций

```ts
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
```
