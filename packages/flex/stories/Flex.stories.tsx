import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Flex, FlexProps } from '../src';

export default {
  title: 'Layout/Flex',
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args: FlexProps) => <Flex {...args}>DEV</Flex>;

export const Default = Template.bind({});

// import React from 'react';
// import { Story, Meta } from '@storybook/react';
// import Radio, { RadioProps } from './Radio';

// export default {
//   title: 'Input/Radio',
//   component: Radio,
// } as Meta;

// const Template: Story<RadioProps> = (args) => {
//   return <Radio {...args} />;
// };

// export const SingleRadio = Template.bind({});
// SingleRadio.args = {
//   value: 'radio1',
//   name: 'radio1',
//   label: 'This is a Radio Button',
// };

// export const MultipleLabelsWithoutGroup = (args: any) => {
//   const [gender, setGender] = React.useState<string>('');

//   const handleOnchange = (e: any) => {
//     setGender(e);
//   };

//   return (
//     <>
//       <Radio
//         {...args}
//         value="female"
//         label="Female"
//         checked={gender === 'female'}
//         onChange={(e: string) => handleOnchange(e)}
//         marginRight={'40px'}
//       />
//       <Radio
//         {...args}
//         value="male"
//         label="Male"
//         checked={gender === 'male'}
//         onChange={(e: string) => handleOnchange(e)}
//         marginRight={'40px'}
//       />
//       <Radio
//         {...args}
//         label="Other"
//         value="other"
//         checked={gender === 'other'}
//         onChange={(e: string) => handleOnchange(e)}
//       />
//     </>
//   );
// };

// export const MultipleWithoutLabelsWithoutGroup = (args: any) => {
//   const [gender, setGender] = React.useState<string>('');

//   const handleOnchange = (e: any) => {
//     setGender(e);
//   };

//   return (
//     <>
//       <Radio
//         {...args}
//         value="female"
//         checked={gender === 'female'}
//         onChange={(e: string) => handleOnchange(e)}
//         marginRight={'40px'}
//       />
//       <Radio
//         {...args}
//         value="male"
//         checked={gender === 'male'}
//         onChange={(e: string) => handleOnchange(e)}
//         marginRight={'40px'}
//       />
//       <Radio
//         {...args}
//         value="other"
//         checked={gender === 'other'}
//         onChange={(e: string) => handleOnchange(e)}
//       />
//     </>
//   );
// };
