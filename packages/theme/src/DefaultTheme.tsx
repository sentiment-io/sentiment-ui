import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    spaces: number[];
    color: string;
    sp: (...args: number[]) => string;
  }
}
