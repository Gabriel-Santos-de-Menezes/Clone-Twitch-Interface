import React from "react";

import { Text } from "react-native";
import streanThumbnail from "../../images/stream_thumbnail.jpg";
import react from "../../images/react.jpg";
import myPhoto from "../../images/myPhoto.jpg";
import {
  Container,
  List,
  StramContainer,
  StramThumbnail,
  StramRow,
  StreamColum,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  TagRow,
  TagView,
  TagText,
  StreamDescription,
  StreamCategory,
} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StramContainer>
      <StramThumbnail source={react} />

      <StreamColum>
        <StramRow>
          <StreamHeader>
            <StreamAvatar source={myPhoto} />
            <StreamUserName numberOfLines={1}>gabriel_smz</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com React Native
          </StreamDescription>

          <StreamCategory numberOfLines={1}>Scince & Technology</StreamCategory>
        </StramRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Dev mobile</TagText>
          </TagView>
        </TagRow>
      </StreamColum>
    </StramContainer>
  );

  return (
    <Container>
      <List>
        <StreamItem />
        <StreamItem />
        <StreamItem />
        <StreamItem />
      </List>
    </Container>
  );
};

export default StreamList;
