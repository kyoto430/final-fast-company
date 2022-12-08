import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItemAvailableSeats, setItemSeat } from "../../../store/seats";
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

function BookSeats() {
    const dispatch = useDispatch();
    const itemsavailableItems = useSelector(
        (state) => state.seat.availableItems
    );
    const test = itemsavailableItems.map((e, index) => index);
    console.log("items", test);
    const premiumSeats = createSeats(2, "1");
    const normalSeats = createSeats(10, "3");
    const [availableSeats, setAvailableSeats] = useState([
        "1A",
        "1B",
        "2A",
        "2B",
        "10A",
        "10B"
    ]);
    console.log("свободные места", availableSeats);
    const [bookedSeats, setBookedSeats] = useState([]);
    console.log("забронированные места:", bookedSeats);
    const [bookedStatus, setBookedStatus] = useState("");
    console.log("статус:", bookedSeats);
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
        dispatch(setItemSeat(bookedSeats));
        bookedSeats.forEach((seat) => {
            setBookedStatus((prevState) => {
                return prevState + seat + " ";
            });
        });
        const newAvailableSeats = availableSeats.filter(
            (seat) => !bookedSeats.includes(seat)
        );
        dispatch(setItemAvailableSeats(newAvailableSeats));
        setAvailableSeats(newAvailableSeats);
        setBookedSeats([]);
        setNumberOfSeats(0);
    };
    const [numberOfSeats, setNumberOfSeats] = useState(0);

    return (
        <div className="mt-3 pb-3">
            <p>Сколько мест вы хотите забронировать?</p>
            <input
                className="border"
                value={numberOfSeats}
                onChange={(ev) => setNumberOfSeats(ev.target.value)}
            />
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

            <button
                style={{ backgroundColor: "rgb(85, 88, 237)" }}
                className="btn text-white"
                onClick={confirmBooking}
            >
                Забронировать
            </button>
            <p className="mt-3 mb-3 fw-bold">{bookedStatus}</p>
        </div>
    );
}

export default BookSeats;
