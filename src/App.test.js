import {render, screen} from '@testing-library/react';
import SocialApp from './App';
import React from "react";
import {createRoot} from "react-dom"

test('renders learn react link', () => {
  render(<SocialApp/>);
  const linkElement = screen.getByRole(/main/i);
  expect(linkElement).toBeInTheDocument();
});

