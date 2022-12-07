import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { validator } from "../../../utils/ validator";
import API from "../../../api";
import Loader from "../../ui/loader";
import TextField from "../../common/form/textField";
import TextAreaField from "../../common/form/textAreaField";
import SelectField from "../../common/form/selectField";
import MultiSelectField from "../../common/form/multiSelectField";

const AddArticlePage = () => {
    const { articleId } = useParams();
    const history = useHistory();
    const [isLoading] = useState(false);
    const [data, setData] = useState({
        title: "",
        text: "",
        ligue: "",
        update: "",
        tags: [],
        date: "",
        adress: "",
        price: "",
        bookmark: false,
        image: ""
    });
    const [ligues, setLigues] = useState([]);
    const [tags, setTags] = useState({});
    const [errors, setErrors] = useState({});

    const getLigueById = (name) => {
        for (const lig in ligues) {
            const ligData = ligues[lig];
            if (ligData.name === name) return ligData;
        }
    };
    const getTags = (elements) => {
        const tagsArray = [];
        for (const elem of elements) {
            for (const tag in tags) {
                if (elem.value === tags[tag]._id) {
                    tagsArray.push(tags[tag]);
                }
            }
        }
        return tagsArray;
    };

    useEffect(() => {
        API.tags.fetchAll().then((data) => setTags(data));
        API.ligues.fetchAll().then((data) => setLigues(data));
    }, []);

    const validatorConfig = {
        title: {
            isRequired: { message: "Заголовок обязателен для заполнения" }
        },
        text: {
            isRequired: { message: "Текст обязателен для заполнения" }
        },
        ligue: {
            isRequired: { message: "Категория обязательна для заполнения" }
        },
        update: {
            isRequired: {
                message: "Время обязательно для заполнения"
            }
        },
        date: {
            isRequired: {
                message: "Дата обязательна для заполнения"
            }
        },
        adress: {
            isRequired: {
                message: "Адрес обязателен для заполнения"
            }
        },
        price: {
            isRequired: {
                message: "Цена обязательна для заполнения"
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { ligue, tags } = data;
        API.articles
            .add({ ...data, ligue: getLigueById(ligue), tags: getTags(tags) })
            .then((data) => history.push(`/articles`));
        console.log(data);
        console.log(articleId);
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading && Object.keys(ligues).length > 0 ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Заголовок события"
                                name="title"
                                value={data.title}
                                onChange={handleChange}
                                error={errors.title}
                            />
                            <TextAreaField
                                label="Описание события"
                                name="text"
                                value={data.text}
                                onChange={handleChange}
                                error={errors.text}
                            />
                            <SelectField
                                label="Выберите категорию"
                                defaultOption="Выбрать..."
                                onChange={handleChange}
                                options={ligues}
                                error={errors.ligue}
                                value={data.ligue}
                                name="ligue"
                            />
                            <TextField
                                label="Дата события"
                                name="date"
                                value={data.date}
                                onChange={handleChange}
                                error={errors.date}
                            />
                            <TextField
                                label="Время события"
                                name="update"
                                value={data.update}
                                onChange={handleChange}
                                error={errors.update}
                            />
                            <TextField
                                label="Адрес события"
                                name="adress"
                                value={data.adress}
                                onChange={handleChange}
                                error={errors.adress}
                            />
                            <TextField
                                label="Цена билета"
                                name="price"
                                value={data.price}
                                onChange={handleChange}
                                error={errors.price}
                            />
                            <TextField
                                label="URL изображения"
                                name="image"
                                value={data.image}
                                onChange={handleChange}
                            />
                            <MultiSelectField
                                defaultValue={data.tags}
                                options={tags}
                                onChange={handleChange}
                                name="tags"
                                label="Выберите теги"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Добавить
                            </button>
                        </form>
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddArticlePage;
