import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducers";

export function configureStore(){
    return createStore(rootReducer,devToolsEnhancer())
}

//chrome için redux devtolls eklentisi kuruyoruz. Yayına aldığımızda kaldırabiliriz.