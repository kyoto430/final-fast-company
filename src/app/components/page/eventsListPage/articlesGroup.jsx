import React from "react";
import PropTypes from "prop-types";
import Article from "./article";
import GroupHeader from "./groupHeader";

const ArticlesGroup = ({
    articles,
    onSort,
    selectedSort,
    onDelete,
    onToggleBookMark
}) => {
    const columns = {
        title: { iter: "title", title: "названию" },
        ligues: { iter: "ligue.name", title: "категории" },
        bookmark: { iter: "bookmark", title: "избранному" },
        update: { iter: "update", title: "времени" }
    };
    return (
        <>
            <GroupHeader {...{ onSort, selectedSort, columns }} />
            <div className="d-flex flex-row justify-content-around flex-wrap w-100">
                {articles.map((article) => (
                    <Article
                        key={article._id}
                        {...article}
                        {...{ onDelete, onToggleBookMark }}
                    />
                ))}
            </div>
        </>
    );
};

ArticlesGroup.propTypes = {
    articles: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func
};

export default ArticlesGroup;
