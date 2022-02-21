import styled from 'styled-components';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren<{
    /**
     * How large should the button be?
     */
    size?: 'normal' | 'large';
    /**
     * Disable the button
     */
    disabled?: boolean;
    /**
     * Ignore the width property and expand to full width
     */
    fullWidth?: boolean;
  }>;

/**
 * Button component
 */
export const Button = styled.button<ButtonProps>`
  ${({ theme, disabled }) =>
    disabled &&
    `
    cursor: none;
    pointer-events: none;

  `}
  ${({ theme, size }) =>
    size == 'large' &&
    `
      padding-top: 70px;
      padding-bottom:90px;
  `}
`;
