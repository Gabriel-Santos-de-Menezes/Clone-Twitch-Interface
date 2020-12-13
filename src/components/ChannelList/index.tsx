import React from "react";

import { Text } from "react-native";
import myPhoto from "../../images/myPhoto.jpg";

import { 
  Container,
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Collumn,
  UserName,
  Info,
  RightSide,
  WhiteCircle,

} from "./styles";

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar source={myPhoto} />
        <Collumn>
          <UserName>gabriel_smz</UserName>
          <Info>36 new videos</Info>
        </Collumn>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>

    </ChannelContainer>
  );
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
