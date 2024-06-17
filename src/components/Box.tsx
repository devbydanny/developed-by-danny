import React, { CSSProperties, ReactNode } from 'react';

export interface BoxProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string | number;
  padding?: string | number;
  margin?: string | number;
  style?: CSSProperties;
  display?: string;
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  width?: string | number;
  height?: string | number;
}

const Box: React.FC<BoxProps> = ({
  children,
  backgroundColor,
  color,
  border,
  borderRadius,
  padding,
  margin,
  style,
  display,
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

export default Box;
