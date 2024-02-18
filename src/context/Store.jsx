import { createContext, useContext, useReducer } from "react";
import { Reducer, initialState } from "./Reducer";
import Filter from "./Filter";
import reducer from "../component/reducer";

const Context =  createContext()


const Store = ({children}) => {
   
    const [products, dispatch] = useReducer(Reducer, initialState)
    const [filter, dis] = useReducer(Filter,{
        sort:null,
    })

    const initialValue = false;
    const [log, disp] = useReducer(reducer,initialValue)
     return  <Context.Provider value={{products, dispatch, filter, dis, log, disp}}>{children}</Context.Provider>
}
export const Use_r_state = () => useContext(Context);
export default Store;