import React, { CSSProperties } from 'react';
import { BoxProps } from './Box';

const FlexBox: React.FC<BoxProps> = ({
  children,
  backgroundColor,
  color,
  border,
  borderRadius,
  padding,
  margin,
  style,
  display = 'flex',
  flexDirection,
  justifyContent,
  alignItems,
  width,
  height,
  ...restProps // Capture all div attributes and event handlers
}) => {
  const boxStyles: CSSProperties = {
    backgroundColor,
    color,
    border,
    borderRadius,
    padding,
    margin,
    width,
    height,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    ...style,
  };

  return (
    <div style={boxStyles} {...restProps}>
      {children}
    </div>
  );
};

export default FlexBox;
