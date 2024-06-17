import React from 'react';
import Text from '../../components/Text';
import { useNavigate } from 'react-router-dom';
import FlexBox from '../../components/FlexBox';

const DevelopedByDanny: React.FC = () => {
  const navigate = useNavigate();

  return (
    <FlexBox
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        textType="p"
        fontFamily="KryptonMedium"
        fontWeight={500}
        fontSize="calc(4vw + 4vh)"
        onClick={() => navigate('/home')}
        style={{ cursor: 'pointer' }}
      >
        DEVELOPED BY DANNY
      </Text>
    </FlexBox>
  );
};

export default DevelopedByDanny;
