

# React-Native. Animated API. Основы: ч.1

Для начала рассмотрим движение красного квадрата по оси у.

```ts
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
      <Animated.View
        style={[styles.box, {transform: [{translateY: moveY}]}]}
      >
      </Animated.View>
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

При создании анимации вам всегда нужно выполнить следующие три действия:

1. Создать анимированную переменную
```ts
const moveY = new Animated.Value(0);
```
2. Настроить параметры анимации и запустить ее
```ts
Animated.timing(moveY, {
  toValue: 300,
  duration: 500,
  useNativeDriver: true,
}).start();
```
3. Создать анимируемый компонент и привязать анимационную переменную к изменяемому стилю
```ts
<Animated.View style={[styles.box, {transform: [{translateY: moveY}]}]}>
</Animated.View>
```

Рассмотрим каждый этап поподробнее

## 1. Создание анимированной переменной

Это команда, которой мы инициализируем анимацию и задаем ей начальное значение.
Есть 2 типа инициализации:
```ts
Animated.Value() // Для одного числа
Animated.ValueXY() // Для двумерной анимации (например, движение по x-, y- координатам)
```

## 2. Настройка параметров анимации и ее запуск

Animated предоставляет три типа анимации. Каждый тип анимации предоставляет определенную кривую анимации, которая управляет анимацией ваших значений от их начального значения до конечного значения
```ts
Animated.timing() // анимирует значение с течением времени с помощью easing function
Animated.spring() //предоставляет базовую физическую модель пружины
Animated.decay() // начинается с начальной скорости и постепенно замедляется до полной остановки
```

Тут мы будем рассматривать только `Animated.timing()`, так как она чаще всего используется в решениях задач.

```ts
Animated.timing(var, config)
```
`var` - это анимированная переменная, которую мы инициализировали с помощью команды `Animated.Value()`;
`config` - это объект со следующими возможными опциями (их больше, но это основные)

- `toValue`: значение к концу анимации
- `duration`: продолжительность анимации
- `easing`: задание кривой анимации (linier, easyOut, easyIn,...)
- `delay`: время задержки перед запуском анимации
- `useNativeDriver`: использование nativeDriver (желательно всегда устанавливать true. Это в разы ускорит работу анимации)

## 3. Создание анимируемой компоненты и привязка анимационной переменной к изменяемому стилю

Из коробки с Animated API поставляются шесть типов анимируемых компонентов:

-	View
-	ScrollView
-	Text
-	Image
-	FlatList
-	SectionList

но вы также можете создать свой собственный, используя Animated.createAnimatedComponent().

Тут всё просто. Мы берем необходимый компонент и оборачиваем его в Animated.
Далее берем анимационную переменную и вставляем в то свойство, которое хотели бы анимировать

```ts
<Animated.View style={[styles.box, {transform: [{translateY: moveY}]}]}>
</Animated.View>
```

А на этом всё. Продолжение в следующем туторе.