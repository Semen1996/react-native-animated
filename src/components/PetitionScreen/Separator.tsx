import { Rect, Svg } from "react-native-svg";

function Separator() {
  return(
    <Svg height="1" width="100%">
    <Rect
      x="5%"
      y="0"
      width="90%"
      height="100%"
      fill="#EAE6FF"
    />
  </Svg>
  )
}

export default Separator;