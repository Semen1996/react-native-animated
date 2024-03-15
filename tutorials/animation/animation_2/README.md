

# React-Native. Animated API. Основы: ч.2

Рассмотрим вращение красного квадрата

```ts
import { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

function App() {
  const rotValue = new Animated.Value(0);
  const rotation = rotValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{rotate: rotation}]}]}></Animated.View>
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
```

## 1. Animated.interpolate()

В `Animated` есть метод класса `interpolate`, который вы можете использовать для манипулирования анимированными значениями, изменяя их на другие значения, которые вы также можете использовать. Метод `interpolate`
принимает объект конфигурации с двумя ключами: `inputRange` (массив) и `outputRange`(также массив).
`inputRange` - это исходные анимированные значения, с которыми вы работаете в классе, а
`outputRange` определяет значения, на которые следует изменить исходные значения.

```ts
  const rotValue = new Animated.Value(0);
  const rotation = rotValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
```

Тут мы инициализировали анимационную переменную и поменяли ее выходные данные на градусы. Теперь 1 === '360deg'. Удобно, когда мы используем другие единицы измерения, как тут (если мы говорим про движение, то могли быть px, например).

Стоит заметить, что в `Animated.timing()` идет анимационная переменная (`rotValue`), а не интерполяционная (`rotation`). А вот в анимационное свойство идет уже интерполяционные значения.

## 2. Animated.loop()

Для реализации бесконечного повторения анимации необходимо обернуть функцию настройки анимации в Animated.loop().
Если мы хотим сделать только определенное количество повторов, то необходимо прописать второй параметр. Это должен быть объект с ключом `iterations` и значением количество повторений анимации (по дефолту стоит -1)

```ts
    Animated.loop(
      Animated.timing(rotValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
```

## 3. Easing

Ранее мы говорили, что в конфигурации `Animated.timing()` есть ключ `easing`, в котором задается кривая анимации.
Так вот для задания этой кривой необходимо импортировать модуль Easing, в котором хранятся всевозможные кривые

```ts
  import { Animated, Easing } from 'react-native';

  Animated.timing(rotValue, {
    toValue: 1,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();
```

А на этом всё. Продолжение в следующем туторе.