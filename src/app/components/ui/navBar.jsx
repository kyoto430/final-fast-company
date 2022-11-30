import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getIsLoggedIn } from "../../store/users";
import NavProfile from "./navProfile";
const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <nav className="navbar bg-white fs-5 mb-3 container">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                            <i className="bi bi-house"></i>Главная
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/addEvent"
                            >
                                Добавить новое событие
                            </Link>
                        </li>
                    )}
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            aria-current="page"
                            to="/articles"
                        >
                            События
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/users"
                            >
                                <i className="bi bi-people"></i>Участники
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="d-flex">
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <Link
                            className="nav-link"
                            aria-current="page"
                            to="/login"
                        >
                            <i className="bi bi-box-arrow-in-left"></i>Войти
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
