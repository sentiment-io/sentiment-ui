import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../index';

export const LeftIconButton: Story<ButtonProps> = (args) => (
  <Button {...args}>Nao pensar</Button>
);

export default {
  title: 'Clickables/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
