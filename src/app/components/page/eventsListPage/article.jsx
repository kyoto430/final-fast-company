import React from "react";
import { Link } from "react-router-dom";
// import BookMark from "../../common/bookmark";
// import TagsList from "../../ui/tags/tagsList";
import PropTypes from "prop-types";
import CartBuy from "../../ui/cartBuy";
import { BiTimeFive } from "react-icons/bi";

const Article = (article) => {
    const {
        _id,
        image,
        title,
        ligue,
        // tags
        // update,
        // adress,
        date
        // bookmark
        // onToggleBookMark
    } = article;

    return (
        <div className="d-flex flex-column w-100 p-1">
            <Link to={`/articles/${_id}`}>
                <div className="card text-dark m-1">
                    <span
                        style={{ backgroundColor: "rgb(85, 88, 237)" }}
                        className="badge text-white m-1"
                    >
                        {ligue?.name}
                    </span>
                    <div className="">
                        <div className="d-flex align-items-center">
                            <img
                                style={{
                                    borderRadius: "10px"
                                }}
                                src={image}
                                className="img-fluid p-1 m-auto"
                                alt={title}
                            />
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="card-body">
                                {/* <div className="d-flex justify-content-end align-items-center">
                            <TagsList tags={tags} />
                        </div> */}
                                <h5
                                    style={{ height: "70px" }}
                                    className="card-title text-start fs-6"
                                >
                                    {title}
                                </h5>
                                <div className="d-flex align-items-center">
                                    <BiTimeFive />
                                    {date}
                                </div>
                                {/* <p className="card-text">
                            {text &&
                                text.slice(
                                    0,
                                    text.length > 30
                                        ? text.length / 10
                                        : text.length
                                ) + "..."}
                        </p> */}
                                {/* <div className="d-flex flex-column align-items-center">
                            <p>Время проведения: {update}</p>
                            <p>Адресс: {adress}</p>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="d-flex justify-content-center align-items-center">
                {/* <BookMark
                                status={bookmark}
                                onClick={() => onToggleBookMark(_id)}
                            /> */}
                <CartBuy article={article} />
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
    bookmark: PropTypes.bool,
    status: PropTypes.bool,
    update: PropTypes.string,
    date: PropTypes.string,
    onToggleBookMark: PropTypes.func
};

export default Article;
