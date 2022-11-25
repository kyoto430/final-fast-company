export const liguesObject = {
    cinema: { _id: "67rdca18", name: "Кино" },
    watch: { _id: "67rdca20", name: "Спектакли" },
    events: { _id: "67rdca21", name: "События" },
    concerts: { _id: "67rdca22", name: "Концерты" },
    shows: { _id: "67rdca23", name: "Выставки" },
    kids: { _id: "67rdca24", name: "Для детей" },
    sport: { _id: "67rdca25", name: "Спорт" },
    meetings: { _id: "67rdca26", name: "Встречи" }
};

export const ligues = [
    { _id: "67rdca18", name: "Кино" },
    { _id: "67rdca20", name: "Спектакли" },
    { _id: "67rdca21", name: "События" },
    { _id: "67rdca22", name: "Концерты" },
    { _id: "67rdca23", name: "Выставки" },
    { _id: "67rdca24", name: "Для детей" },
    { _id: "67rdca25", name: "Спорт" },
    { _id: "67rdca26", name: "Встречи" }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(liguesObject);
        }, 2000);
    });

export default {
    fetchAll
};
