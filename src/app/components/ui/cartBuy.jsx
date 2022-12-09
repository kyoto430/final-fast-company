import React from "react";
import PropTypes from "prop-types";
import CustomButton from "./customButton/customButton";
import { useDispatch, useSelector } from "react-redux";
import {
    // decrement,
    deleteItemFromCart,
    // increment,
    setItemInCart
} from "../../store/cart";

function CartBuy({ article, onIncrement, onDecrement }) {
    // const newArticle = article;
    // const ls = JSON.parse(localStorage.getItem("bookSeats"));
    // console.log(ls);
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
    // const handleIncrement = () => {
    //     dispatch(increment());
    // };
    // const handleDecrement = () => {
    //     dispatch(decrement());
    // };
    return (
        <div className="event-buy w-100 text-end">
            <span className="event-buy__price">{article.price} руб.</span>
            {/* <span>{article.value}</span>
            <button onClick={() => onIncrement(article._id)}>+</button>
            <button onClick={() => onDecrement(article._id)}>-</button> */}
            <CustomButton type="primary" onClick={handleClick}>
                {isItemInCart ? "Убрать из корзины" : "В корзину"}
            </CustomButton>
        </div>
    );
}

CartBuy.propTypes = {
    article: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onDecrement: PropTypes.func,
    onIncrement: PropTypes.func
};

export default CartBuy;
