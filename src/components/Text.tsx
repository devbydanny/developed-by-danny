import React, { CSSProperties, ElementType, ReactNode } from 'react';

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  textType?: ElementType;
  children?: ReactNode;
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  margin?: string | number;
  style?: CSSProperties;
}

const Text: React.FC<TextProps> = ({
  textType,
  children,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  margin,
  style,
  ...restProps
}) => {
  const textStyles: CSSProperties = {
    color,
    fontSize,
    fontFamily,
    fontWeight,
    margin,
    ...style,
  };

  const Component = textType || 'p';

  return (
    <Component style={textStyles} {...restProps}>
      {children}
    </Component>
  );
};

export default Text;
