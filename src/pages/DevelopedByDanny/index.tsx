import React from 'react';
import Text from '../../components/Text';
import { useNavigate } from 'react-router-dom';
import FlexBox from '../../components/FlexBox';
import './DevelopedByDanny.css';

const DevelopedByDanny: React.FC = () => {
  const navigate = useNavigate();

  return (
    <FlexBox
      className="background"
      flexDirection="column"
      height="100vh"
      width="100%"
    >
      <FlexBox className="grain" height="100vh" width="100%">
        <FlexBox
          height="100vh"
          width="100%"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          <Text
            textType="p"
            fontFamily="KryptonMedium"
            fontWeight={500}
            fontSize="calc(2vw + 2vh)"
            onClick={() => navigate('/home')}
            style={{ cursor: 'pointer' }}
          >
            DEVELOPED BY DANNY
          </Text>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default DevelopedByDanny;
