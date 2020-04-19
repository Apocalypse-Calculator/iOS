import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={48} height={1} viewBox="0 0 48 1" {...props}>
      <Path d="M0 0h48v1H0z" fill="#00bd77" fillRule="evenodd" />
    </Svg>
  );
};

export default SvgComponent



