import { DefaultTheme } from 'styled-components';

const spaces = [0, 2, 4, 6, 8];

const theme: DefaultTheme = {
  name: 'DefaultTheme',
  color: '#df1c1c',
  spaces: spaces,
  sp: (...args: number[]) => args.map((v) => `${spaces[v]}px`).join(' '),
};

export default theme;
