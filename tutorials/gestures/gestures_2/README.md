# React-Native. Gestures. Основы: ч.2 Система распознавания жестов в React-Native (Gesture Responder System)

Чтобы начать распознавать жесты, компонент должен реализовать один из этих методов согласования:

- `onStartShouldSetResponder: (event) => true` - Если этот метод возвращает значение true, компонент хочет стать ответчиком при запуске события касания
- `onMoveShouldSetResponder: (event) => true` - Если этот метод возвращает значение true, компонент хочет
стать ответчиком на событие касания. Этот метод вызывается для каждого события перемещения касания, если компонент не является ответчиком


Чаще всего начинают с `onStartShouldSetResponder`.

После того, как вы станете ответчиком, есть два обработчика, которые вы можете использовать для фиксации событий касания:

- `onResponderMove : (event) => {}` - Этот обработчик вызывается, когда пользователь перемещает палец
- `onResponderRelease: (event) => {}` - Этот обработчик вызывается, когда пользователь убирает палец с экрана устройства

Остальные обработчики редко используются, поэтому здесь о них говорится не будет. 

`event` - это событие касания, которая имеет следующую форму:

- `nativeEvent`
  - `changedTouches` - Массив всех событий касания, которые изменились с момента последнего события
  - `identifier` - Идентификатор прикосновения
  - `locationX` - Положение X касания относительно элемента
  - `locationY` - Положение Y касания относительно элемента
  - `pageX` - Положение X касания относительно корневого элемента
  - `pageY` - Положение Y касания относительно корневого элемента
  - `target` - Идентификатор узла элемента, получающего событие касания
  - `timestamp` - Идентификатор времени касания, полезный для расчета скорости
  - `touches` - Массив всех текущих касаний на экране

Рассмотрим следующий пример:

```jsx
function App() {
  const CIRCLE_SIZE = 50;
  const dimensions = useWindowDimensions();
  const touch = useRef(
    new Animated.ValueXY({ 
      x: (dimensions.width / 2 - CIRCLE_SIZE / 2), 
      y: (dimensions.height / 2 - CIRCLE_SIZE / 2)
  })).current;

 return (
  <View style={{ flex: 1 }}
    onStartShouldSetResponder= {() => true}
    onResponderMove={(event) => {
      touch.setValue({
        x: event.nativeEvent.pageX,
        y: event.nativeEvent.pageY
      });
    }}
    onResponderRelease={() => {
      Animated.spring(touch, {
        toValue: {
          x: dimensions.width / 2 - CIRCLE_SIZE / 2,
          y: dimensions.height / 2 - CIRCLE_SIZE / 2
        },
        useNativeDriver: false
      }).start();
    }}
  >
    <Animated.View
      style={{
        position: 'absolute',
        top: touch.y,
        left: touch.x,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: 'blue',
      }}
    />
  </View>
 );
};
```
`onStartShouldSetResponder= {() => true}` - мы устанавливаем обработчик касания на родительский View

Далее мы говорим, что при перемещение пальца устанавливай нашей анимационной переменной координаты нашего касания, чтобы шарик бегал за ним.

```js
onResponderMove={(event) => {
  touch.setValue({
    x: event.nativeEvent.pageX,
    y: event.nativeEvent.pageY
  });
}}
```

Когда пользователь уберет палец верни шарик в указанные координаты (но с эффектом пружины)

```js
onResponderRelease={() => {
  Animated.spring(touch, {
    toValue: {
      x: dimensions.width / 2 - CIRCLE_SIZE / 2,
      y: dimensions.height / 2 - CIRCLE_SIZE / 2
    },
    useNativeDriver: false
  }).start();
}}
```

`Animated.View` мы используем, чтобы можно было применять методы Animated API.

P.S. `onStartShouldSetResponder` можно использовать также, как `onResponderRelease`, но оно будет реагировать только при касание (на движение не реагирует)

Для более высокоуровневой интерпретации жестов посмотрите PanResponder (следующий тутор).