import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Testing page render', () => {
  it('Home page renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
