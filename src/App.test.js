// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityBasePlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityBasePlus/i);
    expect(titleElement).toBeInTheDocument();
});
