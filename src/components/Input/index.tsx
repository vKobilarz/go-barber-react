import React, { FC, InputHTMLAttributes, ComponentType } from 'react';

import { Container } from './styles';
import { IconBaseProps } from 'react-icons/lib';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: ComponentType<IconBaseProps>;
}

const Input: FC<InputProps> = ({ icon: Icon, ...props }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...props} />
  </Container>
);

export default Input;
