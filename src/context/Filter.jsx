

const Filter = ( state, action) => {
   
    switch (action.type) {
        case "Sort":
            return{
                ...state,
                sort:action.payload
            }
            break;
    
        default: return state;
            break;
    }
}

export default Filter