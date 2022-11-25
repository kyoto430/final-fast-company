import React from "react";
import PropTypes from "prop-types";

const searchStatusEvent = ({ length }) => {
    return (
        <div className={"badge bg-" + (length > 0 ? "primary" : "danger")}>
            {length ? (
                <h3>Мероприятий и встреч: {length}</h3>
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
