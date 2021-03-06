import styles from './order-details.module.css';
import doneImg from '../../images/done.svg';
import { FC } from 'react';
import { useSelector } from '../../services/hooks';

const OrderDetails: FC = () => {
    const { orderNumber } = useSelector((store) => store.order);

    return (
        <div className={styles.container}>
            <h3 className="text text_type_digits-large">{orderNumber}</h3>
            <p className="text text_type_main-medium mt-8 mb-15">Идентификатор заказа</p>
            <img src={doneImg} alt="иконка" />
            <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;