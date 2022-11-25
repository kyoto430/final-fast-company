import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
    getProfessionbyId,
    getProfessionsLoadingStatus
} from "../../store/professions";

const Profession = ({ id }) => {
    const isLoading = useSelector(getProfessionsLoadingStatus());
    const prof = useSelector(getProfessionbyId(id));
    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else return "Загрузка...";
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;
