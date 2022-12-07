import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../store/cart";

function OrderItem({ article }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteItemFromCart(article._id));
    };
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <img width={200} src={article.image} alt={article.title} />
            </div>
            <div className="order-item__title">
                <span>{article.title}</span>
            </div>
            <div className="order-item__price">
                <span>{article.price} руб.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDelete}
                />
            </div>
        </div>
    );
}

OrderItem.propTypes = {
    article: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default OrderItem;
