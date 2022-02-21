import styled from 'styled-components';
import { FlexboxProps } from 'styled-system';

export type FlexProps = FlexboxProps;

/**
 * Primary UI component for appying flex behaviour
 */
export const Flex = styled.div<FlexProps>({
  display: 'flex',
});
