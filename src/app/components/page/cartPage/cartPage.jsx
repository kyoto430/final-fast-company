import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../../utils/price";
import OrderItem from "../../ui/orderItem";
// import Product from '../components/product'

function CartPage() {
    const items = useSelector((state) => state.cart.itemsInCart);
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
            </div>
        </div>
    );
}

export default CartPage;
