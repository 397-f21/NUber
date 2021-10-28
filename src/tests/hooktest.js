import React from 'react';
import App from '../index';

import { render, fireEvent, getByTestId } from '@testing-library/react';

it ('App loads with initial state of undefined for date state', () => {
    const { container } = render(<App />);
    const dateValue = getByTestId(container, 'datevalue');
    expect(dateValue.textContent).toBe();
});