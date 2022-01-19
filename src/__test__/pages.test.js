import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Testing tha Home and Quote pages render correctly', () => {
  it('Home page renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Quote page renders correctly', () => {
    const { asFragment } = render(<Quote />);
    expect(asFragment()).toMatchSnapshot();
  });
});
