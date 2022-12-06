import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../../../api";
import TagsList from "../../ui/tags/tagsList";
import { useHistory } from "react-router-dom";
import Loader from "../../ui/loader";
import CartBuy from "../../ui/cartBuy";

const ArticlePage = ({ articleId }) => {
    const history = useHistory();
    const [article, setArticle] = useState();
    useEffect(() => {
        API.articles.getById(articleId).then((data) => setArticle(data));
    }, []);
    const handleBack = () => {
        history.push("/articles");
    };
    const handleEdit = () => {
        history.push(history.location.pathname + "/edit");
    };
    if (article) {
        return (
            // <div className="d-flex flex-column container shadow p-3 rounded">
            //     <div className="d-flex justify-content-between">
            //         <span>
            //             <button
            //                 className="btn btn-sm btn-primary m-1"
            //                 onClick={handleBack}
            //             >
            //                 Назад
            //             </button>
            //         </span>
            //         <div className="d-flex align-items-center justify-content-around w-100">
            //             <strong>Дата проведения: </strong>
            //             {article.date}
            //             <strong>Время проведения: </strong>
            //             {article.update}
            //             <strong>Место проведения: </strong>
            //             {article.adress}
            //             <TagsList tags={article.tags} />
            //         </div>
            //     </div>
            //     <div className="d-flex flex-nowrap">
            //         <div className="p-2">
            //             <h1 className="text-center">{article.title}</h1>
            //             <p>
            //                 <img
            //                     className="float-end m-2"
            //                     src={article.image}
            //                     alt={article.title}
            //                 />
            //                 {article.text}
            //             </p>
            //         </div>
            //         <div className="p-2 bd-highlight d-flex flex-column align-items-center">
            //             <button
            //                 className="btn btn-sm btn-primary"
            //                 onClick={handleEdit}
            //             >
            //                 Редактировать
            //             </button>
            //         </div>
            //     </div>
            // </div>
            <div className="article-page">
                <div className="article-page__buttons">
                    <button
                        className="btn btn-sm btn-primary m-1"
                        onClick={handleBack}
                    >
                        Назад
                    </button>
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={handleEdit}
                    >
                        Редактировать
                    </button>
                </div>
                <h1 className="article-page__title">{article.title}</h1>
                <div className="article-page__content">
                    <div className="article-page__left">
                        <img
                            className="article-page__image"
                            src={article.image}
                            alt={article.title}
                        />
                    </div>
                    <div className="article-page__right">
                        <strong>Дата проведения: </strong> {article.date}{" "}
                        <strong>Время проведения: </strong>
                        {article.update} <strong>Место проведения: </strong>{" "}
                        {article.adress}
                        <div>
                            <strong>Описание:</strong>
                        </div>
                        <p>{article.text}</p>
                        <p className="secondary-text">Популярные метки:</p>
                        <TagsList tags={article.tags} />
                        <div className="article-page__buy-event">
                            <CartBuy article={article} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loader />;
    }
};

ArticlePage.propTypes = {
    articleId: PropTypes.string.isRequired
};

export default ArticlePage;
