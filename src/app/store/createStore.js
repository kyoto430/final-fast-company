import commentsReducer from "./comments";
import professionsReducer from "./professions";
import qualitiesReducer from "./qualities";
import usersReducer from "./users";
import cartReducer from "./cart";
import seatReducer from "./seats";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer,
    users: usersReducer,
    comments: commentsReducer,
    cart: cartReducer,
    seat: seatReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
