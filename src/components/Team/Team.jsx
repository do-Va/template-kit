import React, { useEffect, useState } from 'react';

import CustomHeader from '../CustomHeader';
import CustomCarousel from '../CustomCarousel';
import TeamItem from './TeamItem';
import Dot from '../Dot';
import { Wrapper, Button, DotContainer } from './styles';

import { teams } from '../../constans';

import leftIcon from '../../images/chevron-left.svg';
import rightIcon from '../../images/chevron-right2.svg';

const Team = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1;

      if (index > teams.length - 1) {
        index = 0;
      }

      return index;
    });
  };

  const prevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1;

      if (index < 0) {
        index = teams.length - 1;
      }

      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1;

        if (index > teams.length - 1) {
          index = 0;
        }

        return index;
      });
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <Wrapper>
      <CustomHeader>
        <p className="short-title">TEAM</p>
        <h3 className="title">Meet Our Big Family</h3>
        <p className="description">
          Ullamco id est eu ad culpa laborum. In sit est velit et nostrud ad
          officia officia ex aliqua elit.
        </p>
      </CustomHeader>
      <CustomCarousel
        gap={32}
        width={100}
        Component={TeamItem}
        obj={teams}
        index={index}
      />

      <DotContainer>
        {[...Array(teams.length).keys()].map(key => (
          <Dot key={key} isFull={index === key} />
        ))}
      </DotContainer>

      <Button left onClick={prevSlide}>
        <img src={leftIcon} alt="left icon" />
      </Button>
      <Button right onClick={nextSlide}>
        <img src={rightIcon} alt="right icon" />
      </Button>
    </Wrapper>
  );
};

export default Team;
