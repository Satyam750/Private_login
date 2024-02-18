export const initialState = {
    cart:[],
    serchkey:'',
    sam:"hello"
};

export const Reducer = (state, action) => {
       switch (action.type) {
        case "ADD_TO_CART":
            const item = state.cart.find((i) => i.id === action.payload.id)
            if(item){
                return{
                    ...state,
                    cart:state.cart.map((i)=>i.id === action.payload.id ? {...i, qty:i.qty+1}:i)
                }
            }
            return {
                ...state,
                cart:[...state.cart,{...action.payload, qty:1}]
            }
            break;

        case "REMOVE_CART":
            return{
                ...state,
                cart:state.cart.filter((i)=> i.id !== action.payload.id)
            } 
            break;
        case "Search":
            return{
               ...state,
               serchkey:action.payload
            } 
            break;      
       
        default: return state
            break;
       }
}