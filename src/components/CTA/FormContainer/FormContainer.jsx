import React from 'react';

import CustomButton from '../../CustomButton';
import CustomInput from '../../CustomInput';
import {
  Wrapper,
  Title,
  Text,
  Form,
  CheckBoxContainer,
  CheckBox,
  CheckBoxButton,
  Label,
  Link,
  LineContainer,
  Line,
  LineText,
  FacebookButton,
  FacebookIcon,
  VerticalLine,
} from './styles';

import { inputs } from '../../../constans';

import facebookIcon from '../../../images/facebookFull.svg';

const FormContainer = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <Wrapper>
      <Title>Join us today !</Title>
      <Text>Create your account now. And join our community, it’s free</Text>
      <Form onSubmit={handleSubmit}>
        {inputs.map(input => (
          <CustomInput key={input.id} {...input} />
        ))}
        <CheckBoxContainer>
          <CheckBox type="checkbox" name="I gree" id="I gree"></CheckBox>
          <CheckBoxButton for="I gree" id="I gree"></CheckBoxButton>
          <Label for="I gree">I gree</Label>
        </CheckBoxContainer>
        <CustomButton width={379} height={50} type="submit">
          Create accounts
        </CustomButton>
        <Link>Forgot password?</Link>
        <LineContainer>
          <Line />
          <LineText>or sign up with</LineText>
          <Line />
        </LineContainer>
        <FacebookButton>
          <FacebookIcon src={facebookIcon} />
          <VerticalLine />
          Facebook
        </FacebookButton>
      </Form>
    </Wrapper>
  );
};

export default FormContainer;
