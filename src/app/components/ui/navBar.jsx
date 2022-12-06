import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImEnter } from "react-icons/im";
import { getIsLoggedIn } from "../../store/users";
import CartBlock from "./cartBlock";
import NavProfile from "./navProfile";
import { MdEventNote } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <nav
            className="navbar fs-5"
            style={{
                backgroundColor: "#F7AB0A",
                height: "100px",
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px"
            }}
        >
            <div className="container-fluid text-white">
                <ul className="nav d-flex align-items-center">
                    <li className="nav-item">
                        <Link
                            className="nav-link fs-3 text-white fw-bold"
                            aria-current="page"
                            to="/"
                        >
                            .Events
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link text-white"
                            aria-current="page"
                            to="/articles"
                        >
                            <MdEventNote />
                            События
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                aria-current="page"
                                to="/users"
                            >
                                <FiUsers />
                                Участники
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="d-flex">
                    {isLoggedIn && (
                        <Link
                            className="nav-link text-white"
                            aria-current="page"
                            to="/addEvent"
                        >
                            Добавить событие
                        </Link>
                    )}
                    <CartBlock />
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <Link
                            className="nav-link text-white"
                            aria-current="page"
                            to="/login"
                        >
                            Войти
                            <ImEnter size={25} />
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
