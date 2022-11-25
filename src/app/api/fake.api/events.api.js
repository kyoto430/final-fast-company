const events = [
    {
        _id: "67rdca1818",
        title: "Концерт",
        text: "Музыкальный концерт",
        tags: ["Музыка"],
        time: "12:30",
        image: "https://static.footballhd.ru/uploads/posts/2022-01/1641893629_alex-ferguson-way.jpg",
        bookmark: false
    }
];

if (!localStorage.getItem("events")) {
    localStorage.setItem("events", JSON.stringify(events));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("events")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const events = JSON.parse(localStorage.getItem("events"));
        const eventIndex = events.findIndex((u) => u._id === id);
        events[eventIndex] = { ...events[eventIndex], ...data };
        localStorage.setItem("events", JSON.stringify(events));
        resolve(events[eventIndex]);
    });
const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const events = JSON.parse(localStorage.getItem("events"));
            const newEvent = {
                ...data,
                _id: Math.random().toString(36).substr(2, 9)
            };
            events.push(newEvent);
            localStorage.setItem("events", JSON.stringify(events));
            resolve(newEvent);
        }, 200);
    });
const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("events")).find(
                    (event) => event._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update,
    add
};
