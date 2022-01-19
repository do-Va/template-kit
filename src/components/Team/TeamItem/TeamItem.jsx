import React from 'react';

import {
  Wrapper,
  ImageContainer,
  UserImage,
  ContentContainer,
  Author,
  Job,
  SocialContainer,
  Social,
  SocialIcon,
} from './styles';

const TeamItem = ({
  image,
  author,
  job,
  social,
  position,
  itemIndex,
  length,
  index,
}) => {
  return (
    <Wrapper
      index={index}
      position={position}
      itemIndex={itemIndex}
      length={length}
    >
      <ImageContainer>
        <UserImage src={image} />
      </ImageContainer>
      <ContentContainer>
        <Author>{author}</Author>
        <Job>{job}</Job>
        <SocialContainer>
          {social.map(icon => (
            <Social key={icon.id}>
              <SocialIcon src={icon.socialIcon} />
            </Social>
          ))}
        </SocialContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default TeamItem;
