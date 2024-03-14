// kick
// comment
import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome gitlab-repo/gi)).toBeTruthy();
  });

  it('should pass', () => {
    expect(true).toBeTruthy();
  });

  it('should add another test', () => {
    expect(false).toBeTruthy();
  });
});
