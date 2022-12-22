import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCart, setBilets } from "../../../store/cart";
import { calcTotalPrice } from "../../../utils/price";
import OrderItem from "../../ui/orderItem";
// import Product from '../components/product'

function CartPage() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const handleClear = () => {
        alert("Ваш заказ успешно оплачен!");
        dispatch(setBilets(items));
        dispatch(deleteAllCart());
    };
    if (items.length < 1) {
        return <h1 className="text-center p-5">Ваша карзина пуста!</h1>;
    }
    return (
        <div className="order-page pb-4">
            <div className="order-page__left">
                {items.map((event) => (
                    <OrderItem key={event._id} article={event} />
                ))}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span className="fs-5 fw-bold">
                        {items.length} товаров на сумму {calcTotalPrice(items)}{" "}
                        руб.
                    </span>
                </div>
                <button
                    onClick={() => handleClear()}
                    style={{ backgroundColor: "rgb(85, 88, 237)" }}
                    className="btn btn-primary d-flex align-items-center fs-3"
                >
                    Оплатить
                </button>
            </div>
        </div>
    );
}

export default CartPage;
