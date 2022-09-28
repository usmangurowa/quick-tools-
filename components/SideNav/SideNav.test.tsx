import { render, screen } from '@testing-library/react';
import SideNav from './SideNav';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<SideNav />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
