import { DefaultTheme } from 'styled-components';

const spaces = [0, 2, 4, 6, 8];
export default (): DefaultTheme => ({
  name: 'DefaultTheme',
  color: '#df1c1c',
  spaces,
  sp: (...args: number[]) => args.map((v) => `${spaces[v]}px`).join(' '),
});
