import React from "react";
import { calcTotalPrice } from "../../utils/price";
import PropTypes from "prop-types";
import CustomButton from "./customButton/customButton";
import CartItem from "./cartItem";

function CartMenu({ items, onClick }) {
    return (
        <div className="cart-menu">
            <div className="cart-menu__events-list">
                {items.length > 0
                    ? items.map((event) => (
                          <CartItem
                              key={event.title}
                              price={event.price}
                              title={event.title}
                              id={event._id}
                          />
                      ))
                    : "Корзина пуста"}
            </div>
            {items.length > 0 ? (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} руб.</span>
                    </div>
                    <CustomButton type="primary" size="m" onClick={onClick}>
                        Оформить заказ
                    </CustomButton>
                </div>
            ) : null}
        </div>
    );
}

CartMenu.propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func
};

export default CartMenu;
