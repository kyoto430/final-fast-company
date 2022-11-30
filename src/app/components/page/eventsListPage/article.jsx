import React from "react";
import { Link } from "react-router-dom";
import BookMark from "../../common/bookmark";
import TagsList from "../../ui/tags/tagsList";
import PropTypes from "prop-types";

const Article = ({
    _id,
    image,
    title,
    ligue,
    tags,
    text,
    update,
    adress,
    date,
    onDelete,
    bookmark,
    onToggleBookMark
}) => {
    return (
        <div className="card text-dark w-50">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img
                        src={image}
                        className="img-fluid rounded-start"
                        alt={title}
                    />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <div className="d-flex justify-content-end align-items-center">
                            <span className="badge bg-dark text-white m-1">
                                {ligue?.name}
                            </span>
                            <TagsList tags={tags} />
                        </div>
                        <h5 className="card-title text-center">{title}</h5>
                        {/* <p className="card-text">
                            {text &&
                                text.slice(
                                    0,
                                    text.length > 30
                                        ? text.length / 10
                                        : text.length
                                ) + "..."}
                        </p> */}
                        <div className="d-flex flex-column align-items-center">
                            <p>Дата проведения: {date}</p>
                            <p>Время проведения: {update}</p>
                            <p>Адресс: {adress}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/articles/${_id}`}>
                                <button className="btn btn btn-primary">
                                    Открыть
                                </button>
                            </Link>
                            <BookMark
                                status={bookmark}
                                onClick={() => onToggleBookMark(_id)}
                            />
                            <button
                                className="btn btn-danger"
                                onClick={() => onDelete(_id)}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Article.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    ligue: PropTypes.object,
    tags: PropTypes.array,
    text: PropTypes.string,
    adress: PropTypes.string,
    onDelete: PropTypes.func,
    bookmark: PropTypes.bool,
    status: PropTypes.bool,
    update: PropTypes.string,
    date: PropTypes.string,
    onToggleBookMark: PropTypes.func
};

export default Article;
