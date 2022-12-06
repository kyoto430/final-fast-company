import React from "react";
import PropTypes from "prop-types";
import CustomButton from "./customButton/customButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../store/cart";

function CartBuy({ article }) {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item._id === article._id);
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(article._id));
        } else {
            dispatch(setItemInCart(article));
        }
    };
    return (
        <div className="event-buy w-100 text-end">
            <span className="event-buy__price">{article.price} руб.</span>
            <CustomButton type="primary" onClick={handleClick}>
                {isItemInCart ? "Убрать из корзины" : "В корзину"}
            </CustomButton>
        </div>
    );
}

CartBuy.propTypes = {
    article: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default CartBuy;
