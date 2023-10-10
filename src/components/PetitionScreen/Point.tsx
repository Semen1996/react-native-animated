import {Circle, Svg} from 'react-native-svg';

type IFill = {
  isFill: boolean;
};

function Point({isFill}: IFill) {
  return (
    <Svg height={24} width={24}>
      <Circle
        cx="50%"
        cy="50%"
        r={4}
        stroke="#2E2E2E"
        strokeWidth={2}
        fill={isFill ? "#2E2E2E" : 'none'}
      />
    </Svg>
  );
}

export default Point;