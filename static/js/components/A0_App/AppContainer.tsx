import {HashRouter} from "react-router-dom";
import {App} from "./App";
import {RootStore, store} from "../../store/RootStore";
import {createContext} from "react";

export const StoreContext = createContext<RootStore>({} as RootStore)

export const AppContainer = () => {
    return (
        <HashRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>

        </HashRouter>
    )
}