import React from "react";
import PropTypes from "prop-types";

const searchStatusEvent = ({ length }) => {
    return (
        <div
            style={{ backgroundColor: "rgb(85, 88, 237)" }}
            className={"badge bg-" + (length > 0 ? "" : "danger")}
        >
            {length ? (
                <h3>Найдено мероприятий: {length}</h3>
            ) : (
                <h3>Мероприятия отсутствуют!</h3>
            )}
        </div>
    );
};

searchStatusEvent.propTypes = {
    length: PropTypes.number.isRequired
};

export default searchStatusEvent;
