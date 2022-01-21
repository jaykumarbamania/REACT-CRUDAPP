import { createStore } from "redux";
import rootReducer from "../reducers/RootReducers";


const finalStore = createStore(rootReducer);

export default finalStore;