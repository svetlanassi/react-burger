import styles from '../page.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FC } from 'react';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import { useSelector } from '../../services/hooks';
import {
    loadingTextIngredients,
    errorTextIngredients
} from '../../utils/constants';

export const HomePage: FC = () => {
    const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector((store) => store.ingredients);

    return (
        <>
            {ingredientsRequest &&
                <div className={styles.main__initial}>
                    <p className="text text_type_main-default">{loadingTextIngredients}</p>
                </div>
            }
            {ingredientsFailed &&
                <div className={styles.main__initial}>
                    <p className="text text_type_main-default">{errorTextIngredients}</p>
                </div>
            }
            {!ingredientsRequest && !ingredientsFailed && ingredients.length > 0 &&
                <main className={styles.main__burger}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </DndProvider>
                </main>
            }
        </>
    )
}