import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TagIngredient from '.';

describe('TagIngredient', () => {
  const ingredient = { name: 'Tomato' };
  const handleClick = vi.fn();

  it('renders correctly', () => {
    render(<TagIngredient ingredient={ingredient} onClick={handleClick} active={false} />);
    expect(screen.getByText('Tomato')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(<TagIngredient ingredient={ingredient} onClick={handleClick} active={false} />);
    fireEvent.click(screen.getByText('Tomato'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('calls onClick when active is false and button is clicked', () => {
    render(<TagIngredient ingredient={ingredient} onClick={handleClick} active={false} />);
    fireEvent.click(screen.getByText('Tomato'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('changes style when active', () => {
    const { rerender } = render(<TagIngredient ingredient={ingredient} onClick={handleClick} active={false} />);
    expect(screen.getByText('Tomato')).toHaveStyle('background: var(--light-grey, #EFEFEF)');
    
    rerender(<TagIngredient ingredient={ingredient} onClick={handleClick} active={true} />);
    expect(screen.getByText('Tomato')).toHaveStyle('background: var(--coral, #F0633C)');
  });

  it('displays ingredient name', () => {
    render(<TagIngredient ingredient={ingredient} onClick={handleClick} active={false} />);
    expect(screen.getByText('Tomato')).toBeInTheDocument();
  });

  it('matches snapshot when active is false', () => {
    const ingredient = { name: 'Tomato' };
    const { asFragment } = render(<TagIngredient ingredient={ingredient} onClick={() => {}} active={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when active is true', () => {
    const ingredient = { name: 'Tomato' };
    const { asFragment } = render(<TagIngredient ingredient={ingredient} onClick={() => {}} active={true} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
