const tags = {
    new: { _id: "67rdca188", name: "Кино", color: "success" },
    gossip: { _id: "67rdca200", name: "Танцы", color: "info" },
    stats: { _id: "67rdca201", name: "Спорт", color: "info" },
    transfer: { _id: "67rdca202", name: "Музыка", color: "info" },
    history: { _id: "67rdca203", name: "Искусства", color: "yellow" },
    board: { _id: "67rdca204", name: "Настольные игры", color: "yellow" }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(tags);
        }, 2000);
    });

export default {
    fetchAll
};
