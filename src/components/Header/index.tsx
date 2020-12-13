import React from 'react';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Text, Image } from 'react-native';
import colors from '../../styles/colors';
import myPhoto from '../../images/myPhoto.jpg';

import { Container, Avatar, OnlineStatus, RightSide, Button, ImgProfile } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <ImgProfile source={myPhoto} />
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons 
            name={"notifications-none"}
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <MaterialCommunityIcons 
            name={"message-outline"}
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather 
            name={"search"}
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
