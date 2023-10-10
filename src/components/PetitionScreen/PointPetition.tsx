import {Circle, Svg} from 'react-native-svg';

type IColor = {
  color: string;
};

function PointPetition({color}: IColor) {
  return (
    <Svg height={24} width={24}>
      <Circle cx="50%" cy="50%" r={12} fill={color} />
      <Circle
        cx="50%"
        cy="50%"
        r={4}
        stroke="#2E2E2E"
        strokeWidth={2}
        fill="none"
      />
    </Svg>
  );
}

export default PointPetition;
