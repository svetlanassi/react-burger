import React, { FC } from 'react';
import styles from '../page.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { TIngredient, TParams } from '../../utils/types';

export const IngredientPage: FC = () => {
    const { id } = useParams<TParams>();
    const { ingredients } = useSelector((store: any) => store.ingredients);
    const currentIngredient = React.useMemo(
            () => ingredients.find((item: TIngredient) => item._id === id),
        [ingredients, id]);

    return (
        <main className={styles.main}>
            <h2 className={styles.main__title}>Детали ингредиента</h2>
            {currentIngredient && <IngredientDetails />}
        </main>
    )
}