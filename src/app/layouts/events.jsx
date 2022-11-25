import React from "react";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/page/eventsListPage/articlesList";
import EditArticlePage from "../components/page/eventsListPage/editArticlePage";
import ArticlePage from "../components/page/eventsListPage/articlePage";

const Events = () => {
    const params = useParams();
    const { articleId, edit } = params;
    return (
        <>
            {articleId ? (
                edit ? (
                    <EditArticlePage />
                ) : (
                    <ArticlePage articleId={articleId} />
                )
            ) : (
                <ArticlesList />
            )}
        </>
    );
};

export default Events;
