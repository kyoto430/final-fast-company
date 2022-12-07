import commentsReducer from "./comments";
import professionsReducer from "./professions";
import qualitiesReducer from "./qualities";
import usersReducer from "./users";
import cartReducer from "./cart";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer,
    users: usersReducer,
    comments: commentsReducer,
    cart: cartReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
