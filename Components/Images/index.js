import React from 'react';
import TP_Icon from './svgs/TP_Icon.svg';
import Sani_Icon from './svgs/Sani_icon.svg';
import Bottle_Icon from './svgs/Bottle_Icon.svg';
import QuestionMark from './svgs/QuestionMark.svg';

export const TP = ({ height, width, fill }) => {
  return (
    <TP_Icon height={height} width={width} fill={fill} />
  )
};

export const Sani = ({ height, width, fill }) => {
  return (
    <Sani_Icon height={height} width={width} fill={fill} />
  )
};

export const Bottle = ({ height, width, fill }) => {
  return (
    <Bottle_Icon height={height} width={width} fill={fill} />
  )
};

export const QuestionMrk = ({ height, width, fill, stroke }) => {
  return (
    <QuestionMark height={height} width={width} fill={fill} stroke={stroke} />
  )
};
