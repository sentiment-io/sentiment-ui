import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../index';

import theme from '../../theme/src/themes/default';

test('should have disabled attribute', () => {
  const { container, getByRole } = render(
    <ThemeProvider theme={theme}>
      <Button disabled> ddd</Button>
    </ThemeProvider>,
  );
  expect(container).toBeInTheDocument();
  const but = getByRole('button');

  expect(getByRole('button').hasAttribute('disabled')).toBe(true);
  expect(but).toBeDisabled();
});
