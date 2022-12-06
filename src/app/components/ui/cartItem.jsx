import React from "react";
import PropTypes from "prop-types";

function CartItem({ title, price, id }) {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} руб.</span>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    id: PropTypes.string
};

export default CartItem;
