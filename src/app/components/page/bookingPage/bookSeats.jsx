import React, { useState } from "react";
import Seats from "./seats";

const createSeats = (rows, startIndex) => {
    const i = 0;
    let j = startIndex;
    let k = "A";
    const section = [];
    // eslint-disable-next-line no-unmodified-loop-condition
    while (i < 6 && j <= rows) {
        if (k > "F") {
            k = "A";
            j++;
        }
        if (j < rows + 1) {
            section.push(j + k);
            k = String.fromCharCode(k.charCodeAt(0) + 1);
        }
    }
    return section;
};

const defaultState = ["1A", "1B", "2A", "2B", "10A", "10B"];

function BookSeats() {
    const premiumSeats = createSeats(2, "1");
    const normalSeats = createSeats(10, "3");
    const [availableSeats, setAvailableSeats] = useState(
        JSON.parse(localStorage.getItem("avSeats")) || defaultState
    );
    const [bookedSeats, setBookedSeats] = useState([]);
    const [bookedStatus, setBookedStatus] = useState("");
    const addSeat = (ev) => {
        if (numberOfSeats && !ev.target.className.includes("disabled")) {
            const seatsToBook = parseInt(numberOfSeats, 10);
            if (bookedSeats.length <= seatsToBook) {
                if (bookedSeats.includes(ev.target.innerText)) {
                    const newAvailable = bookedSeats.filter(
                        (seat) => seat !== ev.target.innerText
                    );
                    setBookedSeats(newAvailable);
                } else if (bookedSeats.length < numberOfSeats) {
                    setBookedSeats([...bookedSeats, ev.target.innerText]);
                } else if (bookedSeats.length === seatsToBook) {
                    bookedSeats.shift();
                    setBookedSeats([...bookedSeats, ev.target.innerText]);
                }
            }
        }
    };

    const confirmBooking = () => {
        setBookedStatus("Вы успешно забронировали места: ");
        bookedSeats.forEach((seat) => {
            setBookedStatus((prevState) => {
                return prevState + seat + " ";
            });
        });
        const newAvailableSeats = availableSeats.filter(
            (seat) => !bookedSeats.includes(seat)
        );
        localStorage.setItem("avSeats", JSON.stringify(newAvailableSeats));
        localStorage.setItem("bookSeats", JSON.stringify(bookedSeats));
        setAvailableSeats(newAvailableSeats);
        setBookedSeats([]);
        setNumberOfSeats(0);
    };
    const [numberOfSeats, setNumberOfSeats] = useState(0);

    return (
        <div className="mt-3 pb-3">
            {availableSeats.length !== 0 ? (
                <>
                    <p>Сколько мест вы хотите забронировать?</p>
                    <input
                        className="border"
                        value={numberOfSeats}
                        onChange={(ev) => setNumberOfSeats(ev.target.value)}
                    />
                </>
            ) : null}
            <Seats
                values={premiumSeats}
                availableSeats={availableSeats}
                bookedSeats={bookedSeats}
                addSeat={addSeat}
            />
            <Seats
                values={normalSeats}
                availableSeats={availableSeats}
                bookedSeats={bookedSeats}
                addSeat={addSeat}
            />

            {availableSeats.length !== 0 ? (
                <button
                    style={{ backgroundColor: "rgb(85, 88, 237)" }}
                    className="btn text-white"
                    onClick={confirmBooking}
                >
                    Забронировать
                </button>
            ) : (
                <div className="mt-3 fw-bold">Все места забронированы!</div>
            )}
            <p className="mt-3 mb-3 fw-bold">{bookedStatus}</p>
        </div>
    );
}

export default BookSeats;
