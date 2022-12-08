import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Events from "./layouts/events";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import AddArticlePage from "./components/page/eventsListPage/addArticlePage";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";
import CartPage from "./components/page/cartPage";
import BookingPage from "./components/page/bookingPage/bookingPage";

function App() {
    return (
        <div
            className="container shadow"
            style={{
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px"
            }}
        >
            <AppLoader>
                <NavBar />
                <Switch>
                    <ProtectedRoute
                        path="/users/:userId?/:edit?"
                        component={Users}
                    />
                    <ProtectedRoute
                        path="/addEvent"
                        component={AddArticlePage}
                    />
                    <ProtectedRoute path="/order" component={CartPage} />
                    <ProtectedRoute path="/booking" component={BookingPage} />
                    <Route
                        path="/articles/:articleId?/:edit?"
                        component={Events}
                    />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
