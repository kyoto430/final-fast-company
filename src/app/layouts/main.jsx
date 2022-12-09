import React from "react";
// import useMockData from "../utils/mockData";

const Main = () => {
    // const { error, initialize, progress, status } = useMockData();
    // const handleClick = () => {
    //     initialize();
    // };
    return (
        <div className="container mt-5 bg-primary card">
            {/* <h1> Main Page</h1>
            <h3>Инициализация данных в FireBase</h3>
            <ul>
                <li>Status:{status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>error: {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                {" "}
                Инициализировать
            </button> */}
            <h1 className="d-flex text-center text-white p-5">
                Веб-приложение для организации культурно-досуговых мероприятий и
                встреч с друзьями{" "}
            </h1>
        </div>
    );
};

export default Main;
