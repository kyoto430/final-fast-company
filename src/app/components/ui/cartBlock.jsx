import React, { useState, useCallback } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { calcTotalPrice } from "../../utils/price";
import CartMenu from "./cartMenu";
import ItemsInCart from "./itemsInCart";

function CartBlock() {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector((state) => state.cart.itemsInCart);
    const value = useSelector((state) => state.cart.count);
    // const bookingItems = useSelector((state) => state.seat.itemsInCart);
    const totalPrice = calcTotalPrice(items, value);
    const history = useHistory();
    const handleBuy = useCallback(() => {
        console.log("Buy");
        setIsCartMenuVisible(false);
        history.push("/order");
    }, [history]);
    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            <BiCartAlt
                size={25}
                className="cart-block__icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0 ? (
                <span className="cart-block__total-price">
                    {totalPrice} руб.
                </span>
            ) : null}
            {isCartMenuVisible && (
                <CartMenu items={items} onClick={handleBuy} value={value} />
            )}
        </div>
    );
}

export default CartBlock;
