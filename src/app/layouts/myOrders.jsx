import React from "react";
import { useSelector } from "react-redux";

function MyOrders() {
    const myBilets = useSelector((state) => state.cart.bilets);
    myBilets.flat();
    const bookingSeats = localStorage.getItem("bookSeats");
    return (
        <div className="d-flex justify-content-around align-items-center fs-5 mb-3">
            <div className="fw-bold fs-4">Забронированые места:</div>
            <div>{bookingSeats}</div>
            <div className="fw-bold fs-4">Мои заказы: </div>
            <div>
                {myBilets.flat().map((event) => (
                    <div
                        key={event._id}
                        className="d-flex align-items-center border-bottom m-2"
                    >
                        <div>№ заказа: {event._id}</div>
                        <div className="mx-2">{event.title} -</div>
                        <div>{event.price} руб.</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyOrders;
