import { render, fireEvent, screen } from '@testing-library/react';
import { IngredientsContext, IngredientsProvider } from './index';
import { useContext } from 'react';

// Componente de teste para consumir o contexto
const TestComponent = () => {
  const { alternateIngredient, isIngredientSelected, selectedIngredients } = useContext(IngredientsContext);

  return (
    <div>
      {selectedIngredients.map(ingredient => (
        <div key={ingredient.id}>{ingredient.name}</div>
      ))}
      <button onClick={() => alternateIngredient({ id: 1, name: 'Tomato' })}>Toggle Tomato</button>
      <div>{isIngredientSelected({ id: 1 }) ? 'Selected' : 'Not Selected'}</div>
    </div>
  );
};

describe('IngredientsProvider', () => {
  it('alternates ingredients correctly', () => {
    render(
      <IngredientsProvider>
        <TestComponent />
      </IngredientsProvider>
    );

    const toggleButton = screen.getByText('Toggle Tomato');
    fireEvent.click(toggleButton);
    expect(screen.getByText('Tomato')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.queryByText('Tomato')).not.toBeInTheDocument();
  });

  it('checks if ingredient is selected', () => {
    render(
      <IngredientsProvider>
        <TestComponent />
      </IngredientsProvider>
    );

    const toggleButton = screen.getByText('Toggle Tomato');
    expect(screen.getByText('Not Selected')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByText('Selected')).toBeInTheDocument();
  });
});
