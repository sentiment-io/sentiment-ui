import styled from 'styled-components';
import { FlexboxProps } from 'styled-system';

export type FlexProps = FlexboxProps;

/**
 * Flex component
 */
export const Flex = styled.div<FlexProps>`
  display: flex;
`;
