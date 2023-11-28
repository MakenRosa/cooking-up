import { createContext, useState } from 'react';
import db from './db.json';

export const IngredientsContext = createContext({
    categories: [],
    selectedIngredients: [],
});

export const IngredientsProvider = (props) => {
    const categories = db.categories;
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const alternateIngredient = (ingredient) => {
        if (selectedIngredients.some(item => item.id === ingredient.id)) {
            setSelectedIngredients(selectedIngredients.filter(item => item.id !== ingredient.id));
        } else {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        }
    };

    const isIngredientSelected = (ingredient) => {
        return selectedIngredients.some(item => item.id === ingredient.id);
    };
    return (
        <IngredientsContext.Provider value={{ categories, selectedIngredients, alternateIngredient, isIngredientSelected }}>
            {props.children}
        </IngredientsContext.Provider>
    );
};
