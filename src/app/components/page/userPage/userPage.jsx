import React from "react";
import PropTypes from "prop-types";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";

import { useSelector } from "react-redux";
import { getUserById } from "../../../store/users";

const UserPage = ({ userId }) => {
    const user = useSelector(getUserById(userId));
    const myBilets = useSelector((state) => state.cart.bilets);
    myBilets.flat();
    // const bilets = JSON.parse(localStorage.getItem("bookSeats"));
    if (user) {
        return (
            <div className="container mt-4">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                        <QualitiesCard data={user.qualities} />
                        <MeetingsCard value={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                    <div className="d-flex justify-content-around align-items-center fs-5 mb-3">
                        <div className="fw-bold fs-4">Мои заказы: </div>
                        <div>
                            {myBilets.flat().map((event) => (
                                <div
                                    key={event._id}
                                    className="d-flex align-items-center border-bottom m-2"
                                >
                                    <div className="mx-2">{event.title} -</div>
                                    <div>{event.price} руб.</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Загрузка</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
