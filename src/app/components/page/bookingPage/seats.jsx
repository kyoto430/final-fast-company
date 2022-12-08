/* eslint-disable react/prop-types */
import React from "react";
import "./bookSeats.css";

function Seats(props) {
    return (
        <div className="section text-center">
            {props.values.map((seat) => {
                const isAvailable = props.availableSeats.includes(seat);
                const isBooked = props.bookedSeats.includes(seat);
                let seatClass;
                if (!isAvailable) {
                    seatClass = "disabled";
                }
                if (isBooked) {
                    seatClass = "booked";
                }
                return (
                    <div
                        style={{
                            fontSize: "14px",
                            marginTop: "2px",
                            paddingTop: "3px"
                        }}
                        className={seatClass}
                        onClick={props.addSeat}
                        key={seat}
                    >
                        {seat}
                    </div>
                );
            })}
        </div>
    );
}

export default Seats;
