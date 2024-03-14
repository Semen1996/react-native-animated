# React-Native. Gestures. Основы: ч.3 PanResponder

PanResponder, можно сказать, является оберткой  Gesture Responder System для более простого взаимодействия с прикосновениями. PanResponder объединяет несколько касаний в один жест. Он делает жесты с одним касанием устойчивыми к дополнительным касаниям и может использоваться для распознавания основных жестов с несколькими касаниями.

PanResponder в основном работает точно так же, как Gesture Responder System. Она предоставляет аналогичный API; однако вам просто нужно заменить Responder на PanResponder. Например, onResponderMove становится onPanResponderMove. Разница в том, что вы получаете не просто необработанные события касания. PanResponder также предоставляет объект state (`gestureState`), который представляет состояние всего жеста. Это включает в себя следующие свойства:

- `stateID` — идентификатор состояния жеста — сохраняется до тех пор, пока на экране есть хотя бы одно касание.
- `moveX` — последние экранные координаты недавно перемещенного касания
- `moveY` — последние экранные координаты недавно перемещенного касания
- `x0` — координаты экрана отвечающего гранта
- `y0` — экранные координаты отвечающего гранта
- `dx` — накопленное расстояние жеста с момента начала касания
- `dy` — накопленное расстояние жеста с момента начала касания
- `vx` — текущая скорость жеста
- `vy` — текущая скорость жеста
- `numberActiveTouches` — количество касаний, находящихся в данный момент на экране


Этот объект состояния может быть очень полезен, когда дело доходит до интерпретации и обработки более сложных
жестов. Из-за этого большинство библиотек и проектов используют PanResponder вместо прямой работы с Gesture Responder System.

## Создания обработчика касаний

По сравнению с базовым Gesture Responder System в PanResponder методы прописываются за пределами тега (<View>) в виде отдельной переменной и присваиваютcя в пропсах (PanResponder импортируется из библиотеки react-native). Для этого необходимо создать обработчик касаний и прописать его конфигурацию следующим образом:

`const pan = PanResponder.create({config})`

Объект `config` предоставляет расширенные версии всех обратных вызовов ответчика, которые обеспечивают не только PressEvent, но и состояние жеста PanResponder, путем замены слова Responder на PanResponder в каждом из типичных обратных вызовов onResponder*. Рассмотрим некоторые callback-функции объекта config:

- `onStartShouldSetPanResponder: (e, gestureState) => {...}`
- `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
- `onPanResponderRelease: (e, gestureState) => {...}`
- `onPanResponderMove: (e, gestureState) => {...}`

Далее мы записываем созданную переменную в пропсы необходимого `View` следующим образом
```ts
<View {...panResponder.panHandlers}></View>
```

## Примеры

### Перемещение квадрата

Рассмотрим перемещение квадрата

```ts
function App() {
  const RECT_SIZE = 200;

  // Создаем анимированную переменную
  const pan = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0
    })
  ).current;

  // Создаем обработчик касаний и задаем обработчики
  //  1 - прописываем, что этот компонент хочет стать ответчиком при запуске события касания
  //  2 - обробатываем событие, когда пользователь перемещает палец (gestureState.numberActiveTouches - это количество пальцев, к-рые сейчас на экране)
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
```

ПРЕДИСЛОВИЕ
Хотя  Gesture Responder System и PanResponder являются очень хорошими вариантами реагирования на
прикосновения пользователя, у них также есть некоторые недостатки. Прежде всего, они имеют те же ограничения, что и
Animated API без встроенного драйвера. Поскольку события касания должны передаваться через мост в JavaScript thread, мы всегда отстаем на один кадр.

Другое ограничение заключается в том, что ни один API не позволяет нам определять какое-либо взаимодействие между собственными обработчиками жестов. Это означает, что всегда будут случаи, которые невозможно разрешить с помощью Gesture Responder System API.

Третье ограничение - мы не можем использовать библиотеку Reanimated.

Поэтому многие разработчики используют библиотеку React Native Gesture Handler. Но о ней в основных уроках говорится не будет.